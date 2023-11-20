import { Divider, Link, List, ListItem, Typography } from '@mui/material';
import { useMemo } from 'react';
import { Article } from '../../../utils/types';

type TableOfContentsProps = {
  article: Article | null;
};

const TableOfContents: React.FC<TableOfContentsProps> = ({ article }) => {
  const tocItems = useMemo(() => {
    if (!article) return [];

    return article.content
      .filter((block) => block.type === 'heading')
      .map((block) => ({
        level: block.level ?? 0,
        text: block.children
          .map((child) => child.text.replace(/[?]/g, ''))
          .join(' '),
      }));
  }, [article]);

  if (tocItems.length === 0) {
    return null;
  }

  return (
    <>
      <Divider color="#21262d" sx={{ my: 2 }} />
      <Typography variant="h6" sx={{ mb: 2 }}>
        Contents
      </Typography>
      <List sx={{ listStyleType: 'disc', marginLeft: 3, padding: 0 }}>
        {tocItems.map((item, index) => (
          <ListItem
            key={index}
            sx={{ display: 'list-item', padding: 0, margin: '0 0 4px 0' }}
          >
            <Link
              href={`#${item.text.toLowerCase().replace(/\s+/g, '-')}`}
              color="inherit"
              sx={{
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              <Typography variant="body1">{item.text}</Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TableOfContents;
