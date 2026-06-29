'use client';

import { useState, useMemo } from 'react';
import WorkspaceHeader from './workspace-header';
import WorkspaceSearch from './workspace-search';
import { Tool } from '@/data/tools';
import { Workspace } from '@/data/workspaces';
import Link from 'next/link';

type WorkspacePageProps = {
  workspace: Workspace;
  tools: Tool[];
};

export default function WorkspacePage({ workspace, tools: initialTools }: WorkspacePageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    if (!searchQuery.trim()) return initialTools;
    const q = searchQuery.toLowerCase().trim();
    return initialTools.filter(tool => 
      tool.name.toLowerCase().includes(q) || 
      tool.description.toLowerCase().includes(q)
    );
  }, [initialTools, searchQuery]);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <WorkspaceHeader workspace={workspace} />
      <WorkspaceSearch onSearch={setSearchQuery} />

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {filteredTools.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group bg-zinc-900 border border-zinc-800 hover:border-lime-500/30 rounded-3xl p-8 transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-6">{tool.icon}</div>
                <h3 className="font-semibold text-xl text-white mb-3">{tool.name}</h3>
                <p className="text-zinc-400 line-clamp-2">{tool.description}</p>
                <div className="mt-6 text-xs text-lime-400 font-mono">{tool.usage} uses</div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="mx-auto w-20 h-20 rounded-full bg-zinc-900 flex items-center justify-center mb-6">
              🔍
            </div>
            <h3 className="text-2xl font-medium mb-3">No tools found</h3>
            <p className="text-zinc-400">Try different search terms</p>
          </div>
        )}
      </div>
    </div>
  );
}