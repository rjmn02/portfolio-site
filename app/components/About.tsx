import { motion } from "motion/react";
import { CV_DATA } from "~/lib/cv-data";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const aboutParagraphs = CV_DATA.about.split("\n");

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleCopy}
      className="h-10 w-10"
      aria-label="Copy email to clipboard"
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </Button>
  );
}

export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="font-mono text-2xl font-bold text-foreground mb-8">
          About
        </h2>
        <div className="flex flex-col md:flex-row md:items-start md:gap-8">
          <div className="flex-1 order-2 md:order-1">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {aboutParagraphs.map((paragraph, i) => (
                    <p key={i} className="font-mono text-base leading-relaxed text-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col items-center mt-8 md:mt-0 md:w-96 order-1 md:order-2">
            <img
              src="/Jimenez, Christian Rhyss R-50081.jpg"
              alt="Christian Rhyss R. Jimenez"
              className="w-96 h-96 object-cover"
            />
            
            <div className="mt-4 flex flex-col w-full items-center gap-2 mb-8">
              <div className="flex items-center gap-2 w-full max-w-96">
                <Button asChild variant="default" className="flex-1">
                  <a href={`mailto:${CV_DATA.email}`}>rhyssjmn@gmail.com</a>
                </Button>
                <CopyEmailButton email={CV_DATA.email} />
              </div>
              <Button asChild variant="outline" className="w-full max-w-96">
                <a href={CV_DATA.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </Button>
              <Button asChild variant="outline" className="w-full max-w-96">
                <a href={CV_DATA.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}