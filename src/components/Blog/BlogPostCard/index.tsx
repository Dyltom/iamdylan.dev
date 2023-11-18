import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Link, Paper, Typography, useTheme } from '@mui/material';
import { format } from 'date-fns';
import { formatReadTime } from '../../../utils/dateAndTime';
import { Article } from '../../../utils/types';

type BlogPostCardProps = {
  post: Article;
};

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const theme = useTheme();
  const formattedDate = format(new Date(post.publishedAt), 'MMMM dd, yyyy');
  const formattedReadTime = formatReadTime(post.readTime);

  return (
    <Paper
      elevation={4}
      sx={{
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: theme.shape.borderRadius,
        transition: '0.3s',
        '&:hover': {
          boxShadow: theme.shadows[10],
        },
      }}
    >
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            marginBottom: 1,
          }}
        >
          <EventIcon color="action" />
          <Typography variant="subtitle2" color="text.secondary">
            {formattedDate}
          </Typography>
        </Box>

        <Typography variant="h6" gutterBottom>
          <Link
            href={`/blog/${post.slug}`}
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              transition: 'color 0.3s',
              '&:hover': { color: theme.palette.secondary.main },
            }}
          >
            {post.Title}
          </Link>
        </Typography>

        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          {post.shortDescription}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <AccessTimeIcon color="action" />
          <Typography variant="caption">{formattedReadTime}</Typography>
          <VisibilityIcon color="action" />
          <Typography variant="caption">{post.views ?? 0}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default BlogPostCard;
