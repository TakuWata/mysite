import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const Greeting = () => {
  return (
    <div style={{ whiteSpace: 'pre-line' }}>
      <Typography variant='body1' color='textPrimary'>
        I'm a paragraph. {'\n'}　Click here to add your own text and edit me.{' '}
        {'\n'}It’s easy. Just click “Edit Text” or {'\n'}double click me to add
        your own content {'\n'}and make changes to the font.
      </Typography>
      <Link to='/about'>
        <Button>See more details.</Button>
      </Link>
    </div>
  );
};

export default Greeting;
