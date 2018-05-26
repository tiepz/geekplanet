const router = require('express').Router();
const compression = require('compression');
const { authorization, isAdmin } = require('./auth');
const shortId = require('shortid');
const bodyParser = require('body-parser');
const multer = require('multer')();
const streamifier = require('streamifier');
const sharp = require('sharp');
const Logger = require('../logger');
const mongoHelper = require('../db/mongoHelper');
const { saveOrUpdate, handleGenericError } = require('../db/mongoHelper');
const fs = require('fs');

const {
  Product,
  ProductPicturesCollection,
  ProductCategory,
  Producer,
} = require('../db/models');

function saveFileInSize(id, file, sizeTag, size) {
  return new Promise((resolve, reject) => {
    const writestream = mongoHelper.gridfs.createWriteStream({
      _id: `${id}_${sizeTag}`,
      filename: `${id}_${sizeTag}.jpeg}`,
      root: ProductPicturesCollection,
    });

    streamifier.createReadStream(file.buffer)
      .pipe(sharp()
        .resize(size, Math.round(size * 0.75))
        .background({
          r: 255,
          g: 255,
          b: 255,
          alpha: 1,
        })
        .flatten()
        .embed()
        .jpeg()
      )
      .pipe(writestream);

    writestream.on('close', () => resolve());
    writestream.on('error', error => reject(error));
  });
}

function removeFile(id) {
  return Promise.all([
    new Promise((resolve, reject) =>
      mongoHelper.gridfs.remove({
        _id: `${id}_s`,
        root: ProductPicturesCollection,
      }, err => (err ? reject(err) : resolve()))),
    new Promise((resolve, reject) =>
      mongoHelper.gridfs.remove({
        _id: `${id}_m`,
        root: ProductPicturesCollection,
      }, err => (err ? reject(err) : resolve()))),
    new Promise((resolve, reject) =>
      mongoHelper.gridfs.remove({
        _id: `${id}_l`,
        root: ProductPicturesCollection,
      }, err => (err ? reject(err) : resolve()))),
  ]);
}

const productFilter = {
  purchasePrice: 0,
  purchasePackageSize: 0,
  minStock: 0,
  supplier: 0,
  supplierProductCode: 0,
  remarks: 0,
};

const productListFilter = {
  _id: 1,
  category: 1,
  producer: 1,
  tags: 1,
  'de.name': 1,
  'de.shortDescription': 1,
  price: 1,
  originalPrice: 1,
  stock: 1,
  files: {
    $slice: 1,
  },
};

router.get('/', compression(),
  (req, res) =>
    Product.find({}, productListFilter).sort({ number: 1 })
      .then(products => res.send(products))
      .catch((err) => {
        Logger.error(err);
        res.status(500).send('Fetching products failed!');
      })
);

router.put('/', authorization, isAdmin, bodyParser.json(),
  (req, res) =>
    saveOrUpdate(Product, req.body)
      .then(() => res.sendStatus(200))
      .catch(handleGenericError)
);

router.post('/pictures', authorization, isAdmin, multer.any(),
  (req, res) =>
    Promise.all(req.files.map((file) => {
      const id = shortId.generate();

      return Promise.all([
        saveFileInSize(id, file, 's', 450),
        saveFileInSize(id, file, 'm', 800),
        saveFileInSize(id, file, 'l', 1600),
      ])
        .then(() => id);
    }))
      .then(files => res.status(200).send(JSON.stringify(files)))
      .catch(error => handleGenericError(error, res))
);

router.get('/pictures/:id',
  (req, res) => {
    res.header({
      'Cache-Control': 'public, max-age=31536000',
    });

    const readStream = mongoHelper.gridfs.createReadStream({
      _id: req.params.id,
      root: ProductPicturesCollection,
    });

    readStream.on('error', () => {
      res.setHeader('content-type', 'image/jpeg');
      fs.createReadStream('src/client/assets/images/notFound.jpg').pipe(res);
    });

    readStream.pipe(res);
  });

router.delete('/pictures/:id', authorization, isAdmin,
  (req, res) =>
    removeFile(req.params.id)
      .then(() => Product.update({}, { $pull: { files: req.params.id } }, { multi: true }))
      .then(() => res.sendStatus(200))
      .catch(error => handleGenericError(error, res))
);

router.get('/complete', authorization, isAdmin, compression(),
  (req, res) =>
    Product.find().sort({ number: 1 })
      .then(products => res.send(products))
      .catch((err) => {
        Logger.error(err);
        res.status(500).send('Fetching products failed!');
      })
);

router.get('/categories', compression(),
  (req, res) =>
    ProductCategory.find().sort({ order: 1, 'de.name': 1 })
      .then(categories => res.send(categories))
      .catch((err) => {
        Logger.error(err);
        res.status(500).send('Fetching product categories failed!');
      })
);

router.put('/categories', authorization, isAdmin, bodyParser.json(),
  ({ body }, res) => {
    const promises = [];
    if (body._id) {
      ProductCategory.findOne({ _id: body._id })
        .then(({ name }) => {
          if (name !== body.name) {
            promises.push(ProductCategory.update(
              { parentCategory: name },
              { $set: { parentCategory: body.name } },
              { multi: true }).exec());
          }
        });
    }
    promises.push(saveOrUpdate(ProductCategory, body));
    Promise.all(promises)
      .then(() => res.sendStatus(200))
      .catch(error => handleGenericError(error, res));
  });

router.get('/:id',
  (req, res) =>
    Product.findOne({ _id: req.params.id }, productFilter)
      .then(product =>
        Promise.all([
          ProductCategory.findOne({ _id: product.category }),
          Producer.findOne({ _id: product.producer }),
        ])
          .then(([category, producer]) =>
            res.send(Object.assign({}, product.toObject(), {
              category,
              producer,
            }))
          )
      )
      .catch((err) => {
        Logger.error(err);
        res.status(500).send('Fetching product failed!');
      })
);

router.delete('/:id', authorization, isAdmin,
  (req, res) =>
    Product.findOne({ _id: req.params.id })
      .then((product) => {
        const pictureRemovePromises = product.files.length ?
          product.files.map(productFile => removeFile(productFile)) : [];

        return Promise.all(pictureRemovePromises)
          .then(() => Product.remove({ _id: req.params.id }))
          .then(res.sendStatus(200));
      })
      .catch((err) => {
        Logger.error(err);
        res.status(500).send('Removing product or assigned images failed!');
      })
);

module.exports = router;