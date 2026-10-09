import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 px-4 bg-card border-t border-border">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          &copy; {new Date().getFullYear()} Shatha Ammar. All rights reserved.
        </p>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 hover:-translate-y-1 transition-all duration-300"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};