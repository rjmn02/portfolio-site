import { motion } from "motion/react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { CV_DATA } from "~/lib/cv-data";

const getLogoPath = (tech: string): string | null => {
  const logoMap: Record<string, string | null> = {
    React: "/tech_stack_logos/React.png",
    Vite: "/tech_stack_logos/Vite.png",
    "Tailwind CSS": "/tech_stack_logos/TailwindCSS.png",
    "RAG Pipelines": "/tech_stack_logos/RAG.jpg",
    Groq: "/tech_stack_logos/Groq.png",
    "Hugging Face": "/tech_stack_logos/HuggingFace.png",
    LLMs: "/tech_stack_logos/LLM.png",
    NLP: "/tech_stack_logos/NLP.png",
    Langchain: "/tech_stack_logos/LangChain.png",
    FastAPI: "/tech_stack_logos/FastAPI.png",
    PostgreSQL: "/tech_stack_logos/PostgreSQL.png",
    "Next.js": "/tech_stack_logos/NextJS.png",
    TypeScript: "/tech_stack_logos/TypeScript.png",
    Supabase: "/tech_stack_logos/Supabase.png",
    Prisma: "/tech_stack_logos/Prisma.png",
    "shadcn/ui": "/tech_stack_logos/shadcn-ui.png",
    "TanStack Table": "/tech_stack_logos/TanStack_Table.png",
    NestJS: "/tech_stack_logos/NestJS.png",
    JWT: "/tech_stack_logos/JWT.png",
    SQLAlchemy: "/tech_stack_logos/SQLAlchemy.png",
  };
  // Normalize tech names for lookup
  const normalized = tech.replace("Tailwind", "Tailwind CSS");
  return logoMap[normalized] || logoMap[tech] || null;
};

export default function Projects() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="font-mono text-3xl font-bold text-foreground mb-8">
        Projects
      </h1>
      <div className="space-y-6">
        {CV_DATA.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="font-mono">
              <CardHeader>
                <CardTitle className="text-base font-bold">
                  {project.title}
                </CardTitle>
                <p className="font-mono text-sm text-muted-foreground">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs p-4">
                      {getLogoPath(tech) && (
                        <img src={getLogoPath(tech)!} alt={tech} className="h-4 w-4 object-contain" />
                      )}
                      {tech}
                    </Badge>
                  ))}
                </div>
                <ul className="space-y-2 font-mono text-sm text-foreground">
                  {project.details.map((detail, i) => (
                    <li key={i}>• {detail}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="ml-2">GitHub</span>
                  </a>
                </Button>
                {project.demo !== "#" && (
                  <Button variant="default" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span className="ml-2">Demo</span>
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}