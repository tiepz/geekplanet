import Xhr from './xhr';

export const SPOTLIGHT_PRODUCTS_LOADED = 'SPOTLIGHT_PRODUCTS_LOADED';
export const PRODUCT_SELECTED = 'PRODUCT_SELECTED';
export const PRODUCT_CATEGORIES_LOADED = 'PRODUCT_CATEGORIES_LOADED';
export const SELECT_PRODUCT_CATEGORY = 'SELECT_PRODUCT_CATEGORY';
export const TRANSLATIONS_LOADED = 'TRANSLATIONS_LOADED';
export const LOGGED_IN = 'LOGGED_IN';
export const PROFILE_LOADED = 'PROFILE_LOADED';
export const LOGGED_OUT = 'LOGGED_OUT';
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
export const ADD_ITEM_TO_SHOPPING_CART = 'ADD_ITEM_TO_SHOPPING_CART';
export const REMOVE_ITEM_FROM_SHOPPING_CART = 'REMOVE_ITEM_FROM_SHOPPING_CART';
export const LOAD_SHOPPING_CART = 'LOAD_SHOPPING_CART';
export const HIDE_SHOPPING_CART_NOTIFICATION = 'HIDE_SHOPPING_CART_NOTIFICATION';
export const SET_SHOPPING_CART_AMOUNT = 'SET_AMOUNT';
export const ORDER_FINISHED = 'ORDER_FINISHED';
export const SAVE_ADDRESS = 'SAVE_ADDRESS';
export const ADDRESSES_LOADED = 'ADDRESSES_LOADED';
export const SELECT_ADDRESS = 'SELECT_ADDRESS';
export const SELECT_ORDER_STEP = 'SELECT_ORDER_STEP';
export const PRODUCTS_LOADED = 'PRODUCTS_LOADED';

export const createLoadTranslations = (translationService, localeWithFallback) => dispatch =>
  translationService.loadTranslations(localeWithFallback)
    .then(translations => dispatch({
      type: TRANSLATIONS_LOADED,
      translations,
    }));

export const createLoadShoppingCart = () => ({
  type: LOAD_SHOPPING_CART,
});

export const createLoggedIn = ({ email, 'https://geekplanet.ch/roles': roles }) => ({
  type: LOGGED_IN,
  profile: {
    email,
    roles,
  },
});

export const createProfileLoaded = authService => dispatch =>
  authService.getUserInfo()
    .then(profile => dispatch({
      type: PROFILE_LOADED,
      profile,
    }));

export const createLoadSpotlightProducts = () => dispatch =>
  Xhr.get('/api/products/spotlight').then(spotlightProducts => dispatch({
    type: SPOTLIGHT_PRODUCTS_LOADED,
    spotlightProducts,
  }));

export const createLogout = () => ({
  type: LOGGED_OUT,
});

export const createToggleDrawer = () => ({
  type: TOGGLE_DRAWER,
});

export const createHideShoppingCartNotification = () => ({
  type: HIDE_SHOPPING_CART_NOTIFICATION,
});

export const createLoadAddresses = () => dispatch =>
  Xhr.get('/api/userAddresses')
    .then(addresses => dispatch({
      type: ADDRESSES_LOADED,
      data: addresses,
    }));

export const createSelectAddress = address => ({
  type: SELECT_ADDRESS,
  data: address,
});

export const createSaveAddress = address => dispatch =>
  Xhr.put(
    '/api/userAddress',
    address,
    'application/json',
  )
    .then(addressId => dispatch({
      type: SAVE_ADDRESS,
      data: addressId,
    }));

export const createSelectStep = step => ({
  type: SELECT_ORDER_STEP,
  data: step,
});

export const createFinishOrder = () => ({
  type: ORDER_FINISHED,
});

export const createLoadProduct = productId => dispatch =>
  Xhr.get(`/api/products/${productId}`)
    .then(selectedProduct => dispatch({
      type: PRODUCT_SELECTED,
      selectedProduct,
    }));

export const createAddItemToShoppingCart = product => ({
  type: ADD_ITEM_TO_SHOPPING_CART,
  data: product,
});

export const createLoadProducts = () => dispatch =>
  Xhr.get('/api/products').then(products => dispatch({
    type: PRODUCTS_LOADED,
    products,
  }));

export const createSetShoppingCartamount = (amount, product) => ({
  type: SET_SHOPPING_CART_AMOUNT,
  data: {
    amount,
    product,
  },
});
