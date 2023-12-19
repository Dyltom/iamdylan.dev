import { WorkExperience } from '../utils/types';

export async function getWorkExperience(): Promise<
  WorkExperience[] | undefined
> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_ADMIN_URL}/api/work-experiences`
    );
    return (await response.json()).data;
  } catch (error) {
    console.error('Error fetching work experience:', error);
    return;
  }
}
