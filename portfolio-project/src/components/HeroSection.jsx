import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-5xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm Shatha</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Ammar
            </span>
          </h1>

          <p className="text-lg md:text-xl font-medium text-foreground/90 opacity-0 animate-fade-in-delay-2">
            Full Stack Developer
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance opacity-0 animate-fade-in-delay-3">
            I build practical, reliable, and user-friendly web applications,
            turning ideas into real solutions. Always learning, always
            improving.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-primary/40 text-primary font-medium hover:bg-primary/10 transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <span className="text-sm mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
};