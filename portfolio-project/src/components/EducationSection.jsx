import { Award, Calendar, ExternalLink, GraduationCap } from "lucide-react";

const items = [
  {
    type: "Education",
    icon: GraduationCap,
    title: "Bachelor's in Computer Engineering",
    issuer: "The Hashemite University",
    date: "Graduated Jan 2023",
    description:
      "Built a strong foundation in software development, computer systems, and networking.",
    url: null,
    linkLabel: null,
  },
  {
    type: "Certification",
    icon: Award,
    title: "CCNA",
    issuer: "Cisco",
    date: "Valid Oct 2022 – Oct 2025",
    description:
      "Cisco Certified Network Associate, covering networking fundamentals, IP connectivity, and network security.",
    url: "https://cp.certmetrics.com/cisco/en/public/verify/credential/b2fb59b5715e4e44b195e0d7486c6c5c",
    linkLabel: "Verify credential",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Education & <span className="text-primary">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map(
            ({
              type,
              icon: Icon,
              title,
              issuer,
              date,
              description,
              url,
              linkLabel,
            }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-card/70 backdrop-blur-sm p-6 md:p-7 text-left hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <Icon className="absolute -right-6 -bottom-6 h-32 w-32 text-primary/5 group-hover:text-primary/10 group-hover:scale-110 transition-all duration-500" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary pt-1">
                      {type}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{title}</h3>
                  <p className="text-primary font-medium mb-3">{issuer}</p>

                  {date && (
                    <p className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4 shrink-0" />
                      {date}
                    </p>
                  )}

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>

                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-primary hover:underline"
                    >
                      {linkLabel} <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};