import Navbar from '@/components/navigation/navbar';
import Hero from './hero';
import HeroStats from './hero-stats';
import FeaturedWorkspaces from './featured-workspaces';
import PopularTools from './popular-tools';
import Footer from './footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main>
        <Hero />
        <HeroStats />
        <FeaturedWorkspaces />
        <PopularTools />
      </main>
      <Footer />
    </div>
  );
}