import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Fira Code", monospace',
  },
  palette: {
    primary: {
      main: '#0f0f0f', // Dark background
    },
    secondary: {
      main: '#32CD32', // Neon green color
    },
  },
});

export default theme;
