import { MetadataRoute } from 'next';

const url = process.env.NEXT_PUBLIC_DOMAIN;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Google's limit is 50,000 URLs per sitemap
  return [
    {
      url,
      changeFrequency: 'always',
      priority: 1,
    },
  ];
}
