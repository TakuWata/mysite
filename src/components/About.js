import React from 'react';
import Inquiry from './Inquiry';
import Layout from './Layout';
import Resume from './Resume';
import Typography from '@material-ui/core/Typography';

const About = () => {
  return (
    <Layout>
      <div>
        <Typography>Takumi Watanabe</Typography>
        <Typography>Frontend Developer</Typography>
        <Typography>Please contact from the inquiry from below.</Typography>
      </div>
      <Resume />
      <Inquiry />
    </Layout>
  );
};

export default About;
