import type { Route } from "./+types/resume";
import { Button } from "~/components/ui/button";
import { Download } from "lucide-react";

// Cache-busting timestamp - update when PDF is replaced
const PDF_TIMESTAMP = "20250609";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Resume — Christian Rhyss R. Jimenez" },
    { name: "description", content: "Developer resume" },
  ];
}

export default function Resume() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-mono text-3xl font-bold text-foreground">
          Resume
        </h1>
        <Button asChild className="font-mono" size="lg">
          <a href={`/Jimenez_CV_2026.pdf?v=${PDF_TIMESTAMP}`} download>
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </a>
        </Button>
      </div>

      <div className="border border-border rounded-lg overflow-hidden bg-card">
        <iframe
          src={`/Jimenez_CV_2026.pdf?v=${PDF_TIMESTAMP}`}
          className="w-full h-[100vh] min-h-[800px]"
          title="Christian Rhyss R. Jimenez Resume"
        />
      </div>
    </section>
  );
}