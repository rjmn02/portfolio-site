import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "~/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 max-w-4xl">
        <Link to="/" className="flex items-center gap-2 font-mono font-bold text-foreground">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <span>rjmn.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path === "/" && location.pathname === "");
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`font-mono text-sm transition-colors hover:text-primary ${
                  isActive ? "font-bold text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Trigger */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full border-b border-border bg-background md:hidden"
            >
              <div className="flex flex-col gap-2 p-4">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path || (item.path === "/" && location.pathname === "");
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`font-mono py-2 text-sm transition-colors hover:text-primary ${
                        isActive ? "font-bold text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}