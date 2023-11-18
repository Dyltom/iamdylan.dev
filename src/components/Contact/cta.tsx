import { Box, Button, Typography, useMediaQuery } from '@mui/material';

import theme from '../ThemeRegistry/theme';

const ContactCTA: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box sx={{ textAlign: 'center', paddingTop: isMobile ? 4 : 8 }}>
      <Typography variant="h6" color="primary.contrastText" gutterBottom>
        Interested in collaborating or chatting?
      </Typography>
      <Button variant="outlined" color="secondary">
        <Button href="/contact" color="secondary">
          Contact Me
        </Button>
      </Button>
    </Box>
  );
};

export default ContactCTA;
