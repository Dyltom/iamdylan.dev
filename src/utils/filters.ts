import { Article } from './types';

export const filterPostsByDate = (
  posts: Article[],
  dateFilter: string
): Article[] => {
  const now = new Date();
  return posts.filter((post) => {
    const postDate = new Date(post.createdAt);
    switch (dateFilter) {
      case 'day':
        return (
          postDate >
          new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1)
        );
      case 'week':
        return (
          postDate >
          new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7)
        );
      case 'year':
        return (
          postDate >
          new Date(now.getFullYear() - 1, now.getMonth(), now.getDate())
        );
      default:
        return true;
    }
  });
};
