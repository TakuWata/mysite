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
      <Typography variant='h6'>お問い合わせ</Typography>
      <Typography color='primary'>
        *現在、ポートフォリオサイトとして運用中のため、個人情報などを含む情報の入力は行わないでください。
      </Typography>
      <Typography color='primary'>
        *送信したお問い合わせ内容は、ログイン後に、確認可能です。以下のメールアドレスとパスワードを使ってください。
      </Typography>
      <Typography color='primary'>
        email: test@test.com password: test1234
      </Typography>

      <div>
        <Field name='title' component={renderTextField} label='タイトル' />
      </div>
      <div>
        <Field
          name='email'
          component={renderTextField}
          label='メールアドレス'
        />
      </div>
      <div />
      <div>
        <Field
          name='content'
          component={renderTextField}
          label='お問い合わせ内容'
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
          送信
        </Button>
        <Button
          type='button'
          variant='contained'
          className={classes.button}
          color='secondary'
          disabled={pristine || submitting}
          onClick={reset}
        >
          クリア
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
