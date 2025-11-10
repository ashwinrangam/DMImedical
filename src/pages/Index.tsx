import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Credibility from '@/components/Credibility';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Careers from '@/components/Careers';
import Stats from '@/components/About'; // Renamed About to Stats
import Verification from '@/components/Verification';
import CTABanner from '@/components/CTABanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-[hsl(var(--light-gray-bg))]">
      <Navigation />
      <main className="overflow-x-hidden">
        <Hero />
        <Services />
        <Process />
        <Careers className="section-angled-top" />
        <Stats />
        <Verification />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}