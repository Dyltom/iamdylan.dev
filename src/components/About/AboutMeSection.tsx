import { Box, Typography, useMediaQuery } from '@mui/material';

import { underLineHeaders } from '../../utils/styles';
import { AboutPage } from '../../utils/types';
import theme from '../ThemeRegistry/theme';

type AboutMeSectionProps = {
  content: AboutPage;
};

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ content }) => {
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
        {content.aboutTitle}
      </Typography>
      <Typography variant="subtitle1" align="left">
        {content.aboutContent}
      </Typography>
    </Box>
  );
};

export default AboutMeSection;
