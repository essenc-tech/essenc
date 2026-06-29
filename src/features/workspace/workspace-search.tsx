'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

type WorkspaceSearchProps = {
  onSearch: (query: string) => void;
};

export default function WorkspaceSearch({ onSearch }: WorkspaceSearchProps) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative max-w-2xl mx-auto -mt-6 mb-12 px-6 z-10">
      <div className="relative">
        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search tools in this workspace..."
          className="w-full bg-zinc-900 border border-zinc-700 focus:border-lime-500 pl-14 pr-6 py-4 rounded-2xl text-lg placeholder:text-zinc-500 focus:outline-none transition-colors"
        />
      </div>
    </div>
  );
}