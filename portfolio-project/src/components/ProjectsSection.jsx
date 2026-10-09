import { ArrowRight, ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

// Shared tag style — replace with the exact classes used in Skills
const tagClasses =
  "px-3 py-1 text-xs font-medium rounded-full border border-primary/20 bg-primary/10 text-primary";

const projects = [
  {
    id: 1,
    title: "FleetNova - Fleet Management System",
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
    description:
      "A web application for managing blood donations and blood requests, with role-based access control and administrative workflows. Users can manage donation records, submit blood requests, and handle administrative operations through a structured and secure system.",
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
    description:
      "A vehicle lookup application that integrates with the NHTSA vPIC API to retrieve vehicle information. Built with ASP.NET Core and Angular, containerized with Docker, and deployed to an AWS EC2 instance.",
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
    description:
      "An Angular task management application refactored with AI-assisted tooling, focused on improving code organization, maintainability, and separation of concerns while preserving existing functionality.",
    image: "/projects/proj4.png",
    tags: ["Angular 18", "TypeScript", "LocalStorage", "Clean Code"],
    demoUrl: null,
    githubUrl: "https://github.com/shathaammar/TaskManagementApp",
  },
];

export const ProjectsSection = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col h-full bg-card rounded-lg overflow-hidden border border-border shadow-xs card-hover"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="block w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className={tagClasses}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2 text-left">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-6 text-left">
                  {project.description}
                </p>

                <div className="flex items-center justify-end gap-3 mt-auto">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo of ${project.title}`}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <GithubIcon size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button inline-flex items-center gap-2"
            href="https://github.com/shathaammar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
