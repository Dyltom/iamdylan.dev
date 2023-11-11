import { Box, Button } from '@mui/material';

const MenuItems: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexGrow: 0 }}>
      {['Home', 'About', 'Portfolio', 'Blog', 'Contact'].map((text) => (
        <Button
          key={text}
          color="secondary"
          href={`#${text.toLowerCase()}`}
          sx={{ textTransform: 'none' }}
        >
          {text}
        </Button>
      ))}
    </Box>
  );
};

export default MenuItems;
