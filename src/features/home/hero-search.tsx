'use client';

import { useState, useEffect } from 'react';
import { Search, Command } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { searchAll } from '@/lib/search';

export default function HeroSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (query.length > 1) {
      const searchResults = searchAll(query);
      setResults(searchResults);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
    setSelectedIndex(-1);
  }, [query]);

  const handleSelect = (result: any) => {
    setQuery('');
    setIsOpen(false);
    router.push(result.url);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setQuery('');
      return;
    }

    if (!isOpen || results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : 0));
    }
    
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : results.length - 1));
    }
    
    if (e.key === 'Enter' && selectedIndex >= 0) {
      handleSelect(results[selectedIndex]);
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto w-full px-4 z-50">
      <div className="relative group">
        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500">
          <Search className="w-5 h-5" />
        </div>
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length > 0 && setIsOpen(true)}
          placeholder="Search tools and workspaces... (⌘K)"
          className="w-full bg-zinc-900 border border-zinc-800 pl-12 pr-12 py-4 rounded-2xl text-lg placeholder:text-zinc-500 focus:outline-none focus:border-lime-500 transition-colors"
        />
        
        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-mono text-zinc-500 border border-zinc-700 px-2 py-1 rounded">
          <Command className="inline w-3 h-3" /> K
        </div>
      </div>

      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute left-4 right-4 mt-3 bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden shadow-2xl z-50 max-h-[420px] overflow-auto custom-scroll"
          >
            {results.map((result, index) => (
              <button
                key={result.id}
                onClick={() => handleSelect(result)}
                className={`w-full px-6 py-4 flex items-center gap-4 hover:bg-zinc-800 text-left transition-colors border-b border-zinc-800 last:border-0 ${
                  index === selectedIndex ? 'bg-zinc-800' : ''
                }`}
              >
                <div className="text-3xl flex-shrink-0">{result.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-white">{result.title}</div>
                  <div className="text-sm text-zinc-400 truncate">{result.description}</div>
                </div>
                {result.workspace && (
                  <div className="text-xs uppercase tracking-widest text-lime-400 font-mono">
                    {result.workspace}
                  </div>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}