import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  useTheme,
} from '@mui/material';
import { Fragment } from 'react';

interface DrawerContentProps {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const DrawerContent: React.FC<DrawerContentProps> = ({ toggleDrawer }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 250,
        height: '100%', // Ensure the box takes full height
        bgcolor: 'primary.main', // Set the background color to match the primary theme color
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'About', 'Portfolio', 'Blog', 'Contact'].map(
          (text, index, array) => (
            <Fragment key={text}>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                  }}
                >
                  <Button
                    color="secondary"
                    href={`#${text.toLowerCase()}`}
                    sx={{
                      textTransform: 'none',
                      width: '100%',
                    }}
                  >
                    {text}
                  </Button>
                </ListItemButton>
              </ListItem>
              {index < array.length - 1 && (
                <Divider sx={{ bgcolor: theme.palette.secondary.main }} />
              )}
            </Fragment>
          )
        )}
      </List>
    </Box>
  );
};

export default DrawerContent;
