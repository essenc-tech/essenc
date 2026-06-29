import { tools } from '@/data/tools';
import { workspaces } from '@/data/workspaces';

export type SearchResult = {
  id: string;
  type: 'tool' | 'workspace';
  title: string;
  description: string;
  icon: string;
  url: string;
  workspace?: string;
  score: number;
};

function normalize(text: string): string {
  return text.toLowerCase().trim();
}

export function searchAll(query: string): SearchResult[] {
  if (!query?.trim()) return [];

  const q = normalize(query);
  const results: SearchResult[] = [];

  // Tools
  tools.forEach(tool => {
    let score = 0;
    if (normalize(tool.name).includes(q)) score += 10;
    if (normalize(tool.description).includes(q)) score += 5;
    if (normalize(tool.workspace).includes(q)) score += 3;

    if (score > 0) {
      results.push({
        id: tool.id,
        type: 'tool',
        title: tool.name,
        description: tool.description,
        icon: tool.icon,
        url: `/tools/${tool.slug}`,
        workspace: tool.workspace,
        score,
      });
    }
  });

  // Workspaces
  workspaces.forEach(workspace => {
    let score = 0;
    if (normalize(workspace.title).includes(q)) score += 10;
    if (normalize(workspace.description).includes(q)) score += 5;

    if (score > 0) {
      results.push({
        id: workspace.id,
        type: 'workspace',
        title: workspace.title,
        description: workspace.description,
        icon: workspace.icon,
        url: `/workspaces/${workspace.slug}`,
        score,
      });
    }
  });

  return results.sort((a, b) => b.score - a.score);
}