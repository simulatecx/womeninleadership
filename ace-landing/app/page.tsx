import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EventStrip } from "@/components/EventStrip";
import { Agenda } from "@/components/Agenda";
import { AboutAce } from "@/components/AboutAce";
import { Charities } from "@/components/Charities";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EventStrip />
        <Agenda />
        <AboutAce />
        <Charities />
      </main>
      <Footer />
    </>
  );
}
