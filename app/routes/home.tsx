import type { Route } from "./+types/home";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Christian Rhyss R. Jimenez — Developer Portfolio" },
    { name: "description", content: "Full-stack developer portfolio" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
    </>
  );
}
