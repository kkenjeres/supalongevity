import Contact from "./components/Contact";
import FAQ from "./components/Faq";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
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
