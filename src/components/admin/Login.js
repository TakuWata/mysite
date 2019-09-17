import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { login } from '../../redux/actions/index';
import { connect } from 'react-redux';
import Layout from '../Layout';
import { Link } from 'react-router-dom';
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
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Login = props => {
  const classes = useStyles();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    const cred = { email: emailValue, password: passwordValue };
    props.login(cred);
  };

  if (props.isAuthenticated) {
    history.push('/admin');
  }
  return (
    <Layout>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          ログイン
        </Typography>
        <Typography color='primary' style={{ marginTop: '1rem' }}>
          *送信したお問い合わせ内容は、ログイン後に、確認可能です。以下のメールアドレスとパスワードを使ってください。
        </Typography>
        <Typography color='primary'>
          email: test@test.com password: test1234
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            className='loginInputEmail'
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='メールアドレス'
            name='email'
            autoComplete='email'
            autoFocus
            onChange={event => {
              setEmailValue(event.target.value);
            }}
            value={emailValue}
            autoComplete='off'
          />
          <TextField
            variant='outlined'
            margin='normal'
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
            autoComplete='off'
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            ログイン
          </Button>
          <Grid container>
            <Grid item>
              <Link to='/signup'>
                {'アカウントをお持ちではない場合、サインアップして下さい。'}
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
    isAuthenticated: state.firebase.auth.uid
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
