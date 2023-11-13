'use client';

import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import ContactCTA from '../components/ContactCTA';
import FeaturedBlogPosts from '../components/FeaturedBlogPosts';
import HeroSection from '../components/HeroSection';
import { blogPosts } from '../utils/consts';

export default function HomePage() {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'primary.main' }}>
      <HeroSection />
      <FeaturedBlogPosts blogPosts={blogPosts} />
      <ContactCTA />
    </Box>
  );
}
