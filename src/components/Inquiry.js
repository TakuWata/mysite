import React from 'react';
import { reset, Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { createInquiry } from '../redux/actions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

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
  const { handleSubmit, pristine, reset, submitting } = props;
  const classes = useStyles();

  const onSubmit = formValues => {
    props.createInquiry(formValues);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          name='content'
          component={renderTextField}
          label='Content'
          multiline
          rowsMax='4'
          margin='normal'
        />
      </div>
      <div>
        <Button
          type='submit'
          variant='contained'
          className={classes.button}
          color='primary'
          disabled={pristine || submitting}
        >
          Submit
        </Button>
        <Button
          type='button'
          variant='contained'
          className={classes.button}
          color='secondary'
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear Values
        </Button>
      </div>
    </form>
  );
};

Inquiry = connect(
  null,
  { createInquiry }
)(Inquiry);

const afterSubmit = (result, dispatch) => dispatch(reset('Inquiry'));

export default reduxForm({
  form: 'Inquiry',
  onSubmitSuccess: afterSubmit,
  validate
})(Inquiry);
