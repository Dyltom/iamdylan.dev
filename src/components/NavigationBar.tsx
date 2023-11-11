import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const NavigationBar: React.FC = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Dylan Henderson', 'DH'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 300,
      smartBackspace: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <span ref={el} />
        </Typography>
        <Box sx={{ display: 'flex', flexGrow: 0 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Portfolio</Button>
          <Button color="inherit">Blog</Button>
          <Button color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
