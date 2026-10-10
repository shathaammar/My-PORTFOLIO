import { Database, Monitor, Server, Star } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    description: "Building responsive, user-friendly interfaces.",
    icon: Monitor,
    skills: ["Angular", "TypeScript", "JavaScript", "HTML/CSS", "React"],
  },
  {
    title: "Backend",
    description: "Designing secure APIs and business logic.",
    icon: Server,
    skills: [
      "C#",
      ".NET Core",
      "ASP.NET MVC",
      "RESTful APIs",
      "Entity Framework Core",
      "JWT Authentication",
    ],
  },
  {
    title: "Databases & Tools",
    description: "Storing data, shipping code, and deploying apps.",
    icon: Database,
    skills: [
      "SQL Server",
      "PostgreSQL",
      "Git/GitHub",
      "Docker",
      "AWS",
      "Laserfiche",
      "PTC ThingWorx",
    ],
  },
];

const coreSkills = new Set([
  "Angular",
  "TypeScript",
  "C#",
  ".NET Core",
  "Entity Framework Core",
  "SQL Server",
]);

const allSkills = skillCategories.flatMap((category) => category.skills);

const pad = (n) => String(n).padStart(2, "0");

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-12">
          <Star className="h-3.5 w-3.5 fill-primary text-primary" />
          Highlighted skills are the ones I use most
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {skillCategories.map(({ title, description, icon: Icon, skills }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-card/70 backdrop-blur-sm p-6 text-left hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <Icon className="absolute -right-6 -bottom-6 h-32 w-32 text-primary/5 group-hover:text-primary/10 group-hover:scale-110 transition-all duration-500" />

              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium tabular-nums text-muted-foreground px-2.5 py-1 rounded-full border border-primary/15">
                    {pad(skills.length)} skills
                  </span>
                </div>

                <h3 className="font-semibold text-xl mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => {
                    const isCore = coreSkills.has(skill);

                    return (
                      <span
                        key={skill}
                        className={
                          isCore
                            ? "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-primary text-primary-foreground border border-primary shadow-sm"
                            : "px-3 py-1.5 rounded-full text-sm font-medium text-foreground bg-primary/5 border border-primary/30 hover:bg-primary/15 hover:border-primary/40 transition-colors duration-300"
                        }
                      >
                        {isCore && <Star className="h-3 w-3 fill-current" />}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="marquee relative mt-14 overflow-hidden py-2"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <div className="marquee-track flex w-max gap-3">
            {[...allSkills, ...allSkills].map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                aria-hidden={index >= allSkills.length}
                className="flex items-center gap-3 shrink-0 px-5 py-2 rounded-full border border-primary/15 bg-card/50 text-sm font-medium text-muted-foreground whitespace-nowrap"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
