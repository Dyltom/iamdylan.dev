import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Fira Code", monospace',
  },
  palette: {
    primary: {
      main: '#0f0f0f', // Used for the text color of the page.
      contrastText: '#ffffff', // Used for the text color of the drawer.
    },
    secondary: {
      main: '#32CD32', // Used for buttons, icons, etc.
    },
    background: {
      default: '#0f0f0f', // Used for the background of the page.
      // paper: '#0f0f0f', // Used for the background of the drawer.
    },
  },
});

export default theme;
