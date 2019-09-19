import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LazyLoad from 'react-lazyload';

const useStyles = makeStyles(theme => ({
  root: {
    height: '40vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
    //backgroundImage:
    //  'linear-gradient(to right, rgba(0,0,255,0.1), rgba(0,0,255,0.2)), url(../../../static/header.jpg)'
  }
}));
const Header = () => {
  const classes = useStyles();
  // return <div className={classes.root}></div>;
  return (
    <div className={classes.root}>
      <LazyLoad
        placeholder={
          <img
            src='../../../static/s_header.jpg'
            style={{ height: '100%' }}
            alt='...'
          />
        }
      >
        <img
          src='../../../static/header.jpg'
          style={{ height: '100%' }}
          alt='...'
        />
      </LazyLoad>
    </div>
  );
};

export default Header;
