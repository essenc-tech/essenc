export type Workspace = {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  featured: boolean;
  toolCount: number;
};

export const workspaces: Workspace[] = [
  {
    id: 'text',
    slug: 'text',
    title: 'Text Workspace',
    description: 'Writing, editing, and content analysis tools',
    icon: '✍️',
    color: '#bef264',
    featured: true,
    toolCount: 28,
  },
  {
    id: 'code',
    slug: 'code',
    title: 'Code Workspace',
    description: 'Development, debugging, and formatting tools',
    icon: '💻',
    color: '#60a5fa',
    featured: true,
    toolCount: 35,
  },
  {
    id: 'design',
    slug: 'design',
    title: 'Design Workspace',
    description: 'Visual design, color, and asset tools',
    icon: '🎨',
    color: '#c084fc',
    featured: true,
    toolCount: 22,
  },
];