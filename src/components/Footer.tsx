import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 2, // padding top and bottom
        backgroundColor: 'primary.main', // use your theme's primary color
        color: 'primary.contrastText', // ensures text color is readable on primary color
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" align="center" color="secondary">
          Dylan Henderson © {currentYear}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
