import Image from "next/image";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
