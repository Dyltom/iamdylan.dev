import { Box, Typography, useMediaQuery } from '@mui/material';

import theme from '../ThemeRegistry/theme';

const HeroSection: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '4vw',
        color: 'primary.contrastText',
        maxWidth: isMobile ? '100vw' : '60vw',
        margin: '0 auto', // Center the box horizontally
      }}
    >
      <Typography variant="h5" gutterBottom>
        Hello, my name is
      </Typography>
      <Typography variant="h3" color="secondary" gutterBottom>
        Dylan Henderson
      </Typography>
      <Typography variant="subtitle1" align="left">
        I'm a Fullstack Developer with expertise in React, Typescript, and
        building restful APIs using Node & Koa. My coding journey started with
        crafting my first Minecraft plugin in 2014, sparking my passion for
        continuous learning.
      </Typography>
      <Typography align="left" sx={{ paddingTop: 1 }}>
        When I'm not coding, you can find me walking, gaming, or attending PAX
        Aus, which I've been doing since the first PAX in 2013.
      </Typography>
    </Box>
  );
};

export default HeroSection;
