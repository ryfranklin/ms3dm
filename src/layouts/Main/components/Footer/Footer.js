import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Footer = () => {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; ms3dm.tech. 2022;  UI/UX Template By: theFront - Multipurpose Template + UI Kit
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
