import Clients from "@/components/sections/Clients";
import Experience from "@/components/sections/Experience";
import { FeaturesSectionDemo } from "@/components/sections/Features";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/Projects";
import { CanvasRevealEffectDemo } from "@/components/ui/CanvaRevealEffectDemo";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Experience />
        <Projects />
        <FeaturesSectionDemo />
        <CanvasRevealEffectDemo />
        <Clients />
      </div>
    </main>
  );
}
