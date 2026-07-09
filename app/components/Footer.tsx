import { Button } from "~/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { CV_DATA } from "~/lib/cv-data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto flex h-12 items-center justify-between px-4 max-w-4xl">
        <p className="font-mono text-sm text-muted-foreground">
          © 2026 {CV_DATA.name}
        </p>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" asChild>
            <a href={CV_DATA.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={CV_DATA.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}