import Image from "next/image";
import Nav from "@/components/nav/Nav";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
