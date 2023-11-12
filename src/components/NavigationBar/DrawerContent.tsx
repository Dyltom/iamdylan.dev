'use client';

import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { Fragment } from 'react';
import { links } from '../../utils/consts';
import theme from '../ThemeRegistry/theme';

interface DrawerContentProps {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const DrawerContent: React.FC<DrawerContentProps> = ({ toggleDrawer }) => {
  const router = useRouter();

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
        {links.map(({ text, href }, index, array) => {
          return (
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
                    onClick={() => router.push(href)}
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
          );
        })}
      </List>
    </Box>
  );
};

export default DrawerContent;
