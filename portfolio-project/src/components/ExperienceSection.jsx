import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Full Stack .NET Developer",
    company: "Unlimited Innovation",
    location: "Amman, Jordan",
    period: "Feb 2026 – Jun 2026",
    points: [
      "Built and maintained web applications using ASP.NET Core and Angular.",
      "Developed document processing pipelines to automate business workflows.",
      "Worked across backend APIs, database logic, and frontend features.",
    ],
    tags: [".NET", "Angular", "SQL Server", "Laserfiche"],
  },
  {
    role: "Full Stack .NET Developer",
    company: "Marmara for Modern Software",
    location: "Amman, Jordan",
    period: "Jul 2024 – Jan 2026",
    points: [
      "Developed features for IoT vehicle tracking systems.",
      "Built and integrated RESTful APIs with .NET.",
      "Worked on dashboards and interfaces for monitoring vehicle data.",
    ],
    tags: [".NET", "Angular", "SQL Server", "PTC ThingWorx", "IoT"],
  },
];

const tagClasses =
  "px-3 py-1.5 rounded-full text-sm font-medium text-foreground bg-primary/5 border border-primary/30 hover:bg-primary/15 hover:border-primary/40 transition-colors duration-300";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-3 md:left-48 w-0.5 -translate-x-1/2 bg-primary/20" />

          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative flex">
                <div className="hidden md:flex flex-col items-end gap-2 w-48 shrink-0 pr-8 pt-4 text-right">
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold whitespace-nowrap">
                    <Calendar className="h-4 w-4 shrink-0" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 shrink-0" />
                    {exp.location}
                  </span>
                </div>

                <span className="absolute left-3 md:left-48 top-6 -translate-x-1/2 z-10 flex items-center justify-center h-5 w-5 rounded-full bg-background border-2 border-primary">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>

                <div className="flex-1 min-w-0 pl-10">
                  <div className="gradient-border border border-primary/15 shadow-sm hover:border-primary/40 transition-colors duration-300 p-6 card-hover text-left">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="flex items-center gap-2 text-primary font-medium">
                        <Briefcase className="h-4 w-4 shrink-0" />
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex md:hidden flex-wrap gap-x-5 gap-y-1 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 shrink-0" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 shrink-0" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="grid gap-2 mt-4 mb-5">
                      {exp.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-muted-foreground text-sm leading-relaxed"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className={tagClasses}>
                          {tag}
                        </span>
                      ))}
                    </div>
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
