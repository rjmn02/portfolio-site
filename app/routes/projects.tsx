import type { Route } from "./+types/projects";
import Projects from "../components/Projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects — Christian Rhyss R. Jimenez" },
    { name: "description", content: "Development projects portfolio" },
  ];
}

export default function ProjectsPage() {
  return <Projects />;
}