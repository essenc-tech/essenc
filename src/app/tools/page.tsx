import Link from 'next/link';
import { tools } from '@/data/tools';
import Container from '@/components/layout/container';
import PageHeader from '@/components/layout/page-header';
import Navbar from '@/components/navigation/navbar';
import Footer from '@/features/home/footer';

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <Container>
        <PageHeader 
          title="All Tools" 
          description="Professional utilities for every workflow" 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group bg-zinc-900 border border-zinc-800 hover:border-lime-500/30 rounded-3xl p-8 transition-all hover:-translate-y-1"
            >
              <div className="text-5xl mb-8">{tool.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-white">{tool.name}</h3>
              <p className="text-zinc-400 line-clamp-2 mb-8">{tool.description}</p>
              <div className="text-xs text-lime-400 font-mono">{tool.usage} uses</div>
            </Link>
          ))}
        </div>
      </Container>

      <Footer />
    </div>
  );
}