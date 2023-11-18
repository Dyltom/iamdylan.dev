import { Article } from '../utils/types';

export async function getArticles(): Promise<Article[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_ADMIN_URL}/api/articles`
    );

    console.log({ response });

    const json = await response.json();

    // Assuming the actual data is nested in a property, e.g., 'data'
    // You need to adjust this based on the actual structure of your JSON response
    const articlesData = json.data || json;

    const fetchedArticles: Article[] = articlesData.map((item: any) => {
      // Adjust this mapping to match the structure of your 'Article' type and the response
      return {
        id: item.id,
        Title: item.Title,
        content: item.Content,
        shortDescription: item.shortDescription,
        slug: item.slug,
        readTime: item.readTime,
        views: item.views,
        createdAt: new Date(item.createdAt),
        updatedAt: new Date(item.updatedAt),
        publishedAt: new Date(item.publishedAt),
      };
    });

    return fetchedArticles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export async function getArticle(slug: string): Promise<Article> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_ADMIN_URL}/api/articles/${slug}`
  );

  return response.json();
}
