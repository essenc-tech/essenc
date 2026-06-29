"use client";

import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { searchAll } from "@/lib/search";
import Link from "next/link";

type SearchBarProps = {
  placeholder?: string;
};

export default function SearchBar({
  placeholder = "Search tools and workspaces...",
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (query.length > 0) {
      const searchResults = searchAll(query);
      setResults(searchResults.slice(0, 8));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleSelect = () => {
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="h-11 w-full rounded-2xl border border-zinc-800 bg-zinc-900 pl-11 pr-20 text-sm placeholder:text-zinc-500 focus:border-lime-400 focus:outline-none"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-zinc-500 border border-zinc-700 px-1.5 py-px rounded">
          ⌘K
        </div>
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute mt-2 w-full bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl z-50 max-h-[420px] overflow-auto py-2 custom-scroll">
          {results.map((result) => (
            <Link
              key={result.id}
              href={result.url}
              onClick={handleSelect}
              className="flex items-center gap-4 px-6 py-3.5 hover:bg-zinc-800 transition group"
            >
              <div className="text-2xl flex-shrink-0">{result.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-white group-hover:text-lime-400 truncate">
                  {result.title}
                </div>
                <div className="text-xs text-zinc-500 truncate">
                  {result.description}
                </div>
              </div>
              {result.workspace && (
                <div className="text-[10px] px-3 py-1 bg-zinc-800 text-lime-400 rounded-full font-mono whitespace-nowrap">
                  {result.workspace}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
