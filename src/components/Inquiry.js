import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { createInquiry } from '../redux/actions';

const validate = values => {
  const errors = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'favoriteColor',
    'notes'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    style={{ width: '70%' }}
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
    autoComplete='off'
  />
);

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

let Inquiry = props => {
  const { handleSubmit, pristine, reset, submitting, classes } = props;
  //handleSubmit = formValues => props.createInquiry(formValues);

  const onSubmit = formValues => {
    props.createInquiry(formValues);
    //console.log(formValues);
    //props.createInquiry(formValues);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {console.log(props)}
      <Typography>お問い合わせ</Typography>
      <div>
        <Field name='title' component={renderTextField} label='Title' />
      </div>
      <div>
        <Field name='email' component={renderTextField} label='Email' />
      </div>
      <div />
      <div>
        <Field
          name='notes'
          component={renderTextField}
          label='Notes'
          multiline
          rowsMax='4'
          margin='normal'
        />
      </div>
      <div>
        <button type='submit' disabled={pristine || submitting}>
          Submit
        </button>
        <button type='button' disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

Inquiry = connect(
  null,
  { createInquiry }
)(Inquiry);

export default reduxForm({
  form: 'Inquiry',
  validate
})(Inquiry);
