import BookIcon from '@mui/icons-material/Book';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import { BlogPost } from './types';

export const links = [
  { text: 'Home', href: '/', icon: HomeIcon },
  { text: 'About', href: '/about', icon: StarIcon },
  { text: 'Blog', href: '/blog', icon: BookIcon },
  { text: 'Contact', href: '/contact', icon: DashboardIcon },
];

//TODO: replace with api call
export const blogPosts: BlogPost[] = [
  {
    title: 'Exploring the Depths of JavaScript #1',
    description: 'A deep dive into advanced concepts of JavaScript.',
    readTime: '5 min read',
    reads: 100,
    categories: ['JavaScript', 'Programming'],
    date: 'Oct 1, 2021',
  },
  {
    title: 'Exploring the Depths of JavaScript #2',
    description: 'A deep dive into advanced concepts of JavaScript.',
    readTime: '5 min read',
    reads: 100,
    categories: ['JavaScript', 'Programming'],
    date: 'Oct 1, 2021',
  },
  {
    title: 'Exploring the Depths of JavaScript #3',
    description: 'A deep dive into advanced concepts of JavaScript.',
    readTime: '5 min read',
    reads: 100,
    categories: ['JavaScript', 'Programming'],
    date: 'Oct 1, 2021',
  },
  {
    title: 'Exploring the Depths of JavaScript #4',
    description: 'A deep dive into advanced concepts of JavaScript.',
    readTime: '5 min read',
    reads: 100,
    categories: ['JavaScript', 'Programming'],
    date: 'Oct 1, 2021',
  },
  {
    title: 'Exploring the Depths of JavaScript #5',
    description: 'A deep dive into advanced concepts of JavaScript.',
    readTime: '5 min read',
    reads: 100,
    categories: ['JavaScript', 'Programming'],
    date: 'Oct 1, 2021',
  },
  {
    title: 'Exploring the Depths of JavaScript #6',
    description: 'A deep dive into advanced concepts of JavaScript.',
    readTime: '5 min read',
    reads: 100,
    categories: ['JavaScript', 'Programming'],
    date: 'Oct 1, 2021',
  },
  {
    title: 'Exploring the Depths of JavaScript #7',
    description: 'A deep dive into advanced concepts of JavaScript.',
    readTime: '5 min read',
    reads: 100,
    categories: ['JavaScript', 'Programming'],
    date: 'Oct 1, 2021',
  },
  {
    title: 'Exploring the Depths of JavaScript #8',
    description: 'A deep dive into advanced concepts of JavaScript.',
    readTime: '5 min read',
    reads: 100,
    categories: ['JavaScript', 'Programming'],
    date: 'Oct 1, 2021',
  },
];
