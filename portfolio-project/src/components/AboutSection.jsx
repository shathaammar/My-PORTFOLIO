import { Briefcase, Download, Monitor, Server } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Building secure RESTful APIs with ASP.NET Core, Entity Framework, and SQL databases.",
    span: "",
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    description:
      "Building responsive, user-friendly interfaces with Angular and TypeScript.",
    span: "",
  },
  {
    icon: Briefcase,
    title: "Real-World Projects",
    description:
      "Delivering production systems, from document processing pipelines to IoT vehicle tracking platforms.",
    span: "sm:col-span-2",
  },
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "2", label: "Companies" },
  { value: "4+", label: "Projects Built" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-2 text-left space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Who I am
            </p>

            <h3 className="text-2xl md:text-3xl font-bold leading-snug">
              Turning ideas into{" "}
              <span className="text-primary">clean, working software.</span>
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              Based in Amman, Jordan, with 2+ years of hands-on experience in
              .NET and Angular, working across both backend and frontend
              development. I've built RESTful APIs, worked with databases and
              authentication, and developed responsive web applications through
              professional experience and real-world projects.
            </p>

            <div className="grid grid-cols-3 gap-4 py-2">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={index > 0 ? "pl-4 border-l border-primary/20" : ""}
                >
                  <p className="font-heading text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/Shatha_Ammar_CV.pdf"
                download="Shatha_Ammar_CV.pdf"
                className="cosmic-button inline-flex items-center justify-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary/40 text-primary font-medium text-center hover:bg-primary/10 transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map(({ icon: Icon, title, description, span }) => (
              <div
                key={title}
                className={`group relative overflow-hidden rounded-2xl border border-primary/15 bg-card/70 backdrop-blur-sm p-6 text-left hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${span}`}
              >
                <Icon className="absolute -right-6 -bottom-6 h-32 w-32 text-primary/5 group-hover:text-primary/10 group-hover:scale-110 transition-all duration-500" />

                <div className="relative">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h4 className="font-semibold text-lg mb-2">{title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
