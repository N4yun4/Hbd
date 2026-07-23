"use client";

import { motion } from "framer-motion";
import { Trophy, HeartPulse, Smile, Sparkles, type LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";

type Wish = {
  icon: LucideIcon;
  title: string;
  text: string;
  from: string;
  to: string;
};

const WISHES: Wish[] = [
  {
    icon: Trophy,
    title: "Success",
    text: "Semoga setiap langkahmu membawa pencapaian yang membanggakan.",
    from: "#A78BFA",
    to: "#7C5CE0",
  },
  {
    icon: HeartPulse,
    title: "Health",
    text: "Semoga selalu sehat, kuat, dan penuh energi setiap hari.",
    from: "#F9A8D4",
    to: "#EC4899",
  },
  {
    icon: Smile,
    title: "Happiness",
    text: "Semoga tawa dan kebahagiaan selalu menemani hari-harimu.",
    from: "#E8C170",
    to: "#D4AF37",
  },
  {
    icon: Sparkles,
    title: "Dreams",
    text: "Semoga semua mimpimu perlahan menjadi kenyataan.",
    from: "#C4B5FD",
    to: "#A78BFA",
  },
];

export default function Wishes() {
  return (
    <section className="relative px-6 py-24 sm:py-28">
      <SectionHeading
        eyebrow="Made a wish?"
        title="Birthday Wishes"
        subtitle="Empat harapan tulus untuk tahunmu yang baru."
      />

      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {WISHES.map((wish, i) => {
          const Icon = wish.icon;
          return (
            <motion.div
              key={wish.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl glass p-7 text-center shadow-soft"
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-25 blur-2xl transition-opacity group-hover:opacity-50"
                style={{
                  background: `linear-gradient(135deg, ${wish.from}, ${wish.to})`,
                }}
              />
              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                style={{
                  background: `linear-gradient(135deg, ${wish.from}, ${wish.to})`,
                }}
              >
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-plum">
                {wish.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-plum-soft">
                {wish.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
