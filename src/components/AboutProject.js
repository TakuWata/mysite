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
  tableLeft: {
    width: '25%'
  }
}));

const AboutProject = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.division}>
        <Typography variant='h5'>実績</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='left'>
                <Typography variant='body1'>プロジェクト</Typography>
              </TableCell>
              <TableCell align='left'>
                <List variant='body1'>
                  <ListItem>
                    <ListItemText primary='詳細' />
                  </ListItem>
                </List>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.tableLeft} align='left'>
                <Typography variant='body1'>
                  株式会社イーグルインターナショナルオフィシャルサイト作成　
                  <a
                    target='_blank'
                    style={{ textDecoration: 'none' }}
                    href='https://official-web-site-of-global.web.app/'
                  >
                    （ウェブサイトを確認）
                  </a>
                </Typography>
              </TableCell>
              <TableCell align='left'>
                <List>
                  <ListItem>
                    <ListItemText primary='React x Redux x Firebase x Material-uiを利用' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='ReduxFormを用いてお問い合わせフォーム作成(FirebaseのFirestore DBに書き込み）' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='React intlを用い多言語サイトの実現' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Admin機能（お知らせの作成、編集、削除）' />
                  </ListItem>
                </List>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableLeft} align='left'>
                <Typography variant='body1'>
                  Ether Betball の開発
                  <a
                    style={{ textDecoration: 'none' }}
                    href='https://eth-bet.com/'
                    target='_blank'
                  >
                    （ウェブサービスを確認）
                  </a>
                </Typography>
              </TableCell>
              <TableCell align='left'>
                <List>
                  <ListItem>
                    <ListItemText primary='React x Django x Ethereumで作成' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='React SCSS Modules webpack設定とスタイルシートの作成' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='各種React Component作成' />
                  </ListItem>
                </List>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='left'>
                <Typography variant='body1'>
                  某イケメン系ウェブサイト作成への参画
                </Typography>
              </TableCell>
              <TableCell align='left'>
                <List>
                  <ListItem>
                    <ListItemText primary='React x Material-uiを用いたプロジェクト' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Google spreadsheetをadminとして活用' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='各種React Component作成を担当' />
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

export default AboutProject;
