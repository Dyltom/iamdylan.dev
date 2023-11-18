import { Box, Typography, useMediaQuery } from '@mui/material';

import theme from '../ThemeRegistry/theme';

const HeroSection: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        textAlign: 'center',
        marginTop: isMobile ? 2 : 4,
        color: 'primary.contrastText',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Hello, my name is
      </Typography>
      <Typography variant="h3" color="secondary" gutterBottom>
        Dylan Henderson
      </Typography>
      <Typography variant="subtitle1" align="left">
        I'm a Fullstack Developer with expertise in React, TypeScript, and
        building RESTful APIs using Node.js and Koa. This website pays tribute
        to one of my favorite university assignments—a retro-style terminal
        coded in C.
      </Typography>
      <Typography align="left" sx={{ paddingTop: 1 }}>
        When I'm not coding, you can find me walking, gaming, or attending PAX
        Aus, which I've been doing since the first PAX in 2013.
      </Typography>
    </Box>
  );
};

export default HeroSection;
