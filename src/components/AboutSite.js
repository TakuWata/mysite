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
import CodeIcon from '@material-ui/icons/Code';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
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
  },
  tableLeft: {
    width: '25%'
  }
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.division}>
        <Typography variant='h5'>当ウェブサイトについて</Typography>
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
              <TableCell className={classes.tableLeft} align='left'>
                <Typography variant='body1'>アプリケーションの概要</Typography>
              </TableCell>
              <TableCell align='left'>
                <List>
                  <ListItem>
                    <ListItemText
                      primary='React x Redux x
                  Firebaseで構築されたポートフォリオサイト（スタイルシートはMaterial-uiを使用）'
                    />
                  </ListItem>

                  <ListItem>
                    <IconButton
                      edge='start'
                      //className={classes.menuButton}
                      color='inherit'
                      aria-label='menu'
                      href='https://github.com/TakuWata/mysite'
                      target='_blank'
                    >
                      <CodeIcon color='primary' />
                    </IconButton>
                  </ListItem>
                </List>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableLeft} align='left'>
                <Typography variant='body1'>
                  アプリケーションの機能一覧
                </Typography>
              </TableCell>
              <TableCell align='left'>
                <List>
                  {/* <Typography variant='body1'> */}
                  <ListItem>
                    <ListItemText primary='お問い合わせシステム' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='ログイン後にお問い合わせ内容をTo Doとして確認する機能' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='サインアップ、ログイン機能' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='単体テスト' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='自動テストとFirebaseへのDeploy' />
                  </ListItem>
                  {/* </Typography> */}
                </List>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableLeft} align='left'>
                <Typography variant='body1'>使用した技術一覧</Typography>
              </TableCell>
              <TableCell align='left'>
                {/* <Typography variant='body1'> */}
                <List>
                  <ListItem>
                    <ListItemText primary='Redux Formによりお問い合わせフォームを実装' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='React-router-domを用いた遷移' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Jest Enzymeを用いた単体テストの記述' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='circle ciとgithubを用いたテストとデプロイの自動化' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Redux thunkを用いたasync action creatorの実装' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Hostingとしてfirebase hostingを利用' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='サインアップ、ログイン機能として、Firebase Authを使用' />
                  </ListItem>
                </List>
                {/* </Typography> */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableLeft} align='left'>
                <Typography variant='body1'>今後の実装予定</Typography>
              </TableCell>
              <TableCell align='left'>
                {/* <Typography variant='body1'> */}
                <List>
                  <ListItem>
                    <ListItemText primary='統合テスト・E2Eテスト' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Google Recaptureを用いたフォームの保護機能' />
                  </ListItem>
                </List>
                {/* </Typography> */}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Resume;
