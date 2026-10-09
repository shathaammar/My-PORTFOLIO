import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export const MusicToggle = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      audio.volume = 0.3;
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Could not play audio:", error);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music/background.mp3" loop preload="none" />

      <button
        type="button"
        onClick={toggleMusic}
        aria-label={
          isPlaying ? "Mute background music" : "Play background music"
        }
        title={isPlaying ? "Mute music" : "Play music"}
        className="p-2 rounded-full text-primary hover:bg-primary/10 transition-colors duration-300"
      >
        {isPlaying ? (
          <Volume2 className="h-5 w-5" />
        ) : (
          <VolumeX className="h-5 w-5" />
        )}
      </button>
    </>
  );
};
