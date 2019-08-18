import React, { useEffect } from 'react';
import Layout from '../Layout';
import Login from './Login';
import { connect } from 'react-redux';
import { fetchInquiries } from '../../redux/actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paperRoot: {
    color: theme.palette.text.primary,
    Width: '100%',
    padding: theme.spacing(2),
    marginTop: '2rem'
  },
  paperList: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    Width: '85%',
    margin: 'auto'
  }
}));

const Admin = props => {
  const classes = useStyles();
  useEffect(() => {
    props.fetchInquiries();
  }, []);

  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  const renderInquiries = () => {
    return props.inquiries.map(inquiry => {
      return (
        <Grid item xs={12} key={inquiry.id}>
          <Paper className={classes.paperList}>
            <Grid container>
              <Grid item xs={2}>
                {inquiry.title}
              </Grid>
              <Grid item xs={2}>
                {moment(inquiry.createdAt.toDate()).format('YYYY[/]MM[/]DD')}
              </Grid>
              <Grid item xs={2}>
                {inquiry.email}
              </Grid>
              <Grid item xs={6}>
                {inquiry.content}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      );
    });
  };
  if (!props.isAuthenticated) return <Login />;
  if (isEmpty(props.inquiries))
    return (
      <Layout>
        <Grid container spacing={3} className={classes.root}>
          <CircularProgress />
        </Grid>
      </Layout>
    );
  return (
    <Layout>
      <Paper className={classes.paperRoot}>
        <Typography
          color='primary'
          variant='h6'
          style={{ marginBottom: '.5rem' }}
        >
          TO DO
        </Typography>
        <Paper className={classes.paperList} style={{ marginBottom: '1rem' }}>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              Title
            </Grid>
            <Grid item xs={2}>
              Time
            </Grid>
            <Grid item xs={2}>
              Email
            </Grid>
            <Grid item xs={6}>
              Content
            </Grid>
          </Grid>
        </Paper>
        <Grid container spacing={3} className={classes.root}>
          {renderInquiries()}
        </Grid>
      </Paper>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.firebase.auth.uid,
    inquiries: state.inquiry
  };
};

export default connect(
  mapStateToProps,
  { fetchInquiries }
)(Admin);
