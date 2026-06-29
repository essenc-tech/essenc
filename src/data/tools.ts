export type Tool = {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  workspace: string;
  usage: string;
  featured: boolean;
};

export const tools: Tool[] = [
  {
    id: 'word-counter',
    slug: 'word-counter',
    name: 'Word Counter Pro',
    description: 'Real-time word, character, and sentence counter with readability analysis',
    icon: '📝',
    workspace: 'text',
    usage: '142k',
    featured: true,
  },
  {
    id: 'case-converter',
    slug: 'case-converter',
    name: 'Case Converter',
    description: 'Convert text between different cases instantly',
    icon: 'Aa',
    workspace: 'text',
    usage: '98k',
    featured: true,
  },
  {
    id: 'json-formatter',
    slug: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Format, validate and visualize JSON',
    icon: '🗂️',
    workspace: 'code',
    usage: '89k',
    featured: true,
  },
];

export function getToolsByWorkspace(workspaceSlug: string) {
  return tools.filter(tool => tool.workspace === workspaceSlug);
}

export function getFeaturedTools() {
  return tools.filter(tool => tool.featured);
}