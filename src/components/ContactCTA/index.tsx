import { Box, Button, Typography } from '@mui/material';

const ContactCTA: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: 4 }}>
      <Typography variant="h6" color="white" gutterBottom>
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
