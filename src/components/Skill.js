import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  react: {
    padding: theme.spacing(3, 2),
    backgroundSize: 'cover',
    width: '100%',
    height: '0',
    paddingBottom: '50%',
    backgroundImage:
      'linear-gradient(to right, rgba(0,0,255,0.1), rgba(0,0,255,0.2)), url(../../../static/react.png)'
  },
  redux: {
    padding: theme.spacing(3, 2),
    backgroundSize: 'cover',
    width: '100%',
    height: '0',
    paddingBottom: '50%',
    backgroundImage:
      'linear-gradient(to right, rgba(0,0,255,0.1), rgba(0,0,255,0.2)), url(../../../static/redux.png)'
  },
  firebase: {
    padding: theme.spacing(3, 2),
    backgroundSize: 'cover',
    width: '100%',
    height: '0',
    paddingBottom: '50%',
    backgroundImage:
      'linear-gradient(to right, rgba(0,0,255,0.1), rgba(0,0,255,0.2)), url(../../../static/firebase.png)'
  },
  sass: {
    padding: theme.spacing(3, 2),
    backgroundSize: 'cover',
    width: '100%',
    height: '0',
    paddingBottom: '50%',
    backgroundImage:
      'linear-gradient(to right, rgba(0,0,255,0.1), rgba(0,0,255,0.2)), url(../../../static/sass.png)'
  },
  django: {
    padding: theme.spacing(3, 2),
    backgroundSize: 'cover',
    width: '100%',
    height: '0',
    paddingBottom: '50%',
    backgroundImage:
      'linear-gradient(to right, rgba(0,0,255,0.1), rgba(0,0,255,0.2)), url(../../../static/django.png)'
  },
  mysql: {
    padding: theme.spacing(3, 2),
    backgroundSize: 'cover',
    width: '100%',
    height: '0',
    paddingBottom: '50%',
    backgroundImage:
      'linear-gradient(to right, rgba(0,0,255,0.1), rgba(0,0,255,0.2)), url(../../../static/mysql.png)'
  }
}));

const Skill = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant='h3'>Skills</Typography>
      </Grid>

      <Grid item xs={4}>
        <Paper className={classes.react}>Skill</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.redux}>Skill</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.firebase}>Skill</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.sass}>Skill</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.django}>Skill</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.mysql}>Skill</Paper>
      </Grid>
    </Grid>
  );
};

export default Skill;
