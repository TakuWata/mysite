import React from 'react';
import Header from './Header';
import Layout from './Layout';
import Skill from './Skill';
import Greeting from './Greeting';
import Inquiry from './Inquiry';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    Width: '85%',
    margin: 'auto'
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper} style={{ marginTop: '.5rem' }}>
              <Header />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Greeting />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Skill />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Inquiry />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default Home;
