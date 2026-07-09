import { motion } from "motion/react";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { CV_DATA } from "~/lib/cv-data";

const getLogoPath = (skill: string): string | null => {
  const logoMap: Record<string, string | null> = {
    TypeScript: "/tech_stack_logos/TypeScript.png",
    JavaScript: "/tech_stack_logos/JavaScript.png",
    Python: "/tech_stack_logos/Python.png",
    Java: "/tech_stack_logos/Java.png",
    "Next.js": "/tech_stack_logos/NextJS.png",
    "React.js": "/tech_stack_logos/React.png",
    Vite: "/tech_stack_logos/Vite.png",
    "Tailwind CSS": "/tech_stack_logos/TailwindCSS.png",
    "shadcn/ui": "/tech_stack_logos/shadcn-ui.png",
    "TanStack Table": "/tech_stack_logos/TanStack_Table.png",
    HTML: "/tech_stack_logos/HTML5.png",
    FastAPI: "/tech_stack_logos/FastAPI.png",
    NestJS: "/tech_stack_logos/NestJS.png",
    "REST API": null,
    RBAC: null,
    JWT: "/tech_stack_logos/JWT.png",
    PostgreSQL: "/tech_stack_logos/PostgreSQL.png",
    Supabase: "/tech_stack_logos/Supabase.png",
    Prisma: "/tech_stack_logos/Prisma.png",
    SQLAlchemy: "/tech_stack_logos/SQLAlchemy.png",
    "RAG Pipelines": null,
    "Groq API": "/tech_stack_logos/Groq.png",
    "Hugging Face Embeddings": "/tech_stack_logos/HuggingFace.png",
    Git: "/tech_stack_logos/Git.png",
    GitHub: "/tech_stack_logos/GitHub.png",
    Postman: "/tech_stack_logos/Postman.png",
    Bruno: "/tech_stack_logos/Bruno.png",
    Docker: "/tech_stack_logos/Docker.png",
    Swagger: "/tech_stack_logos/Swagger.png",
    "Claude Code": "/tech_stack_logos/ClaudeCode.png",
    "Cisco Certified Network Associate (CCNA)": "/tech_stack_logos/Cisco_CCNA.png",
    "Cisco Network Security": "/tech_stack_logos/Cisco_CCNA.png",
    "Cisco Packet Tracer": "/tech_stack_logos/Cisco_CCNA.png",
    Cebuano: null,
    Tagalog: null,
    English: null,
  };
  return logoMap[skill] || null;
};

export default function Skills() {
  return (
    <section className="mx-auto max-w-4xl px-4 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="font-mono text-2xl font-bold text-foreground mb-4">
          Skills
        </h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-3">
              {Object.entries(CV_DATA.skillCategories).map(([category, skills]) => (
                <div key={category}>
                  <span className="font-mono text-sm text-muted-foreground">{category}:</span>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs p-4">
                        {getLogoPath(skill) && (
                          <img src={getLogoPath(skill)!} alt={skill} className="h-4 w-4 object-contain" />
                        )}
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}