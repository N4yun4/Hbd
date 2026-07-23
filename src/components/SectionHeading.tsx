"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

/** Shared section header with a scroll-reveal and a gold eyebrow label. */
export default function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-2xl text-center"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-plum-soft">{subtitle}</p>
      )}
    </motion.div>
  );
}
