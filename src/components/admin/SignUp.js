import React, { useState } from 'react';
import Layout from '../Layout';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { signUp } from '../../redux/actions';
import { connect } from 'react-redux';
import history from '../../../history';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignUp = props => {
  const classes = useStyles();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const onSubmit = event => {
    event.preventDefault();

    const cred = { email: emailValue, password: passwordValue };
    props.signUp(cred);
  };
  if (props.isAuthenticated) {
    history.push('/');
  }
  return (
    <Layout>
      <div className={classes.paper} onSubmit={onSubmit}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          サインアップ
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='メールアドレス'
                name='email'
                autoComplete='email'
                onChange={event => {
                  setEmailValue(event.target.value);
                }}
                value={emailValue}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='パスワード'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={event => {
                  setPasswordValue(event.target.value);
                }}
                value={passwordValue}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            サインアップ
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link to='/admin' variant='body2'>
                すでにサインアップ済みはお済みですか？ログイン。
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { signUp }
)(SignUp);
