import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-xl bg-lime-400 flex items-center justify-center">
                <span className="text-black font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-semibold text-white tracking-tight">Essenc</span>
            </div>
            <p className="text-sm text-zinc-400 max-w-xs">
              The connected workspace for modern builders.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><Link href="/tools" className="hover:text-white transition">Tools</Link></li>
              <li><Link href="/workspaces" className="hover:text-white transition">Workspaces</Link></li>
              <li><Link href="/search" className="hover:text-white transition">Search</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><Link href="/docs" className="hover:text-white transition">Documentation</Link></li>
              <li><Link href="/changelog" className="hover:text-white transition">Changelog</Link></li>
              <li><Link href="/help" className="hover:text-white transition">Help Center</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><Link href="/privacy" className="hover:text-white transition">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms</Link></li>
              <li><Link href="/cookies" className="hover:text-white transition">Cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 border-t border-zinc-900 pt-10">
          <div className="max-w-md">
            <h4 className="font-semibold mb-2 text-white">Stay in the loop</h4>
            <p className="text-sm text-zinc-400 mb-4">
              New tools, workspaces, and feature updates delivered monthly.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="you@domain.com"
                className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-lime-500"
              />
              <button className="bg-white text-black px-8 rounded-xl font-medium hover:bg-lime-400 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} Essenc. All rights reserved.</div>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition">
              <span className="font-mono text-lg">GH</span>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-white transition">
              <span className="font-mono text-lg">𝕏</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
              <span className="font-mono text-lg">in</span>
            </a>
            <a href="#" className="hover:text-white transition">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}