import { useEffect, useState } from "react";
import {
  Briefcase,
  ChevronRight,
  Code,
  Download,
  FolderOpen,
  House,
  Mail,
  Menu,
  User,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { MusicToggle } from "./MusicToggle";

const navItems = [
  { name: "Home", href: "#home", icon: House },
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Contact", href: "#contact", icon: Mail },
];

const iconButtonClasses =
  "flex items-center justify-center h-9 w-9 rounded-full border border-primary/30 bg-primary/5 text-foreground hover:bg-primary/15 hover:border-primary/50 hover:text-primary transition-colors duration-300";

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

          <div className="flex items-center gap-2">
            <MusicToggle />
            <ThemeToggle />

            <button
              onClick={() => setIsMenuOpen(true)}
              className={cn(iconButtonClasses, "md:hidden")}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <Menu className="h-4 w-4" />
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
          "fixed top-0 right-0 z-[60] h-full w-72 max-w-[85%] md:hidden",
          "bg-card border-l border-primary/15 shadow-2xl",
          "flex flex-col transition-transform duration-300 ease-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-border">
          <div className="text-left">
            <p className="font-bold text-lg leading-tight">
              Shatha <span className="text-primary">Ammar</span>
            </p>
            <p className="text-xs text-muted-foreground">
              Full Stack Developer
            </p>
          </div>

          <button
            onClick={closeMenu}
            className={iconButtonClasses}
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col gap-1 p-4">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => {
                  setActiveSection(item.href.substring(1));
                  closeMenu();
                }}
                style={{
                  transitionDelay: isMenuOpen ? `${100 + index * 40}ms` : "0ms",
                }}
                className={cn(
                  "group flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-all duration-300",
                  isMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-6",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:bg-primary/5 hover:text-primary",
                )}
              >
                <span
                  className={cn(
                    "flex items-center justify-center h-9 w-9 rounded-lg transition-colors duration-300",
                    active
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary group-hover:bg-primary/20",
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>

                <span>{item.name}</span>

                <ChevronRight
                  className={cn(
                    "h-4 w-4 ml-auto transition-all duration-300",
                    active
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0",
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <a
            href="/Shatha_Ammar_CV.pdf"
            download="Shatha_Ammar_CV.pdf"
            className="cosmic-button w-full inline-flex items-center justify-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </aside>
    </>
  );
};
