import { tools } from '@/data/tools';
import { notFound } from 'next/navigation';

export function getToolBySlug(slug: string) {
  const tool = tools.find(t => t.slug === slug);
  if (!tool) notFound();
  return tool;
}

export function getToolsByWorkspace(workspaceSlug: string) {
  return tools.filter(t => t.workspace === workspaceSlug);
}

export function getFeaturedTools() {
  return tools.filter(t => t.featured);
}

export function getRelatedTools(currentSlug: string, limit = 6) {
  const currentTool = tools.find(t => t.slug === currentSlug);
  if (!currentTool) return [];
  
  return tools
    .filter(t => t.workspace === currentTool.workspace && t.slug !== currentSlug)
    .slice(0, limit);
}

export function getToolNavigation(currentSlug: string) {
  const index = tools.findIndex(t => t.slug === currentSlug);
  return {
    prev: index > 0 ? tools[index - 1] : null,
    next: index < tools.length - 1 ? tools[index + 1] : null,
  };
}