import { Box, Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 2,
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
