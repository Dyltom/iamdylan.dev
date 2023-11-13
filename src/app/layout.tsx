// RootLayout.tsx
import { Box } from '@mui/material';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import ParticleBackground from '../components/Particles';
import ThemeRegistry from '../components/ThemeRegistry/ThemeRegistry';

export const metadata = {
  title: 'Dylan Henderson',
  description:
    'Dylan Henderson is a software engineer based in Melbourne, VIC.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Box
            sx={{
              backgroundColor: 'primary.main',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <ParticleBackground />
            <NavigationBar />
            <Box
              component="main"
              sx={{ flexGrow: 1, maxWidth: '70vw', margin: 'auto' }}
            >
              {children}
            </Box>
            <Footer />
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
