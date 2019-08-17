import React from 'react';
import Inquiry from './Inquiry';
import Layout from './Layout';
import Resume from './Resume';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    Width: '85%',
    margin: 'auto',
    marginTop: '.5rem'
  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant='h5'>Takumi Watanabe</Typography>
              <Typography variant='caption'>Frontend Developer</Typography>
              <Typography variant='body1'>
                I have been working as freelance software engineer (frontend
                developer) for 1+ year. My expertise involves major frontend
                programming such as React js combined with Redux. I build
                serverless web system by using Firebase and React/Redux. If you
                are interested in, please feel free to contact me from the
                inquiry form below.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Resume />
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

export default About;
