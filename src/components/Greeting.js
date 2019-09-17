import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const Greeting = () => {
  return (
    <div style={{ whiteSpace: 'pre-line' }}>
      <Typography
        color='textSecondary'
        variant='h5'
        component='h6'
        style={{ marginBottom: '1rem' }}
      >
        渡辺拓実（WATANABE TAKUMI)
      </Typography>
      <Typography variant='body1' color='textPrimary'>
        React/Reduxを専門とするフロントエンドエンジニアです。{'\n'}
        元々はDeNAやAmazon
        Japanでウェブディレクターやマーケターとして働いていましたが、
        {'\n'}思うところがありキャリアチェンジしてエンジニアになりました。{'\n'}
        現在、1年と少し、フリーランスやっています。
      </Typography>
      <Link to='/about'>
        <Button>詳細を確認</Button>
      </Link>
    </div>
  );
};

export default Greeting;
