import { About } from "./components/About";
import { Benefits } from "./components/Benefits";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { WorkGallery } from "./components/WorkGallery";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-ink text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(121,242,192,0.12),transparent_28%),radial-gradient(circle_at_82%_10%,rgba(155,124,255,0.15),transparent_28%),radial-gradient(circle_at_50%_70%,rgba(121,242,192,0.06),transparent_34%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />
      <div className="noise fixed inset-0 -z-10 opacity-[0.055]" />
      <Header />
      <main>
        <Hero />
        <WorkGallery />
        <Services />
        <About />
        <Pricing />
        <Process />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
