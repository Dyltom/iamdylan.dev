'use client';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

import SocialMediaShare from '../../../components/Blog/BlogPage/SocialMediaShare';
import TableOfContents from '../../../components/Blog/BlogPage/TableOfContents';

import { getArticle } from '../../../fetchers/article';
import { convertContentToMarkdown } from '../../../utils/converters';
import { formatReadTime } from '../../../utils/dateAndTime';
import { Article } from '../../../utils/types';

type BlogPostDetailProps = {
  params: { id: string };
};
const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ params }) => {
  const { id: slug } = params;
  const [article, setArticle] = useState<Article | undefined>(undefined);

  useEffect(() => {
    const fetchArticle = async () => {
      const article = await getArticle(slug);
      setArticle(article);
    };
    fetchArticle();
  }, [slug]);

  if (!article) {
    return <Typography color="primary.contrastText">Loading...</Typography>;
  }

  console.log({ article });

  const formattedDate = format(new Date(article.publishedAt), 'MMMM dd, yyyy');
  const formattedReadTime = formatReadTime(article.readTime);
  const formattedLastUpdated = format(
    new Date(article.updatedAt),
    'MMMM dd, yyyy'
  );

  const markdownContent = convertContentToMarkdown(article.content);

  return (
    <Box
      sx={{
        p: 2,
        marginTop: 2,
        color: 'white',
        backgroundColor: 'transparent',
      }}
    >
      <Typography variant="h4" gutterBottom>
        {article.title}
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <EventIcon color="action" sx={{ color: 'secondary.main' }} />
          <Typography variant="subtitle1" component="span">
            {formattedDate}
          </Typography>
          <AccessTimeIcon
            color="action"
            sx={{ color: 'secondary.main', gap: 1 }}
          />
          <Typography variant="subtitle1" component="span">
            {formattedReadTime}
          </Typography>
          <VisibilityIcon color="action" sx={{ color: 'secondary.main' }} />
          <Typography variant="subtitle1" component="span">
            {article.views}
          </Typography>
        </Box>
        <SocialMediaShare />
      </Stack>
      <Divider color="#21262d" sx={{ my: 2 }} />
      <TableOfContents article={article} />
      <Divider color="#21262d" sx={{ my: 4 }} />
      <ReactMarkdown children={markdownContent} rehypePlugins={[rehypeSlug]} />
      <Typography
        color="primary.contrastText"
        variant="subtitle2"
        sx={{ mt: 2 }}
      >
        Last updated on {formattedLastUpdated}
      </Typography>
    </Box>
  );
};

export default BlogPostDetail;
