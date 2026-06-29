'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { searchAll } from '@/lib/search';
import SearchResults from './search-results';
import SearchEmpty from './search-empty';

export default function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const results = searchAll(query);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(true);
        setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20 sm:pt-32 px-4" onClick={() => setIsOpen(false)}>
      <div 
        className="w-full max-w-2xl bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-700"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search anything..."
            className="w-full bg-transparent border-b border-zinc-800 px-6 py-5 text-lg placeholder:text-zinc-500 focus:outline-none"
            autoFocus
          />
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute right-6 top-5 text-zinc-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {query.length > 0 && (
          results.length > 0 ? (
            <SearchResults results={results} onClose={() => setIsOpen(false)} />
          ) : (
            <SearchEmpty query={query} />
          )
        )}
      </div>
    </div>
  );
}