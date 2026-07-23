"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import BirthdayCard from "@/components/BirthdayCard";
import Wishes from "@/components/Wishes";
import FinalSection from "@/components/FinalSection";
import MusicPlayer from "@/components/MusicPlayer";
import Particles from "@/components/Particles";
import Confetti from "@/components/Confetti";

export default function Home() {
  const [fireConfetti, setFireConfetti] = useState(false);
  const surpriseRef = useRef<HTMLDivElement | null>(null);

  // Celebrate as soon as the page opens.
  useEffect(() => {
    const t = setTimeout(() => setFireConfetti(true), 600);
    return () => clearTimeout(t);
  }, []);

  const handleOpen = () => {
    // Fresh confetti burst + smooth scroll to the surprise.
    setFireConfetti(false);
    requestAnimationFrame(() => setFireConfetti(true));
    surpriseRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative">
      <Particles />
      <Confetti fire={fireConfetti} />
      <MusicPlayer />

      <div className="relative z-10">
        <Hero onOpen={handleOpen} />

        <div ref={surpriseRef}>
          <BirthdayCard />
        </div>

        <Wishes />
        <FinalSection />
      </div>
    </main>
  );
}
