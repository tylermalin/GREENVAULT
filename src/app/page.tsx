import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Product from '@/components/Product';
import IntegrationStack from '@/components/IntegrationStack';
import ValueProposition from '@/components/ValueProposition';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Product />
      <IntegrationStack />
      <ValueProposition />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

