import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Greeting = () => {
  return (
    <div style={{ whiteSpace: 'pre-line' }}>
      <Typography variant='body1' color='textPrimary'>
        I'm a paragraph. {'\n'}　Click here to add your own text and edit me.{' '}
        {'\n'}It’s easy. Just click “Edit Text” or {'\n'}double click me to add
        your own content {'\n'}and make changes to the font.
      </Typography>
    </div>
  );
};

export default Greeting;
