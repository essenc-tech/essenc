import { MetadataRoute } from 'next';
import { tools } from '@/data/tools';
import { workspaces } from '@/data/workspaces';

const baseUrl = 'https://essenc.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];

  workspaces.forEach(workspace => {
    entries.push({
      url: `${baseUrl}/workspaces/${workspace.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  tools.forEach(tool => {
    entries.push({
      url: `${baseUrl}/tools/${tool.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });
  });

  return entries;
}