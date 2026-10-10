import { ArrowRight, ExternalLink, Star } from "lucide-react";

const GithubIcon = ({ className = "h-4 w-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const projects = [
  {
    id: 1,
    title: "FleetNova - Fleet Management System",
    category: "Full Stack",
    description:
      "A full-stack fleet management system for managing vehicles, maintenance records, and user access. Built with ASP.NET Core Web API, SQL Server, and React, featuring JWT authentication, role-based authorization, and a Clean Architecture backend.",
    image: "/projects/proj1.png",
    tags: [
      "React",
      "ASP.NET Core Web API",
      ".NET 10",
      "SQL Server",
      "Entity Framework Core",
      "Clean Architecture",
      "JWT",
    ],
    demoUrl: null,
    githubUrl: "https://github.com/shathaammar/FleetMaintenance",
  },
  {
    id: 2,
    title: "Blood Donation Management System",
    category: "Web Application",
    description:
      "A web application for managing blood donations and blood requests, with role-based access control and administrative workflows for donation records and requests.",
    image: "/projects/proj2.png",
    tags: [
      "ASP.NET Core MVC",
      "SQL Server",
      "Entity Framework Core",
      "Role-Based Authorization",
      "Service Layer",
      "JWT",
    ],
    demoUrl: null,
    githubUrl: "https://github.com/shathaammar/Blood_Donations_Project",
  },
  {
    id: 3,
    title: "Vehicle Explorer",
    category: "API Integration",
    description:
      "A vehicle lookup app integrating the NHTSA vPIC API. Built with ASP.NET Core and Angular, containerized with Docker, and deployed to AWS EC2.",
    image: "/projects/proj3.png",
    tags: [
      "ASP.NET Core",
      "Angular 18",
      "TypeScript",
      "REST API",
      "NHTSA vPIC API",
      "Docker",
      "AWS EC2",
    ],
    demoUrl: "http://16.170.222.124:4200/",
    githubUrl: "https://github.com/shathaammar/VehicleExplorer",
  },
  {
    id: 4,
    title: "Task Management Application",
    category: "Frontend",
    description:
      "An Angular task manager refactored with AI-assisted tooling, focused on code organization, maintainability, and separation of concerns.",
    image: "/projects/proj4.png",
    tags: ["Angular 18", "TypeScript", "LocalStorage", "Clean Code"],
    demoUrl: null,
    githubUrl: "https://github.com/shathaammar/TaskManagementApp",
  },
];

const MAX_TAGS = 4;

const tagClasses =
  "px-2.5 py-1 rounded-full text-xs font-medium text-foreground bg-primary/5 border border-primary/30";

const pad = (n) => String(n).padStart(2, "0");

const BrowserFrame = ({ project }) => (
  <div className="overflow-hidden rounded-xl border border-primary/15 bg-slate-950/80">
    <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 bg-white/5">
      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
      <span className="ml-2 flex-1 min-w-0 truncate rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-mono text-slate-400 text-left">
        {project.githubUrl.replace("https://", "")}
      </span>
    </div>
    <div className="overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="block w-full h-auto transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  </div>
);

const ProjectLinks = ({ project }) => (
  <div className="flex flex-wrap items-center gap-3">
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary hover:bg-primary/15 hover:border-primary/50 transition-colors duration-300"
    >
      <GithubIcon />
      Code
    </a>
    {project.demoUrl && (
      <a
        href={project.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="cosmic-button inline-flex items-center gap-2 text-sm"
      >
        <ExternalLink className="h-4 w-4" />
        Live Demo
      </a>
    )}
  </div>
);

const ProjectTags = ({ tags }) => {
  const visible = tags.slice(0, MAX_TAGS);
  const hiddenCount = tags.length - visible.length;

  return (
    <div className="flex flex-wrap gap-2">
      {visible.map((tag) => (
        <span key={tag} className={tagClasses}>
          {tag}
        </span>
      ))}
      {hiddenCount > 0 && (
        <span
          title={tags.slice(MAX_TAGS).join(", ")}
          className="px-2.5 py-1 rounded-full text-xs font-medium text-primary bg-primary/10 border border-primary/30"
        >
          +{hiddenCount}
        </span>
      )}
    </div>
  );
};

const FeaturedProject = ({ project }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-card/70 backdrop-blur-sm p-5 md:p-8 text-left hover:border-primary/40 hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-3">
    <span className="pointer-events-none select-none absolute top-4 right-6 font-heading text-6xl md:text-7xl font-bold text-primary/10">
      {pad(project.id)}
    </span>

    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <BrowserFrame project={project} />

      <div className="space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
            <Star className="h-3 w-3 fill-current" />
            Featured
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold leading-tight">
          {project.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className={tagClasses}>
              {tag}
            </span>
          ))}
        </div>

        <ProjectLinks project={project} />
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project }) => (
  <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-primary/15 bg-card/70 backdrop-blur-sm p-5 text-left hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
    <BrowserFrame project={project} />

    <div className="relative flex flex-col flex-1 pt-5">
      <span className="pointer-events-none select-none absolute top-3 right-0 font-heading text-5xl font-bold text-primary/10">
        {pad(project.id)}
      </span>

      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">
        {project.category}
      </p>

      <h3 className="text-lg font-semibold leading-snug mb-2 pr-14">
        {project.title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
        {project.description}
      </p>

      <div className="mb-5">
        <ProjectTags tags={project.tags} />
      </div>

      <div className="mt-auto">
        <ProjectLinks project={project} />
      </div>
    </div>
  </div>
);

export const ProjectsSection = () => {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one was built with attention
          to detail, clean architecture, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeaturedProject project={featured} />
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            className="cosmic-button inline-flex items-center gap-2"
            href="https://github.com/shathaammar"
            target="_blank"
            rel="noopener noreferrer"
          >
            More on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
