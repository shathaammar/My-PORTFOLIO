import { Briefcase, Monitor, Server } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Building secure RESTful APIs with ASP.NET Core, Entity Framework, and SQL databases.",
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    description:
      "Building responsive, user-friendly interfaces with Angular and TypeScript.",
  },
  {
    icon: Briefcase,
    title: "Real-World Projects",
    description:
      "Delivering production systems, from document processing pipelines to IoT vehicle tracking platforms.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold">
              Full Stack .NET Developer
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              Based in Amman, Jordan, with 2+ years of hands-on experience in
              .NET and Angular, working across both backend and frontend
              development. I've built RESTful APIs, worked with databases and
              authentication, and developed responsive web applications through
              professional experience and real-world projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button text-center">
                Get in Touch
              </a>
              <a
                href="/Shatha_Ammar_CV.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary/40 text-primary font-medium text-center hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="gradient-border border border-primary/15 shadow-sm hover:border-primary/40 transition-colors duration-300 p-6 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg mb-1">{title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
