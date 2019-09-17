import React from 'react';
import Inquiry from './Inquiry';
import Layout from './Layout';
import AboutResume from './AboutResume';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AboutSkill from './AboutSkill';
import AboutSite from './AboutSite';
import AboutProject from './AboutProject';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
              <Typography variant='h5'>プロフィール</Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align='left'>
                      <Typography variant='body1'></Typography>
                    </TableCell>
                    <TableCell align='left'>
                      <Typography variant='body1'></Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align='left' style={{ width: '25%' }}>
                      名前
                    </TableCell>
                    <TableCell align='left'>
                      渡辺拓実（WATANABE TAKUMI)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align='left'>職種</TableCell>
                    <TableCell align='left'>フロントエンドエンジニア</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align='left'>概略</TableCell>
                    <TableCell align='left'>
                      React/Reduxを専門とするフロントエンドエンジニアです。
                      元々、DeNAやAmazonでウェブディレクターやマーケターとして働いていましたが、思うところがありキャリアチェンジしてエンジニアになりました。
                      現在、1年と少し、フリーランスやっています。
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <AboutSkill />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <AboutProject />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <AboutSite />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <AboutResume />
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
