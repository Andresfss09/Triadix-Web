import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { motion } from "framer-motion";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create the audio element on mount
    audioRef.current = new Audio("/cancion.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4; // Slightly lower volume for background music

    return () => {
      // Clean up on unmount
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Browser might block this if user hasn't interacted with document,
      // but since it's triggered by an explicit click event, it will work perfectly.
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.error("Autoplay prevented:", err);
      });
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={togglePlay}
      className={`fixed bottom-6 left-6 z-50 flex items-center justify-center gap-2 px-4 py-3 shadow-geist-card backdrop-blur-xl transition-all duration-300 rounded-none ${
        isPlaying ? "bg-white text-black" : "bg-black/80 text-white border border-white/20 hover:bg-white/10"
      }`}
      aria-label="Toggle background music"
    >
      {isPlaying ? (
        <>
          <div className="flex gap-1 items-end h-4">
            <motion.div animate={{ height: ["4px", "12px", "4px"] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-black" />
            <motion.div animate={{ height: ["8px", "16px", "8px"] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} className="w-1 bg-black" />
            <motion.div animate={{ height: ["6px", "10px", "6px"] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }} className="w-1 bg-black" />
          </div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest ml-2">Sonando</span>
        </>
      ) : (
        <>
          <Music className="w-4 h-4" />
          <span className="text-xs font-mono uppercase tracking-widest">Música</span>
        </>
      )}
    </motion.button>
  );
}
