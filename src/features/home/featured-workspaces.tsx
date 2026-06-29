import { ArrowRight, Code2, FileText, Palette, Calculator } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const workspaces = [
  {
    id: 'text',
    title: 'Text Workspace',
    description: 'Writing, editing, and content tools',
    icon: FileText,
    color: 'text-lime-400',
    href: '/workspaces/text',
    toolCount: 24,
  },
  {
    id: 'code',
    title: 'Code Workspace',
    description: 'Development & debugging tools',
    icon: Code2,
    color: 'text-sky-400',
    href: '/workspaces/code',
    toolCount: 31,
  },
  {
    id: 'design',
    title: 'Design Workspace',
    description: 'Visual & creative tools',
    icon: Palette,
    color: 'text-violet-400',
    href: '/workspaces/design',
    toolCount: 19,
  },
  {
    id: 'productivity',
    title: 'Productivity',
    description: 'Calculators, converters & more',
    icon: Calculator,
    color: 'text-amber-400',
    href: '/workspaces/productivity',
    toolCount: 42,
  },
];

export default function FeaturedWorkspaces() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight text-white mb-3">
            Featured Workspaces
          </h2>
          <p className="text-zinc-400 max-w-md">
            Purpose-built environments with the best tools for every workflow.
          </p>
        </div>
        <Button variant="ghost" asChild>
          <Link href="/workspaces" className="group">
            View all workspaces
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition" />
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {workspaces.map((workspace) => {
          const Icon = workspace.icon;
          return (
            <Link
              key={workspace.id}
              href={workspace.href}
              className="group bg-zinc-900 border border-zinc-800 hover:border-lime-500/50 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-zinc-800 mb-8 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-7 h-7 ${workspace.color}`} />
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-2">{workspace.title}</h3>
              <p className="text-zinc-400 mb-8 line-clamp-2">{workspace.description}</p>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-lime-400 font-mono">{workspace.toolCount} tools</span>
                <span className="text-zinc-500 group-hover:text-lime-400 transition flex items-center gap-1">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}