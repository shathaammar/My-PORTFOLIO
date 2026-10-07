const skillCategories = [
  {
    title: "Frontend",
    description: "Building responsive, user-friendly interfaces.",
    skills: ["Angular", "TypeScript", "JavaScript", "HTML/CSS", "React"],
  },
  {
    title: "Backend",
    description: "Designing secure APIs and business logic.",
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

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="gradient-border border border-primary/15 shadow-sm hover:border-primary/40 transition-colors duration-300 p-6 card-hover flex flex-col text-left"
            >
              <h3 className="font-semibold text-xl mb-2">{category.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-medium text-foreground bg-primary/5 border border-primary/20 hover:bg-primary/15 hover:border-primary/40 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
