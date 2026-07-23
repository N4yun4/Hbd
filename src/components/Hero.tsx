"use client";

import { motion } from "framer-motion";
import { Gift, Sparkles, ChevronDown } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 text-center sm:px-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center"
      >
        <motion.span
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-lavender/30 bg-white/60 px-5 py-2 text-sm font-medium tracking-wide text-plum-soft backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-gold" />
          Kejutan kecil buat kamu
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-plum sm:text-7xl md:text-8xl"
        >
          Happy Birthday
          <span className="mt-2 block text-gold-shimmer">Heri 🎉</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-xl text-base leading-relaxed text-plum-soft sm:text-lg"
        >
          Semoga hari spesialmu dipenuhi kebahagiaan, kesuksesan, dan cerita
          seru.
        </motion.p>

        <motion.button
          variants={item}
          onClick={onOpen}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-lavender via-rose to-gold px-8 py-4 text-base font-semibold text-white shadow-soft transition-shadow hover:shadow-glow focus:outline-none focus-visible:ring-4 focus-visible:ring-lavender/50"
        >
          <Gift className="h-5 w-5 transition-transform group-hover:-rotate-12" />
          Buka Kejutanmu
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-plum-soft/70"
          aria-hidden
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
