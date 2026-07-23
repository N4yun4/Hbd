"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PartyPopper, Mail } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function BirthdayCard() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative px-5 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Sebuah Pesan"
        title="Kartu Ucapan"
        subtitle="Ketuk kartunya buat buka."
      />

      <div className="mx-auto mt-12 flex max-w-lg justify-center sm:mt-14">
        <div className="perspective w-full">
          <motion.button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-pressed={open}
            aria-label={open ? "Tutup kartu ucapan" : "Buka kartu ucapan"}
            className="preserve-3d relative block h-[500px] w-full cursor-pointer rounded-3xl focus:outline-none focus-visible:ring-4 focus-visible:ring-lavender/50 sm:h-[460px]"
            animate={{ rotateY: open ? 180 : 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Front — sealed envelope face */}
            <div className="backface-hidden absolute inset-0 flex flex-col items-center justify-center gap-5 rounded-3xl bg-gradient-to-br from-lavender via-rose to-gold p-8 text-white shadow-soft">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Mail className="h-9 w-9" />
              </div>
              <p className="font-display text-3xl font-semibold">Buat Heri</p>
              <p className="max-w-[16rem] text-center text-sm text-white/85">
                Ada pesan buat kamu. Buka, yuk.
              </p>
              <span className="mt-1 rounded-full bg-white/25 px-4 py-1.5 text-xs font-medium tracking-wide">
                Ketuk untuk buka
              </span>
            </div>

            {/* Back — the letter */}
            <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col justify-center rounded-3xl glass p-7 text-left shadow-soft sm:p-10">
              <p className="font-display text-2xl font-semibold text-plum">
                Heri,
              </p>
              <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-plum-soft">
                <p>Selamat ulang tahun, bro! 🎉</p>
                <p>
                  Semoga tahun ini bawa banyak hal baik — sehat selalu, rezeki
                  lancar, dan urusan makin dimudahin.
                </p>
                <p>
                  Tetap jadi orang yang keren dan jangan berhenti ngejar
                  mimpimu.
                </p>
                <p className="font-medium text-plum">Sukses terus, ya! 🎂</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-gold">
                <PartyPopper className="h-4 w-4" />
                <span className="text-sm font-medium">Salam hangat, sahabatmu</span>
              </div>
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
