'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Workspace } from '@/data/workspaces';

type WorkspaceHeaderProps = {
  workspace: Workspace;
};

export default function WorkspaceHeader({ workspace }: WorkspaceHeaderProps) {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link 
          href="/workspaces"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white mb-8 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          All Workspaces
        </Link>

        <div className="flex items-start gap-8">
          <div 
            className="w-24 h-24 rounded-3xl flex-shrink-0 flex items-center justify-center text-6xl"
            style={{ backgroundColor: `${workspace.color}15` }}
          >
            {workspace.icon}
          </div>

          <div className="pt-2">
            <h1 className="text-5xl font-semibold tracking-tight text-white mb-4">
              {workspace.title}
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              {workspace.description}
            </p>
            <div className="mt-6 text-sm font-mono text-lime-400">
              {workspace.toolCount} powerful tools
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}