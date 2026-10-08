import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      // at the very top of the page, always highlight Home
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // the section counts as active when it crosses the middle of the screen
        rootMargin: "-45% 0px -50% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const isActive = (href) => activeSection === href.substring(1);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-5",
      )}
    >
      <div className="container relative flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#home"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">ShathaTech</span>{" "}
            Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 rounded-full px-2 py-1.5 bg-background/60 backdrop-blur-md border border-primary/15 shadow-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActiveSection(item.href.substring(1))}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-300",
                isActive(item.href)
                  ? "text-primary bg-primary/15"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/10",
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* right side: theme toggle + mobile menu button */}
        <div className="flex items-center gap-1 z-50">
          <ThemeToggle />

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "transition-colors duration-300",
                  isActive(item.href)
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-primary",
                )}
                onClick={() => {
                  setActiveSection(item.href.substring(1));
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
