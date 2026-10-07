import { Briefcase, Code, User } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack .NET Developer
            </h3>
            <p className="text-muted-foreground">
              Based in Amman, Jordan, with over 2 years of hands-on experience
              in .NET and Angular, working across both backend and frontend
              development. I’ve built RESTful APIs, worked with databases and
              authentication, and developed responsive web applications through
              professional experience and real-world projects. I’m continuously
              improving my skills and expanding my technical knowledge through
              new challenges and projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
              <a
                href="/Shatha_Ammar_Full_Stack_Developer_CV_Updated.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border border border-primary/15 shadow-sm hover:border-primary/40 transition-colors duration-300 p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Building secure RESTful APIs with ASP.NET Core, Entity
                    Framework, and SQL databases.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border border border-border shadow-sm p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Frontend Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building responsive, user-friendly interfaces with Angular
                    and TypeScript.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border border border-border shadow-sm p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Real-World Projects</h4>
                  <p className="text-muted-foreground">
                    Delivering production systems, from document processing
                    pipelines to IoT vehicle tracking platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
