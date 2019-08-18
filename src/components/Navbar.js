import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { logOut } from '../redux/actions';
import { Link } from 'react-router-dom';

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
      return (
        <Button onClick={props.logOut} color='inherit'>
          Logout
        </Button>
      );
    } else {
      return (
        <div>
          <Button component={Link} to='/admin' color='inherit'>
            Login
          </Button>
          <Button component={Link} to='/signup' color='inherit'>
            Sign Up
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
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            News
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
