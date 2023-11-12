'use client';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  Chip,
  Grid,
  IconButton,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

interface BlogPost {
  date: string;
  readTime: string;
  reads: number;
  title: string;
  categories: string[];
  description: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'Exploring the Depths of JavaScript',
    description: 'A deep dive into advanced concepts of JavaScript.',
    readTime: '5 min read',
    reads: 100,
    categories: ['JavaScript', 'Programming'],
    date: 'Oct 1, 2021',
  },
  {
    title: 'Exploring the Depths of JavaScript',
    description: 'A deep dive into advanced concepts of JavaScript.',
    readTime: '5 min read',
    reads: 100,
    categories: ['JavaScript', 'Programming'],
    date: 'Oct 1, 2021',
  },
  {
    title: 'Exploring the Depths of JavaScript',
    description: 'A deep dive into advanced concepts of JavaScript.',
    readTime: '5 min read',
    reads: 100,
    categories: ['JavaScript', 'Programming'],
    date: 'Oct 1, 2021',
  },
  {
    title: 'Exploring the Depths of JavaScript',
    description: 'A deep dive into advanced concepts of JavaScript.',
    readTime: '5 min read',
    reads: 100,
    categories: ['JavaScript', 'Programming'],
    date: 'Oct 1, 2021',
  },
  {
    title: 'Exploring the Depths of JavaScript',
    description: 'A deep dive into advanced concepts of JavaScript.',
    readTime: '5 min read',
    reads: 100,
    categories: ['JavaScript', 'Programming'],
    date: 'Oct 1, 2021',
  },
  {
    title: 'Exploring the Depths of JavaScript',
    description: 'A deep dive into advanced concepts of JavaScript.',
    readTime: '5 min read',
    reads: 100,
    categories: ['JavaScript', 'Programming'],
    date: 'Oct 1, 2021',
  },
  {
    title: 'Exploring the Depths of JavaScript',
    description: 'A deep dive into advanced concepts of JavaScript.',
    readTime: '5 min read',
    reads: 100,
    categories: ['JavaScript', 'Programming'],
    date: 'Oct 1, 2021',
  },
];

export default function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const itemsPerSlide = isMobile ? 1 : 3;
  const [activeStep, setActiveStep] = useState<number>(0);
  const maxSteps: number = Math.ceil(blogPosts.length / itemsPerSlide);
  // const router = useRouter();

  const handleNext = (): void => {
    setActiveStep((prevActiveStep) =>
      Math.min(prevActiveStep + 1, maxSteps - 1)
    );
  };

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'primary.main' }}>
      {/* Minimalist Hero Section */}
      <Box
        sx={{ textAlign: 'center', padding: 4, color: 'primary.contrastText' }}
      >
        <Typography variant="h5" gutterBottom>
          Hello there, my name is
        </Typography>
        <Typography variant="h3" color="secondary" gutterBottom>
          Dylan Henderson
        </Typography>
        <Typography variant="subtitle1">
          I'm a Fullstack Developer who loves exploring technology, coding, and
          the world
        </Typography>
      </Box>

      {/* Featured Blog Posts Carousel */}
      <Box sx={{ bgcolor: 'primary.main', py: 4, position: 'relative' }}>
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

      {/* Simplified Contact CTA */}
      <Box sx={{ textAlign: 'center', padding: 4 }}>
        <Typography variant="h6" color="white" gutterBottom>
          Interested in collaborating or chatting?
        </Typography>
        <Button variant="outlined" color="secondary">
          <Button href="/contact" color="success">
            Contact Me
          </Button>
        </Button>
      </Box>
    </Box>
  );
}
