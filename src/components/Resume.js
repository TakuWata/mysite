import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(1),
    overflowX: 'auto'
  },
  division: {
    marginTop: theme.spacing(1)
  },
  table: {
    //minWidth: 650
  }
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.division}>
        <Typography variant='h5'>About this website</Typography>

        <Typography paragraph variant='h6'>
          [Application Overview]
        </Typography>

        <Typography paragraph variant='body1'>
          This is my portfolio site, which has been built by using React, redux
          and firebase. You could find the full source code from
          <a href='https://github.com/TakuWata/mysite' target='_blank'>
            here
          </a>
          .
        </Typography>

        <Typography paragraph variant='h6'>
          [List of Application's Functions]
          <List component='nav' aria-label='main mailbox folders'>
            <ListItem>
              <ListItemText primary='Inquiry System' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Routing' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Sign Up & Sign In' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Multi Language' />
            </ListItem>
          </List>
        </Typography>
        <Typography paragraph variant='h6'>
          [List of Application's technologies]
          <ListItem>
            <ListItemText primary='Redux Form ' />
          </ListItem>
        </Typography>
        <Divider />
      </div>
      <div className={classes.division}>
        <Typography variant='h5'>My Skills</Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Skills</TableCell>
              <TableCell align='center'>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align='center'>React</TableCell>
              <TableCell align='center'>
                React js is the most popular javascript framework for frontend
                development.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>Redux</TableCell>
              <TableCell align='center'>
                Redux is a popular state management library.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>Firebase</TableCell>
              <TableCell align='center'>
                Firebase is application backend service by Google.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>CSS/SCSS</TableCell>
              <TableCell align='center'>
                I can develop full-custom CSS/SCSS with webpack and React js.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>Django</TableCell>
              <TableCell align='center'>
                I am a frontend developer but I can use Django to develop
                backend too.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>MySQL</TableCell>
              <TableCell align='center'>
                Along with Django, I can use MySQL for database of the backend.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className={classes.division}>
        <Typography variant='h5'>My past project</Typography>
        <List component='nav' aria-label='my past project'>
          <ListItem>
            <ListItemText primary='Eagle International Co. Ltd. Official website creation.' />
          </ListItem>
        </List>
        <Divider />
      </div>
      <div className={classes.division}>
        <Typography variant='h5'>My history</Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align='center'>years</TableCell>
              <TableCell align='center'>position</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align='center'>2018 June - Present</TableCell>
              <TableCell align='center'>Freelance software engineer</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>2017 March - 2018 May</TableCell>
              <TableCell align='center'>
                Manager at NHN Entertainment Thailand
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>2016 April - 2017 March</TableCell>
              <TableCell align='center'>Web Marketer at Amazon Japan</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                2013 November - 2015 December
              </TableCell>
              <TableCell align='center'>
                Producer at DeNA Asia Pacific Pte. Ltd.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Resume;
