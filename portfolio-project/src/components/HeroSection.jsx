import { useEffect, useState } from "react";
import { ArrowDown, Code2, Sparkles } from "lucide-react";

const codeLines = [
  [
    { text: "public async ", cls: "text-purple-400" },
    { text: "Task ", cls: "text-sky-300" },
    { text: "Build", cls: "text-amber-200" },
    { text: "()", cls: "text-slate-400" },
  ],
  [{ text: "{", cls: "text-slate-400" }],
  [
    { text: "    var ", cls: "text-purple-400" },
    { text: "idea", cls: "text-slate-200" },
    { text: " = ", cls: "text-slate-400" },
    { text: "await ", cls: "text-purple-400" },
    { text: "Imagine", cls: "text-amber-200" },
    { text: "();", cls: "text-slate-400" },
  ],
  [
    { text: "    var ", cls: "text-purple-400" },
    { text: "code", cls: "text-slate-200" },
    { text: " = ", cls: "text-slate-400" },
    { text: "Write", cls: "text-amber-200" },
    { text: "(", cls: "text-slate-400" },
    { text: "idea", cls: "text-slate-200" },
    { text: ");", cls: "text-slate-400" },
  ],
  [],
  [
    { text: "    while ", cls: "text-purple-400" },
    { text: "(!", cls: "text-slate-400" },
    { text: "code", cls: "text-slate-200" },
    { text: ".", cls: "text-slate-400" },
    { text: "IsClean", cls: "text-sky-300" },
    { text: ")", cls: "text-slate-400" },
  ],
  [
    { text: "        code", cls: "text-slate-200" },
    { text: " = ", cls: "text-slate-400" },
    { text: "Refactor", cls: "text-amber-200" },
    { text: "(", cls: "text-slate-400" },
    { text: "code", cls: "text-slate-200" },
    { text: ");", cls: "text-slate-400" },
  ],
  [],
  [
    { text: "    await ", cls: "text-purple-400" },
    { text: "Ship", cls: "text-amber-200" },
    { text: "(", cls: "text-slate-400" },
    { text: "code", cls: "text-slate-200" },
    { text: ");", cls: "text-slate-400" },
  ],
  [{ text: "}", cls: "text-slate-400" }],
];

const lineLengths = codeLines.map((line) =>
  line.reduce((sum, token) => sum + token.text.length, 0),
);
const totalChars = lineLengths.reduce((sum, len) => sum + len, 0);

const TYPE_SPEED_MS = 35;
const START_DELAY_MS = 900;

const CodeWindow = () => {
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    let interval;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        setTyped((prev) => {
          if (prev >= totalChars) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, TYPE_SPEED_MS);
    }, START_DELAY_MS);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, []);

  let remaining = typed;
  let cursorLine = 0;

  const renderedLines = codeLines.map((line, lineIndex) => {
    if (remaining > 0 || lineIndex === 0) cursorLine = lineIndex;

    return line.map((token, tokenIndex) => {
      if (remaining <= 0) return null;
      const visible = token.text.slice(0, remaining);
      remaining -= token.text.length;
      return (
        <span key={tokenIndex} className={token.cls}>
          {visible}
        </span>
      );
    });
  });

  const isDone = typed >= totalChars;

  return (
    <div className="relative w-full max-w-md">
      <div className="absolute -inset-6 rounded-3xl bg-primary/25 blur-3xl" />

      <div className="relative rounded-xl border border-primary/20 bg-slate-950/90 shadow-2xl backdrop-blur-sm overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
          <span className="ml-3 text-xs text-slate-400 font-mono">
            Workflow.cs
          </span>
        </div>

        <pre className="p-4 sm:p-5 text-left text-[11px] sm:text-sm font-mono leading-relaxed overflow-hidden">
          {renderedLines.map((tokens, lineIndex) => (
            <div key={lineIndex} className="flex min-h-[1.6em]">
              <span className="select-none w-6 shrink-0 text-slate-600">
                {lineIndex + 1}
              </span>
              <code className="whitespace-pre-wrap break-words min-w-0">
                {tokens}
                {lineIndex === cursorLine && (
                  <span
                    className={`inline-block w-2 h-4 align-middle bg-primary ml-0.5 ${
                      isDone ? "animate-pulse" : ""
                    }`}
                  />
                )}
              </code>
            </div>
          ))}
        </pre>
      </div>

      <div className="hidden sm:flex absolute -top-5 -left-6 items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-card/90 backdrop-blur-md shadow-lg text-sm font-medium text-primary animate-float">
        <Code2 className="h-4 w-4" />
        Clean Code
      </div>

      <div
        className="hidden sm:flex absolute -bottom-5 -right-4 items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-card/90 backdrop-blur-md shadow-lg text-sm font-medium text-primary animate-float"
        style={{ animationDelay: "-3s" }}
      >
        <Sparkles className="h-4 w-4" />
        Always Learning
      </div>
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-20"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm text-muted-foreground opacity-0 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Open to new opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              <span className="block opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="block text-primary opacity-0 animate-fade-in-delay-1">
                Shatha Ammar
              </span>
            </h1>

            <p className="text-lg md:text-xl font-medium text-foreground/90 opacity-0 animate-fade-in-delay-2">
              Full Stack Developer
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-balance opacity-0 animate-fade-in-delay-3">
              I build practical, reliable, and user-friendly web applications,
              turning ideas into real solutions. Always learning, always
              improving.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary/40 text-primary font-medium hover:bg-primary/10 transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end opacity-0 animate-fade-in-delay-2">
            <CodeWindow />
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <span className="text-sm mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
};
