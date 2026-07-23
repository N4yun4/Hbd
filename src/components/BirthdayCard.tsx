"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Mail } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function BirthdayCard() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative px-6 py-24 sm:py-28">
      <SectionHeading
        eyebrow="A note for you"
        title="Kartu Ucapan"
        subtitle="Ketuk kartunya untuk membukanya."
      />

      <div className="mx-auto mt-14 flex max-w-lg justify-center">
        <div className="perspective w-full">
          <motion.button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-pressed={open}
            aria-label={open ? "Tutup kartu ucapan" : "Buka kartu ucapan"}
            className="preserve-3d relative block h-[440px] w-full cursor-pointer rounded-3xl focus:outline-none focus-visible:ring-4 focus-visible:ring-lavender/50"
            animate={{ rotateY: open ? 180 : 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Front — sealed envelope face */}
            <div className="backface-hidden absolute inset-0 flex flex-col items-center justify-center gap-6 rounded-3xl bg-gradient-to-br from-lavender via-rose to-gold p-8 text-white shadow-soft">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Mail className="h-9 w-9" />
              </div>
              <p className="font-display text-3xl font-semibold">For Heri</p>
              <p className="max-w-[16rem] text-center text-sm text-white/85">
                Sebuah pesan kecil yang ditulis dengan sepenuh hati.
              </p>
              <span className="mt-2 rounded-full bg-white/25 px-4 py-1.5 text-xs font-medium tracking-wide">
                Tap to open
              </span>
            </div>

            {/* Back — the letter */}
            <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col justify-center rounded-3xl glass p-8 text-left shadow-soft sm:p-10">
              <p className="font-display text-2xl font-semibold text-plum">
                Dear Heri,
              </p>
              <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-plum-soft">
                <p>Selamat ulang tahun!</p>
                <p>
                  Semoga perjalanan hidupmu selalu diberikan kesehatan,
                  kebahagiaan, dan keberhasilan.
                </p>
                <p>
                  Tetap menjadi pribadi yang keren dan jangan berhenti mengejar
                  impianmu.
                </p>
                <p className="font-medium text-plum">
                  Have a wonderful birthday 🎂
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-rose">
                <Heart className="h-4 w-4 fill-rose" />
                <span className="text-sm font-medium">With love</span>
              </div>
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
