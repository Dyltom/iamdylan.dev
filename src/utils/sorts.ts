import { Article } from './types';

export const sortPosts = (
  posts: Article[],
  sortType: string,
  sortDescending: boolean
): Article[] => {
  return posts.sort((a, b) => {
    let comparison = 0;
    if (sortType === 'mostRecent') {
      comparison =
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else if (sortType === 'mostViews') {
      comparison = b.views - a.views;
    } else if (sortType === 'longReadTime') {
      comparison = Number(b.readTime) - Number(a.readTime);
    }
    return sortDescending ? comparison : -comparison;
  });
};
