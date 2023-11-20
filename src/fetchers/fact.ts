import { Fact } from '../utils/types';

export async function getFacts(): Promise<Fact[] | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_ADMIN_URL}/api/facts`
    );
    return response.json();
  } catch (error) {
    console.error('Error fetching facts:', error);
  }
}
