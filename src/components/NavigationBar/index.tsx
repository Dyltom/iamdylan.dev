'use client';

import { AppBar, Toolbar, Typography, useMediaQuery } from '@mui/material';

import theme from '../ThemeRegistry/theme';
import DrawerComponent from './Drawer';
import MenuItems from './MenuItems';
import TypedText from './TypedText';

const NavigationBar: React.FC = () => {
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
