import { About } from "./components/About";
import { Benefits } from "./components/Benefits";
import { BuildOptions } from "./components/BuildOptions";
import { CTA } from "./components/CTA";
import { DemoCTA } from "./components/DemoCTA";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";
import { Process } from "./components/Process";
import { ProductPage } from "./components/ProductPage";
import { ScrollProgress } from "./components/ScrollProgress";
import { Services } from "./components/Services";
import { Tasks } from "./components/Tasks";
import { WorkGallery } from "./components/WorkGallery";
import { works } from "./data/siteData";
import { useEffect, useMemo, useState } from "react";

function App() {
  const [hash, setHash] = useState(() => window.location.hash);
  const productSlug = hash.match(/^#\/product\/([^/]+)$/)?.[1];
  const product = useMemo(() => works.find((item) => item.slug === productSlug), [productSlug]);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (product) {
    return (
      <>
        <ScrollProgress />
        <ProductPage product={product} />
      </>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-white">
      <div className="aurora fixed inset-0 -z-10" />
      <div className="grid-bg fixed inset-0 -z-10" />
      <div className="noise fixed inset-0 -z-10 opacity-[0.045]" />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <WorkGallery />
        <BuildOptions />
        <Tasks />
        <Services />
        <About />
        <DemoCTA />
        <Pricing />
        <Process />
        <Benefits />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
