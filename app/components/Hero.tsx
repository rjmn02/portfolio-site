import { motion } from "motion/react";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { CV_DATA } from "~/lib/cv-data";
import { TypeAnimation } from 'react-type-animation';
import { lazy, Suspense } from 'react';

// Lazy load DotGrid to prevent SSR errors - it uses browser-only APIs
const DotGrid = lazy(() => import('./DotGrid'));

export default function Hero() {
  return (
    <section className="flex min-h-[100vh] items-center justify-center px-4 relative border-b-4 border-border">
      <Suspense fallback={null}>
        <DotGrid
          dotSize={4}
          gap={20}
          baseColor="#27272A"
          activeColor="#8B2FD8"
          proximity={120}
          shockRadius={200}
          shockStrength={4}
          resistance={750}
          returnDuration={1.5}
        />
      </Suspense>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl text-center relative z-10"
      >
        <h1 className="font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {CV_DATA.name}
        </h1>
        <TypeAnimation
          sequence={[
            "Full-Stack Developer",
            2000,
            "Backend Engineer",
            2000,
            "AI Solutions Builder",
            2000,
            "Software Engineer",
            2000,
            "Web Developer",
            2000,
          ]}
          wrapper="p"
          speed={40}
          className="mt-2 font-mono text-xl text-primary"
          repeat={Infinity}
        />
        <p className="mt-4 font-mono text-lg text-muted-foreground">
          {CV_DATA.location}
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            asChild
            variant="default"
            className="font-mono"
            size="lg"
          >
            <Link to="/projects">View Projects</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="font-mono"
            size="lg"
          >
            <Link to="/resume">View Full Resume</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}