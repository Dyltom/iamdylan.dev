import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import DrawerComponent from './Drawer';
import MenuItems from './MenuItems';
import TypedText from './TypedText';

const NavigationBar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="secondary" sx={{ flexGrow: 1 }}>
          <TypedText />
        </Typography>
        {isMobile ? <DrawerComponent /> : <MenuItems />}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
