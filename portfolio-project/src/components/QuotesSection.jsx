import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    role: "Co-founder of Apple",
  },
  {
    text: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    author: "Bill Gates",
    role: "Co-founder of Microsoft",
  },
  {
    text: "When something is important enough, you do it even if the odds are not in your favor.",
    author: "Elon Musk",
    role: "Founder of SpaceX, CEO of Tesla",
  },
  {
    text: "Don't be a know-it-all, be a learn-it-all.",
    author: "Satya Nadella",
    role: "CEO of Microsoft",
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    role: "Computer Scientist, Turing Award winner",
  },
  {
    text: "Simplicity is prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
    role: "Computer Scientist, Turing Award winner",
  },
];

const ROTATE_EVERY_MS = 6000;
const FADE_MS = 300;

const arrowClasses =
  "flex items-center justify-center h-8 w-8 rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary/15 hover:border-primary/50 transition-colors duration-300";

const pad = (n) => String(n).padStart(2, "0");

export const QuotesSection = () => {
  const sectionRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const goTo = (index) => {
    if (index === current || !isVisible) return;

    setIsVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setIsVisible(true);
    }, FADE_MS);
  };

  const goNext = () => goTo((current + 1) % quotes.length);
  const goPrev = () => goTo((current - 1 + quotes.length) % quotes.length);

  const isRunning = isInView && !isPaused && isVisible;
  const quote = quotes[current];

  return (
    <section ref={sectionRef} className="py-12 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div
          className="relative overflow-hidden rounded-2xl border border-primary/15 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-6 p-6 md:px-8 md:py-7">
            <div className="shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10">
              <span className="font-heading text-4xl leading-none text-primary translate-y-2">
                &ldquo;
              </span>
            </div>

            <div
              aria-live="polite"
              className={`flex-1 min-w-0 min-h-[84px] flex flex-col justify-center text-center md:text-left transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              <blockquote className="text-base md:text-lg font-medium text-foreground leading-relaxed">
                {quote.text}
              </blockquote>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="text-primary font-semibold">
                  — {quote.author}
                </span>
                <span className="mx-2 text-primary/40">·</span>
                {quote.role}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3 md:pl-6 md:border-l md:border-primary/15">
              <button
                onClick={goPrev}
                aria-label="Previous quote"
                className={arrowClasses}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <p className="text-xs font-medium tabular-nums tracking-wider min-w-[48px] text-center">
                <span className="text-primary">{pad(current + 1)}</span>
                <span className="text-muted-foreground">
                  {" "}
                  / {pad(quotes.length)}
                </span>
              </p>

              <button
                onClick={goNext}
                aria-label="Next quote"
                className={arrowClasses}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/10">
            <div
              key={current}
              className="h-full bg-primary"
              onAnimationEnd={goNext}
              style={{
                animation: `quote-progress ${ROTATE_EVERY_MS}ms linear forwards`,
                animationPlayState: isRunning ? "running" : "paused",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
