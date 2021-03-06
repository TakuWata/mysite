import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Navbar from './Navbar';

const Layout = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Container maxWidth='md'>{props.children}</Container>
    </React.Fragment>
  );
};

export default Layout;
