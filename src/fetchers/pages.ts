import {
  AboutPage,
  CallToAction,
  ContactUs,
  HeroContent,
} from '../utils/types';

export async function getAboutPage(): Promise<AboutPage | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_ADMIN_URL}/api/about-me?populate=*`
    );
    const json = await response.json();

    return json.data.attributes || json;
  } catch (error) {
    console.error('Error fetching about page content:', error);
    return;
  }
}

export async function getContactUsPage(): Promise<ContactUs | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_ADMIN_URL}/api/contact-us?populate=*`
    );

    return (await response.json()).data;
  } catch (error) {
    console.error('Error fetching contact us page content:', error);
    return;
  }
}

export async function getHeroContent(): Promise<HeroContent | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_ADMIN_URL}/api/hero-content-section1?populate=*`
    );
    const json = await response.json();

    return json.data.attributes || json;
  } catch (error) {
    console.error('Error fetching hero content:', error);
    return;
  }
}

export async function getCallToAction(): Promise<CallToAction | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_ADMIN_URL}/api/call-to-action?populate=*`
    );
    const json = await response.json();

    return json.data.attributes || json;
  } catch (error) {
    console.error('Error fetching call to action content:', error);
    return;
  }
}
