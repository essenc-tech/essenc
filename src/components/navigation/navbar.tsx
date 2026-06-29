'use client';

import Link from 'next/link';
import Logo from './logo';
import SearchBar from '@/features/search/search-bar';

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-12">
            <Logo />
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <Link href="/workspaces" className="hover:text-white transition-colors">Workspaces</Link>
              <Link href="/tools" className="hover:text-white transition-colors">Tools</Link>
            </div>
          </div>

          {/* Center Search */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <SearchBar />
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <Link href="/login" className="hidden md:block text-sm hover:text-white transition">Log in</Link>
            
            <Link 
              href="/signup" 
              className="bg-white hover:bg-lime-400 text-black px-8 py-3 rounded-2xl text-sm font-medium transition-all active:scale-[0.98]"
            >
              Get started free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}