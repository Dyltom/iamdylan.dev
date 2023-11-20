import { Skill } from '../utils/types';

export async function getSkills(): Promise<Skill[] | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_ADMIN_URL}/api/skills`
    );
    return (await response.json()).data;
  } catch (error) {
    console.error('Error fetching skills:', error);
    return;
  }
}
