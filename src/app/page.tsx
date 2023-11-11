'use client';

import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import theme from '../styles/theme';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <NavigationBar />
        <Box component="main" sx={{ flexGrow: 1 }}></Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
