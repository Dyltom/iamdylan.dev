import { Box, Chip, Paper, Typography } from '@mui/material';
import { BlogPost } from '../../../utils/types';

type BlogPostCardProps = {
  post: BlogPost;
};

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Paper elevation={4} sx={{ padding: 2, minHeight: 200 }}>
      <Typography variant="subtitle2" color="text.secondary">
        {post.date} - {post.readTime} - {post.reads} reads
      </Typography>
      <Typography variant="h6">{post.title}</Typography>
      <Box sx={{ my: 1 }}>
        {post.categories.map((category, idx) => (
          <Chip key={idx} label={category} sx={{ mr: 0.5 }} />
        ))}
      </Box>
      <Typography variant="body2">{post.description}</Typography>
    </Paper>
  );
};

export default BlogPostCard;
