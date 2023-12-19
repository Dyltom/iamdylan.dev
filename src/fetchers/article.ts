import { Article } from '../utils/types';

export async function getArticles(): Promise<Article[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_ADMIN_URL}/api/articles`
    );

    const json = await response.json();
    const articlesData = json.data || json;

    const fetchedArticles: Article[] = articlesData.map((item: Article) => {
      return {
        id: item.id,
        title: item.title,
        content: item.content,
        shortDescription: item.shortDescription,
        slug: item.slug,
        readTime: item.readTime,
        views: item.views,
        createdAt: new Date(item.createdAt),
        updatedAt: new Date(item.updatedAt),
        publishedAt: new Date(item.publishedAt),
        categories: item.categories,
      };
    });

    return fetchedArticles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export async function getArticle(slug: string): Promise<Article | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_ADMIN_URL}/api/articles/${slug}`
    );
    return response.json();
  } catch (error) {
    console.error('Error fetching article:', error);
    return;
  }
}
