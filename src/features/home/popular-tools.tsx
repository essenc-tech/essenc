import { ArrowRight, Users, Clock, Star } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const popularTools = [
  {
    id: 'word-counter',
    name: 'Word Counter',
    description: 'Real-time word, character & sentence analysis',
    icon: '📝',
    usage: '142k',
    category: 'Text',
    href: '/tools/word-counter',
  },
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Validate, format and visualize JSON',
    icon: '🗂️',
    usage: '89k',
    category: 'Code',
    href: '/tools/json-formatter',
  },
  {
    id: 'color-picker',
    name: 'Color Tools',
    description: 'Palette generator & converter',
    icon: '🎨',
    usage: '67k',
    category: 'Design',
    href: '/tools/color-tools',
  },
  {
    id: 'base64',
    name: 'Base64 Encoder',
    description: 'Fast encode & decode utilities',
    icon: '🔐',
    usage: '54k',
    category: 'Code',
    href: '/tools/base64',
  },
];

export default function PopularTools() {
  return (
    <section className="bg-zinc-950 py-24 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-white mb-3">
              Popular Tools
            </h2>
            <p className="text-zinc-400">Used by thousands every day</p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/tools" className="group flex items-center gap-2">
              Browse all tools
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularTools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.href}
              className="group bg-zinc-900 border border-zinc-800 hover:border-lime-500/30 rounded-3xl p-8 transition-all hover:-translate-y-1 flex flex-col"
            >
              <div className="text-4xl mb-6 transition-transform group-hover:scale-110">{tool.icon}</div>
              
              <h3 className="font-semibold text-xl text-white mb-2">{tool.name}</h3>
              <p className="text-zinc-400 text-[15px] flex-1 line-clamp-2 mb-8">
                {tool.description}
              </p>

              <div className="flex items-center justify-between text-sm pt-6 border-t border-zinc-800">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <Users className="w-4 h-4" />
                  <span>{tool.usage}</span>
                </div>
                <div className="text-lime-400 text-xs font-medium tracking-wider uppercase">
                  {tool.category}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}