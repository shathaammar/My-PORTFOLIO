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
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Shatha
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto text-balance opacity-0 animate-fade-in-delay-3">
            I'm a Full Stack Developer focused on building practical, reliable,
            and user-friendly web applications. I enjoy solving problems,
            learning new technologies, and turning ideas into meaningful digital
            experiences. I'm constantly working on improving my skills to
            deliver better solutions with every project.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
