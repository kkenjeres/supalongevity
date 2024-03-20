import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import LongevityGuide from "./components/LongevityGuide";
import Chat from "./components/Chat";
import Cases from "./components/Cases";
export default function Home() {
  return (
    <main>
      <Hero />
      <LongevityGuide />
      <Chat />
      <Cases />
      <FAQ />
      <Contact />
    </main>
  );
}
