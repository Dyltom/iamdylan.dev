import { Box, Button, Typography, useMediaQuery } from '@mui/material';

import { useEffect, useState } from 'react';
import { getCallToAction } from '../../fetchers/pages';
import { CallToAction } from '../../utils/types';
import theme from '../ThemeRegistry/theme';

const ContactCTA: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [cta, setCta] = useState<CallToAction | undefined>(undefined);

  useEffect(() => {
    const fetchCta = async () => {
      const fetchedCta = await getCallToAction();
      setCta(fetchedCta);
    };
    fetchCta();
  }, []);

  if (!cta) {
    return null;
  }

  return (
    <Box sx={{ textAlign: 'center', paddingTop: isMobile ? 4 : 8 }}>
      <Typography variant="h6" color="primary.contrastText" gutterBottom>
        {cta.text}
      </Typography>
      <Button variant="outlined" color="secondary">
        <Button href="/contact" color="secondary">
          {cta.buttonText}
        </Button>
      </Button>
    </Box>
  );
};

export default ContactCTA;
