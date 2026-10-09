import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const quotes = [
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    role: "Author of Refactoring",
  },
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
    role: "MIT Professor, co-author of SICP",
  },
  {
    text: "Simplicity is prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
    role: "Computer Scientist, Turing Award winner",
  },
  {
    text: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
    role: "Creator of Linux and Git",
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    role: "Computer Scientist, Turing Award winner",
  },
];

const ROTATE_EVERY_MS = 6000;
const FADE_MS = 300;

const arrowClasses =
  "flex items-center justify-center h-9 w-9 rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary/15 hover:border-primary/40 transition-colors duration-300";

// 1 -> "01", 5 -> "05"
const pad = (n) => String(n).padStart(2, "0");

export const QuotesSection = () => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = (index) => {
    // Ignore clicks while a fade is already in progress
    if (index === current || !isVisible) return;

    setIsVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setIsVisible(true);
    }, FADE_MS);
  };

  const goNext = () => goTo((current + 1) % quotes.length);
  const goPrev = () => goTo((current - 1 + quotes.length) % quotes.length);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(goNext, ROTATE_EVERY_MS);
    return () => clearInterval(timer);
  }, [current, isPaused, isVisible]);

  const quote = quotes[current];

  return (
    <section className="py-16 px-4 relative">
      <div className="container mx-auto max-w-3xl">
        <div
          className="gradient-border border border-primary/15 hover:border-primary/40 transition-colors duration-300 rounded-lg p-8 md:p-10 text-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
              <Quote className="h-5 w-5 text-primary" />
            </div>
          </div>

          <div
            aria-live="polite"
            className={`min-h-[140px] flex flex-col justify-center transition-opacity duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <blockquote className="text-lg md:text-xl font-medium italic text-foreground leading-relaxed mb-6">
              "{quote.text}"
            </blockquote>

            <div>
              <p className="font-semibold text-primary">{quote.author}</p>
              <p className="text-sm text-muted-foreground">{quote.role}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5 mt-8">
            <button
              onClick={goPrev}
              aria-label="Previous quote"
              className={arrowClasses}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <p className="text-sm font-medium tabular-nums tracking-wider min-w-[60px]">
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
      </div>
    </section>
  );
};
