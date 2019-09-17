import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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

const AboutSkill = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.division}>
        <Typography variant='h5'>スキルセット</Typography>
        <Table className={classes.table}>
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
              <TableCell align='left'>
                <Typography variant='body1'>Javascript</Typography>
              </TableCell>
              <TableCell align='left'>
                <List>
                  <ListItem>
                    <ListItemText primary='ES6以降のモダンなJavascriptを用いたコードの記述' />
                  </ListItem>
                </List>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='left'>
                <Typography variant='body1'>React x Redux</Typography>
              </TableCell>
              <TableCell align='left'>
                {/* <Typography variant='body1'> */}
                <List>
                  <ListItem>
                    <ListItemText primary='WebpackによるReactプロジェクトのConfiguration' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='JSXを用いたComponentの作成' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Class Based Component/React Hookの使用' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Axiosなどを用いて外部APIを使用しCRUDを実施' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Redux-thunkを用いたasync action creator作成' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Jest/Enzymeを用いた単体テスト・総合テスト' />
                  </ListItem>
                </List>
                {/* </Typography> */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='left'>CSS/SCSS</TableCell>
              <TableCell align='left'>
                <List>
                  <ListItem>
                    <ListItemText primary='SCSS/CSS moduleを用いたスタイルシート作成' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Material uiなどの外部ライブラリを用いたスタイル適用' />
                  </ListItem>
                </List>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='left'>
                <Typography variant='body1'>Firebase</Typography>
              </TableCell>
              <TableCell align='left'>
                <List>
                  <ListItem>
                    <ListItemText primary='Firebase hosting、Firestoreデータベース' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Firebase Auth、Firebase Cloud Functions' />
                  </ListItem>
                </List>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AboutSkill;
