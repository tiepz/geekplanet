import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from '../../formHelpers/textField.jsx';
import SelectField from '../../formHelpers/selectField.jsx';
import { ProductCategoryPropType } from './forms.proptypes';

export const formName = 'productcategories';

const styles = {
  container: {
    padding: '24px',
  },
};

const ProductCategoriesForm = ({
  handleSubmit,
  onSubmit,
  productCategories,
  selectProductCategory,
}) => (
  <form
    style={styles.container}
    name={formName}
    onSubmit={handleSubmit(onSubmit)}
  >
    <Field
      component={SelectField}
      name="_id"
      onChange={(event, value) => selectProductCategory(value)}
    >
      <MenuItem
        value=""
        primaryText="Create new"
      />
      {productCategories.map(({ _id, name }) => <MenuItem
        key={_id}
        value={_id}
        primaryText={name}
      />)}
    </Field>
    <br />
    <Field
      component={TextField}
      name="name"
      label="Name"
      type="text"
    />
    <br />
    <RaisedButton label="Save" primary type="submit" />
  </form>
);

ProductCategoriesForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  selectProductCategory: PropTypes.func.isRequired,
  productCategories: PropTypes.arrayOf(ProductCategoryPropType).isRequired,
};

export default reduxForm({
  form: formName,
  destroyOnUnmount: false,
})(ProductCategoriesForm);
