"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import SectionHeading from "./SectionHeading";

// Swap these files in /public/images to use real photos.
const PHOTOS = [
  { src: "/images/memory-1.svg", caption: "Golden hours" },
  { src: "/images/memory-2.svg", caption: "Best laughs" },
  { src: "/images/memory-3.svg", caption: "Adventures" },
  { src: "/images/memory-4.svg", caption: "Old friends" },
  { src: "/images/memory-5.svg", caption: "Quiet moments" },
  { src: "/images/memory-6.svg", caption: "The journey" },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % PHOTOS.length)),
    []
  );
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? i : (i - 1 + PHOTOS.length) % PHOTOS.length
      ),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <section className="relative px-6 py-24 sm:py-28">
      <SectionHeading
        eyebrow="Memory lane"
        title="Galeri Kenangan"
        subtitle="Beberapa momen yang tak akan terlupakan. Klik untuk memperbesar."
      />

      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
        {PHOTOS.map((photo, i) => (
          <motion.button
            key={photo.src}
            type="button"
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
            className="group relative aspect-square overflow-hidden rounded-2xl shadow-soft focus:outline-none focus-visible:ring-4 focus-visible:ring-lavender/50"
            aria-label={`Buka foto: ${photo.caption}`}
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center gap-2 p-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <Camera className="h-4 w-4" />
              <span className="text-sm font-medium">{photo.caption}</span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-plum/70 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`Foto ${active + 1} dari ${PHOTOS.length}`}
          >
            <button
              onClick={close}
              className="absolute right-5 top-5 rounded-full bg-white/15 p-2.5 text-white transition-colors hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Tutup"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 rounded-full bg-white/15 p-2.5 text-white transition-colors hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-8"
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <motion.div
              key={active}
              className="relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[70vh] max-h-[560px] w-[85vw] max-w-[560px] overflow-hidden rounded-3xl shadow-glow">
                <Image
                  src={PHOTOS[active].src}
                  alt={PHOTOS[active].caption}
                  fill
                  sizes="90vw"
                  className="object-cover"
                  priority
                />
              </div>
              <p className="mt-4 text-center font-display text-xl text-white">
                {PHOTOS[active].caption}
              </p>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 rounded-full bg-white/15 p-2.5 text-white transition-colors hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-8"
              aria-label="Foto berikutnya"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
