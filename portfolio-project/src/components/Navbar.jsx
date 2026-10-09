import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { MusicToggle } from "./MusicToggle";

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

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const isActive = (href) => activeSection === href.substring(1);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
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

          <div className="flex items-center gap-1">
            <MusicToggle />
            <ThemeToggle />

            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 text-foreground"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <div
        onClick={closeMenu}
        aria-hidden="true"
        className={cn(
          "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      />

      <aside
        className={cn(
          "fixed top-0 right-0 z-[60] h-full w-72 max-w-[80%] md:hidden",
          "bg-card border-l border-primary/15 shadow-xl",
          "flex flex-col transition-transform duration-300 ease-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <button
            onClick={closeMenu}
            className="p-2 rounded-full text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col gap-2 p-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => {
                setActiveSection(item.href.substring(1));
                closeMenu();
              }}
              className={cn(
                "px-4 py-3 rounded-lg text-base font-medium transition-colors duration-300",
                isActive(item.href)
                  ? "text-primary bg-primary/15"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/10",
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
};
