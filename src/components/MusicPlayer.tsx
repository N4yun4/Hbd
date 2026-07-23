"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music, Pause } from "lucide-react";

/**
 * Floating music toggle. Autoplay stays disabled per browser policy —
 * playback only starts on the user's click.
 */
export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  // Clean up on unmount only. The audio element is created lazily on the
  // first tap so no request (and no 404) fires just from loading the page.
  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggle = async () => {
    if (!audioRef.current) {
      // Prefix the base path so the file resolves when hosted under /Hbd/.
      const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
      const el = new Audio(`${basePath}/music/birthday.mp3`);
      el.loop = true;
      el.volume = 0.5;
      el.addEventListener("ended", () => setPlaying(false));
      audioRef.current = el;
    }
    const el = audioRef.current;
    try {
      if (playing) {
        el.pause();
        setPlaying(false);
      } else {
        await el.play();
        setPlaying(true);
      }
    } catch {
      // Playback blocked or file missing — keep the paused state gracefully.
      setPlaying(false);
    }
  };

  return (
    <motion.button
      onClick={toggle}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 200, damping: 16 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-lavender via-rose to-gold text-white shadow-glow focus:outline-none focus-visible:ring-4 focus-visible:ring-lavender/50"
      aria-label={playing ? "Jeda musik" : "Putar musik"}
      aria-pressed={playing}
    >
      {/* Pulsing ring while playing */}
      {playing && (
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-white/60"
          animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
          aria-hidden
        />
      )}
      {playing ? (
        <Pause className="h-6 w-6" />
      ) : (
        <Music className="h-6 w-6" />
      )}
    </motion.button>
  );
}
