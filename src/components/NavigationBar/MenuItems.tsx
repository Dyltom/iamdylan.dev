import { Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { links } from '../../utils/consts';

const MenuItems: React.FC = () => {
  const router = useRouter();

  return (
    <Box sx={{ display: 'flex', flexGrow: 0 }}>
      {links.map(({ text, href }) => {
        return (
          <Button
            key={text}
            color="secondary"
            onClick={() => router.push(href)}
            sx={{ textTransform: 'none' }}
          >
            {text}
          </Button>
        );
      })}
    </Box>
  );
};

export default MenuItems;
