import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowUpRight,
  CircleCheck,
  CircleX,
  LoaderCircle,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const Github = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shathaammar407@gmail.com",
    href: "mailto:shathaammar407@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+962 7 7634 3570",
    href: "tel:+962776343570",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Amman, Jordan",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shatha-ammar/",
  },
  { icon: Github, label: "GitHub", href: "https://github.com/shathaammar" },
];

const inputClasses =
  "w-full pl-11 pr-4 py-3 rounded-xl border border-primary/20 bg-background/60 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors disabled:opacity-60";

const rowClasses =
  "group flex items-center gap-4 rounded-xl border border-primary/15 bg-background/40 p-3 pr-4 hover:border-primary/40 transition-colors duration-300";

const iconBoxClasses =
  "shrink-0 flex items-center justify-center h-11 w-11 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactRow = ({ icon: Icon, label, value, href }) => {
  const content = (
    <>
      <div className={iconBoxClasses}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-medium text-foreground truncate">{value}</p>
      </div>
      {href && (
        <ArrowUpRight className="h-4 w-4 shrink-0 text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      )}
    </>
  );

  return href ? (
    <a href={href} className={rowClasses}>
      {content}
    </a>
  ) : (
    <div className={rowClasses}>{content}</div>
  );
};

export const ContactSection = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const isSending = status === "sending";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have an idea in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 overflow-hidden rounded-3xl border border-primary/15 bg-card/70 backdrop-blur-sm shadow-lg">
          <div className="relative lg:col-span-2 overflow-hidden p-8 md:p-10 bg-primary/10 border-b lg:border-b-0 lg:border-r border-primary/15 text-left">
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />

            <div className="relative space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                  Let's talk
                </p>
                <h3 className="text-2xl md:text-3xl font-bold leading-snug">
                  Have a project or a role in mind?
                </h3>
              </div>

              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <ContactRow key={item.label} {...item} />
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-background/40 text-primary font-medium text-sm hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 p-8 md:p-10 text-left">
            <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>
            <p className="text-sm text-muted-foreground mb-8">
              Fill out the form and your message will land straight in my inbox.
            </p>

            <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={isSending}
                      placeholder="Your name"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={isSending}
                      placeholder="you@example.com"
                      className={inputClasses}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <div className="relative">
                  <MessageSquare className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-muted-foreground" />
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    disabled={isSending}
                    placeholder="Hello, I'd like to talk about..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="cosmic-button w-full inline-flex items-center justify-center gap-2 py-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    Sending...
                    <LoaderCircle size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-green-500/10 text-green-600 dark:text-green-400 text-sm">
                  <CircleCheck size={18} className="shrink-0" />
                  Thank you! Your message has been sent. I'll get back to you
                  soon.
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 text-sm">
                  <CircleX size={18} className="shrink-0" />
                  Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
