import { Navigation } from "@/components/Navigation";
import { Hero } from "@/sections/Hero";
import { Gallery3D } from "@/sections/Gallery3D";
import { Skills } from "@/sections/Skills";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative flex-1 overflow-x-hidden bg-background">
        <Hero />
        <Gallery3D />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
