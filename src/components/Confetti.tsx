"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Piece = {
  id: number;
  left: number;
  color: string;
  size: number;
  rotate: number;
  duration: number;
  delay: number;
  shape: "rect" | "circle";
};

const COLORS = ["#A78BFA", "#EC4899", "#D4AF37", "#F9A8D4", "#C4B5FD", "#E8C170"];

/**
 * One-shot confetti burst that rains down from the top.
 * `fire` toggles a fresh burst; each burst self-clears after the fall.
 */
export default function Confetti({ fire }: { fire: boolean }) {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    if (!fire) return;
    const next: Piece[] = Array.from({ length: 90 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      color: COLORS[i % COLORS.length],
      size: 7 + Math.random() * 9,
      rotate: Math.random() * 360,
      duration: 2.6 + Math.random() * 2.2,
      delay: Math.random() * 0.6,
      shape: Math.random() > 0.5 ? "rect" : "circle",
    }));
    setPieces(next);
    const t = setTimeout(() => setPieces([]), 6000);
    return () => clearTimeout(t);
  }, [fire]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
    >
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          className="absolute top-[-24px]"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.shape === "rect" ? p.size * 0.5 : p.size,
            background: p.color,
            borderRadius: p.shape === "circle" ? "9999px" : "2px",
          }}
          initial={{ y: -24, opacity: 1, rotate: p.rotate }}
          animate={{
            y: "110vh",
            x: [0, (Math.random() - 0.5) * 160],
            rotate: p.rotate + 540,
            opacity: [1, 1, 0.9, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  );
}
