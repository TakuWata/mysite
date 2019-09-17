import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
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
        <Typography variant='h5'>スキルセット</Typography>
      </Grid>

      <Grid item sm={4} xs={6}>
        <Card>
          <CardMedia
            className={classes.media}
            image='../../../static/react.png'
            title='React'
          />
          <CardContent>
            <Typography>React</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={4} xs={6}>
        <Card>
          <CardMedia
            className={classes.media}
            image='../../../static/redux.png'
            title='Redux'
          />
          <CardContent>
            <Typography>Redux</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={4} xs={6}>
        <Card>
          <CardMedia
            className={classes.media}
            image='../../../static/firebase.png'
            title='Firebase'
          />
          <CardContent>
            <Typography>Firebase</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={4} xs={6}>
        <Card>
          <CardMedia
            className={classes.media}
            image='../../../static/sass.png'
            title='SCSS'
          />
          <CardContent>
            <Typography>SCSS</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={4} xs={6}>
        <Card>
          <CardMedia
            className={classes.media}
            image='../../../static/django.png'
            title='Django'
          />
          <CardContent>
            <Typography>Django</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={4} xs={6}>
        <Card>
          <CardMedia
            className={classes.media}
            image='../../../static/mysql.png'
            title='MySQL'
          />
          <CardContent>
            <Typography>MySQL</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Skill;
