import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  Box,
  Chip,
  Grid,
  IconButton,
  Paper,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import { BlogPost } from '../../utils/types';
import theme from '../ThemeRegistry/theme';

type FeaturedBlogPostsType = {
  blogPosts: BlogPost[];
};

const FeaturedBlogPosts: React.FC<FeaturedBlogPostsType> = ({ blogPosts }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const itemsPerSlide = isMobile ? 1 : 3;
  const [activeStep, setActiveStep] = useState<number>(0);
  const maxSteps: number = Math.ceil(blogPosts.length / itemsPerSlide);

  const handleNext = (): void => {
    setActiveStep((prevActiveStep) =>
      Math.min(prevActiveStep + 1, maxSteps - 1)
    );
  };

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ textAlign: 'center', color: 'secondary.main' }}
      >
        Featured Posts
      </Typography>
      <Box sx={{ overflow: 'hidden', px: 4, py: 2 }}>
        <Grid
          container
          spacing={2}
          style={{
            transform: `translateX(-${(activeStep * 100) / maxSteps}%)`,
            transition: 'transform 0.5s ease',
            width: `${maxSteps * 100}%`,
          }}
        >
          {blogPosts.map((post, index) => (
            <Grid
              item
              xs={12 / itemsPerSlide}
              sm={6 / itemsPerSlide}
              md={4 / itemsPerSlide}
              key={index}
              style={{ flex: '0 0 auto' }}
            >
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
            </Grid>
          ))}
        </Grid>
      </Box>
      <IconButton
        onClick={handleBack}
        disabled={activeStep === 0}
        sx={{
          position: 'absolute',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          color: 'secondary.main',
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        onClick={handleNext}
        disabled={activeStep === maxSteps - itemsPerSlide}
        sx={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          color: 'secondary.main',
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default FeaturedBlogPosts;
