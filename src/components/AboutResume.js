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

const AboutResume = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.division}>
        <Typography variant='h5'>経歴</Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align='left' style={{ width: '25%' }}></TableCell>
              <TableCell align='left'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align='left'>2013/11 - 2015/12</TableCell>
              <TableCell align='left'>
                プロデューサー（DeNA Asia Pacific Pte. Ltd.）
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='left'>2016/04 - 2017/03</TableCell>
              <TableCell align='left'>
                ウェブマーケター（Amazon Japan)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='left'>2017/03 - 2018/05</TableCell>
              <TableCell align='left'>
                マーケター＆マネージャー（NHN Entertainment Thailand）
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='left'>2018/06 - 現在</TableCell>
              <TableCell align='left'>
                フリーランスソフトウェアエンジニア
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AboutResume;
