import Head from "next/head";

import AboutMe from "@/components/sections/journey";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Testimonials from "@/components/sections/testimonials";
import Work from "@/components/sections/work";
import Companies from "@/components/general/companies";
import ScrollReveal from "@/components/animations/ScrollReveal";
import EnterAnimation from "@/components/animations/EnterAnimation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Head>
        <meta property="og:image" content="/images/open-graph-ricardo.png" />
      </Head>

      <EnterAnimation>
        <Hero />
      </EnterAnimation>

      <ScrollReveal direction="left">
        <EnterAnimation>
          <AboutMe />
        </EnterAnimation>
      </ScrollReveal>

      <ScrollReveal direction="right">
        <EnterAnimation>
          <Work />
        </EnterAnimation>
      </ScrollReveal>

      <ScrollReveal direction="left">
        <EnterAnimation>
          <Testimonials />
        </EnterAnimation>
      </ScrollReveal>

      <ScrollReveal direction="right">
        <EnterAnimation>
          <Companies />
        </EnterAnimation>
      </ScrollReveal>

      <EnterAnimation>
        <Footer />
      </EnterAnimation>
    </main>
  );
}
