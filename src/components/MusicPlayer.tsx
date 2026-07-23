"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music, Pause } from "lucide-react";

/**
 * Floating music player. Tries to start the track as soon as the page opens.
 * Browsers block audio-with-sound until the visitor interacts, so if the
 * initial play is refused we start it on the first interaction anywhere
 * (click / key / touch / scroll). The button still lets them pause/resume.
 */
export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    const el = new Audio(`${basePath}/music/birthday.mp3`);
    el.loop = true;
    el.volume = 0.5;
    el.preload = "auto";
    el.addEventListener("play", () => setPlaying(true));
    el.addEventListener("pause", () => setPlaying(false));
    audioRef.current = el;

    // Attempt to autoplay immediately.
    const tryPlay = () => el.play().then(() => true).catch(() => false);

    // Fallback: start on the first user interaction if autoplay was blocked.
    const events = ["pointerdown", "keydown", "touchstart", "scroll"] as const;
    const startOnInteract = async () => {
      const ok = await tryPlay();
      if (ok) removeListeners();
    };
    const removeListeners = () => {
      events.forEach((e) =>
        window.removeEventListener(e, startOnInteract)
      );
    };

    tryPlay().then((ok) => {
      if (!ok) {
        events.forEach((e) =>
          window.addEventListener(e, startOnInteract, { passive: true })
        );
      }
    });

    return () => {
      removeListeners();
      el.pause();
    };
  }, []);

  const toggle = async () => {
    const el = audioRef.current;
    if (!el) return;
    try {
      if (el.paused) {
        await el.play();
      } else {
        el.pause();
      }
    } catch {
      // Playback blocked or file missing — the play/pause events keep state in sync.
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
