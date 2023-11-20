'use client';

import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import FeaturedBlogPosts from '../components/Blog/FeaturedBlogPosts';
import ContactCTA from '../components/Contact/cta';
import HeroSection from '../components/HeroSection';

import { getArticles } from '../fetchers/article';
import { Article } from '../utils/types';

export default function HomePage() {
  const [posts, setPosts] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getArticles();
      setPosts(articles);
    };
    fetchArticles();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeroSection />
      <FeaturedBlogPosts blogPosts={posts} />
      <ContactCTA />
    </Box>
  );
}
