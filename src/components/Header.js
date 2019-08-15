import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: '40vh',
    display: 'flex',
    flexDirection: 'column-reverse',
    backgroundImage:
      'linear-gradient(to right, rgba(0,0,255,0.1), rgba(0,0,255,0.2)), url(../../../static/header.jpg)'
  }
}));
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography color='textSecondary' variant='h1' component='h2'>
        Takumi Watanabe
      </Typography>
    </div>
  );
};

export default Header;
