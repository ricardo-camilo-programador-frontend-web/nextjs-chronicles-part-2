import AboutMe from "@/components/sections/journey";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Testimonials from "@/components/sections/testimonials";
import Work from "@/components/sections/work";
import Companies from "@/components/general/companies";
import { SEO } from '@/components/SEO';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between"> 
      <SEO
        title="Ricardo Camilo - Programador Frontend Web Developer"
        description="Ricardo Camilo - Programador Frontend Web Developer"
        url={process.env.NEXT_PUBLIC_SITE_URL || ''}
      />

      <Hero />

      <AboutMe />

      <Work />

      <Testimonials />

      <Companies />

      <Footer />
    </main>
  );
}
