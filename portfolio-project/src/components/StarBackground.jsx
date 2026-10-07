import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000,
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      const star = {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.5,
        twinkleDuration: Math.random() * 4 + 2,
        driftDuration: Math.random() * 20 + 15,
        driftX: (Math.random() - 0.5) * 60,
        driftY: (Math.random() - 0.5) * 60,
        delay: -Math.random() * 10,
      };
      newStars.push(star);
    }

    setStars(newStars);
  };

  useEffect(() => {
    generateStars();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            "--star-opacity": star.opacity,
            "--twinkle-duration": star.twinkleDuration + "s",
            "--drift-duration": star.driftDuration + "s",
            "--drift-x": star.driftX + "px",
            "--drift-y": star.driftY + "px",
            "--star-delay": star.delay + "s",
          }}
        />
      ))}
    </div>
  );
};
