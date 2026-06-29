import { Metadata } from 'next';
import { Tool } from '@/data/tools';
import { Workspace } from '@/data/workspaces';

export function generateHomeMetadata(): Metadata {
  return {
    title: 'Essenc — The Connected Workspace',
    description: 'All your tools. One workspace. Professional online utilities for developers and creators.',
    keywords: ['online tools', 'workspace', 'productivity tools', 'free utilities', 'developers'],
    openGraph: {
      title: 'Essenc — The Connected Workspace',
      description: 'All your tools. One workspace.',
      images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      canonical: '/',
    },
  };
}

export function generateWorkspaceMetadata(workspace: Workspace): Metadata {
  return {
    title: `${workspace.title} - Professional Tools | Essenc`,
    description: `${workspace.description}. Free online tools for ${workspace.title.toLowerCase()}.`,
    keywords: [workspace.title, 'tools', 'online tools', workspace.slug],
    openGraph: {
      title: workspace.title,
      description: workspace.description,
      images: [{ url: `/og/workspaces/${workspace.slug}.jpg` }],
    },
    alternates: {
      canonical: `/workspaces/${workspace.slug}`,
    },
  };
}

export function generateToolMetadata(tool: Tool): Metadata {
  return {
    title: `${tool.name} - Free Online Tool | Essenc`,
    description: `${tool.description}. Fast, accurate, and free.`,
    keywords: [tool.name, tool.workspace, 'online tool', 'free tool', 'utility'],
    openGraph: {
      title: tool.name,
      description: tool.description,
      images: [{ url: `/og/tools/${tool.slug}.jpg` }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
  };
}

export function generateJsonLdTool(tool: Tool) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.name,
    description: tool.description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web Browser',
    url: `https://essenc.app/tools/${tool.slug}`,
  };
}

export function generateBreadcrumbJsonLd(items: Array<{name: string; url: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}