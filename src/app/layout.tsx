import { Box } from '@mui/material';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import ParticleBackground from '../components/Particles';
import ThemeRegistry from '../components/ThemeRegistry/ThemeRegistry';
// import theme from '../components/ThemeRegistry/theme';

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
  const isMobile = false; //TODO fix

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
              sx={{
                flexGrow: 1,
                maxWidth: isMobile ? '90vw' : '70vw',
                margin: 'auto',
              }}
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
