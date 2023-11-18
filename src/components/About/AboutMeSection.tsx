import { Box, Typography, useMediaQuery } from '@mui/material';

import { underLineHeaders } from '../../utils/styles';
import theme from '../ThemeRegistry/theme';

const AboutMeSection: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        textAlign: 'center',
        marginTop: isMobile ? 2 : 4,
        color: 'primary.contrastText',
      }}
    >
      <Typography variant="h5" sx={underLineHeaders(theme)}>
        About Me
      </Typography>
      <Typography variant="subtitle1" align="left">
        Hello! I'm Dylan, and I thrive on solving challenges with technology. My
        coding journey began when I crafted my first Minecraft plugin back in
        2014, igniting my passion for continuous learning. Over the years, I've
        had the privilege of working with four startups and a larger company,
        where I've tackled complex scenarios and worn many hats, gaining
        invaluable experience along the way.
      </Typography>
    </Box>
  );
};

export default AboutMeSection;
