'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSearch from '@/features/home/hero-search';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a] dark:bg-[#0a0a0a]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_30%,rgba(163,230,77,0.08),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-lime-500/20 bg-lime-500/5 mb-6">
            <Sparkles className="w-4 h-4 text-lime-400" />
            <span className="text-sm font-medium text-lime-400">The workspace for builders</span>
          </div>
        </motion.div>

        <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter text-white mb-6">
          All your tools.<br />
          <span className="bg-gradient-to-r from-white via-lime-300 to-white bg-clip-text text-transparent">
            One workspace.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-xl text-zinc-400 mb-10">
          The modern platform that connects powerful workspaces and tools.
          Built for developers, creators, and teams who ship fast.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-white text-black hover:bg-white/90 text-lg h-14 px-10 rounded-xl font-medium">
            Start for free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-zinc-700 hover:bg-zinc-900 text-lg h-14 px-10 rounded-xl">
            Watch 2-minute demo
          </Button>
        </div>

        <HeroSearch />
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}