import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type WorkspaceCardProps = {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  toolCount: number;
};

export default function WorkspaceCard({
  slug,
  title,
  description,
  icon,
  color,
  toolCount,
}: WorkspaceCardProps) {
  return (
    <Link
      href={`/workspaces/${slug}`}
      className="group bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-3xl p-8 transition-all hover:-translate-y-1 flex flex-col h-full"
    >
      <div 
        className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-8 transition-transform group-hover:scale-110"
        style={{ backgroundColor: `${color}15` }}
      >
        {icon}
      </div>

      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-zinc-400 flex-1 mb-8 line-clamp-3">{description}</p>

      <div className="flex items-center justify-between text-sm pt-6 border-t border-zinc-800">
        <div className="text-lime-400 font-mono tracking-wider">
          {toolCount} tools
        </div>
        <div className="flex items-center gap-1 text-zinc-400 group-hover:text-white transition">
          Open workspace
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}