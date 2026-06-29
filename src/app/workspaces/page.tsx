import Link from 'next/link';
import { workspaces } from '@/data/workspaces';
import Container from '@/components/layout/container';
import PageHeader from '@/components/layout/page-header';
import Navbar from '@/components/navigation/navbar';
import Footer from '@/features/home/footer';

export default function WorkspacesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <Container>
        <PageHeader 
          title="Workspaces" 
          description="Purpose-built environments with specialized tools" 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
          {workspaces.map((workspace) => (
            <Link
              key={workspace.slug}
              href={`/workspaces/${workspace.slug}`}
              className="group bg-zinc-900 border border-zinc-800 hover:border-lime-500/30 rounded-3xl p-8 transition-all hover:-translate-y-1"
            >
              <div className="text-6xl mb-8" style={{ color: workspace.color }}>
                {workspace.icon}
              </div>
              <h3 className="text-3xl font-semibold mb-4 text-white">{workspace.title}</h3>
              <p className="text-zinc-400 mb-8 line-clamp-2">{workspace.description}</p>
              <div className="text-lime-400 font-mono text-sm">{workspace.toolCount} tools</div>
            </Link>
          ))}
        </div>
      </Container>

      <Footer />
    </div>
  );
}