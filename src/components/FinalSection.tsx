"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

type StarBit = {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
};

export default function FinalSection() {
  const [stars, setStars] = useState<StarBit[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 10 + Math.random() * 18,
        delay: Math.random() * 3,
        duration: 3 + Math.random() * 3,
      }))
    );
  }, []);

  return (
    <section className="relative overflow-hidden px-6 py-32 sm:py-40">
      {/* Floating stars */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {stars.map((s) => (
          <motion.div
            key={s.id}
            className="absolute text-gold"
            style={{ left: `${s.left}%`, top: `${s.top}%` }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0, 1, 0.4, 1, 0],
              scale: [0.5, 1, 0.8, 1, 0.5],
              y: [0, -14, 0],
            }}
            transition={{
              duration: s.duration,
              delay: s.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Star className="fill-gold/40" style={{ width: s.size, height: s.size }} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
          Once again
        </p>
        <h2 className="mt-6 font-display text-5xl font-semibold leading-tight tracking-tight text-plum sm:text-7xl">
          Happy Birthday
          <span className="mt-2 block text-gold-shimmer">Heri 🎂</span>
        </h2>
        <p className="mt-8 font-display text-2xl italic text-plum-soft sm:text-3xl">
          Keep Shining ✨
        </p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mx-auto mt-12 h-px w-40 origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
        />
        <p className="mt-8 text-sm text-plum-soft/70">
          Dibuat dengan sepenuh hati untuk Heri 💜
        </p>
      </motion.div>
    </section>
  );
}
