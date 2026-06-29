import Link from 'next/link';
import { getRelatedTools } from './tool-registry';
import { Tool } from '@/data/tools';

type RelatedToolsProps = {
  currentSlug: string;
};

export default function RelatedTools({ currentSlug }: RelatedToolsProps) {
  const related = getRelatedTools(currentSlug);

  if (related.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-800">
      <h2 className="text-3xl font-semibold mb-10 text-white">More tools in this workspace</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="group bg-zinc-900 border border-zinc-800 hover:border-lime-500/30 rounded-3xl p-8 transition-all hover:-translate-y-1"
          >
            <div className="text-4xl mb-6">{tool.icon}</div>
            <h3 className="font-semibold text-xl mb-2 text-white">{tool.name}</h3>
            <p className="text-zinc-400 line-clamp-2 text-sm">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}