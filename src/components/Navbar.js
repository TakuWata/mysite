import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { connect } from 'react-redux';
import { logOut } from '../redux/actions';
import { Link } from 'react-router-dom';
import history from '../../history';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Navbar = props => {
  const classes = useStyles();

  const renderButton = () => {
    if (props.isAuthenticated) {
      if (history.location.pathname === '/') {
        return (
          <React.Fragment>
            <Button component={Link} to='/admin' color='inherit'>
              アドミン
            </Button>
            <Button onClick={props.logOut} color='inherit'>
              ログアウト
            </Button>
          </React.Fragment>
        );
      } else if (history.location.pathname === '/admin')
        return (
          <React.Fragment>
            <Button component={Link} to='/' color='inherit'>
              ホーム
            </Button>
            <Button onClick={props.logOut} color='inherit'>
              ログアウト
            </Button>
          </React.Fragment>
        );
    } else {
      return (
        <div>
          <Button component={Link} to='/admin' color='inherit'>
            ログイン
          </Button>
          <Button component={Link} to='/signup' color='inherit'>
            サインアップ
          </Button>
        </div>
      );
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            component={Link}
            to='/'
          >
            <HomeIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            ポートフォリオサイト
          </Typography>
          {renderButton()}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.firebase.auth.uid
  };
};

export default connect(
  mapStateToProps,
  { logOut }
)(Navbar);
