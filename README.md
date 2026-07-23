# 🎂 Happy Birthday Heri

An interactive, elegant birthday surprise website — a digital gift built with a
warm, premium "Elegant Birthday Memory" theme (soft purple → pink → gold).

**Live sections:** a confetti-filled hero, a flip-open birthday card, a memory
gallery with a lightbox, four animated birthday wishes, a floating music player,
and a closing "Keep Shining" finale under a sky of floating stars.

## ✨ Features

| Section | What it does |
| --- | --- |
| **Hero** | Animated headline reveal, one-shot confetti on load, "Open Your Surprise" button that fires fresh confetti and smooth-scrolls down |
| **Birthday Card** | A sealed envelope that flips open (3D `rotateY`) to reveal the letter, with hover lift |
| **Memory Gallery** | Responsive grid, hover zoom, click-to-open modal with keyboard nav (← → Esc) |
| **Birthday Wishes** | Four glassmorphism cards — Success, Health, Happiness, Dreams — with gradient icon tiles and hover interaction |
| **Music Player** | Floating play/pause button. Autoplay is disabled (browser policy); audio loads lazily on first tap |
| **Final Section** | Fade-in finale with ambient floating stars |
| **Ambient** | Page-wide floating particles + aurora gradient background |

Built for accessibility (keyboard focus rings, `aria` labels, reduced-motion
support), responsiveness (mobile → desktop), SEO metadata, and smooth scrolling.

## 🛠️ Tech Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — animations
- **Lucide React** — icons
- **Google Fonts** — Fraunces (display) + Plus Jakarta Sans (body)

## 🚀 Getting Started

```bash
npm install       # install dependencies
npm run dev       # start dev server → http://localhost:3000
npm run build     # production build
npm run start     # serve the production build
npm run lint      # run ESLint
```

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # composes all sections
│   ├── layout.tsx        # fonts + metadata
│   ├── globals.css       # theme, glass, shimmer, flip helpers
│   └── icon.svg          # favicon (birthday cake)
└── components/
    ├── Hero.tsx
    ├── BirthdayCard.tsx
    ├── Gallery.tsx
    ├── Wishes.tsx
    ├── MusicPlayer.tsx
    ├── FinalSection.tsx
    ├── SectionHeading.tsx
    ├── Particles.tsx
    └── Confetti.tsx
public/
├── images/               # memory-1..6 gradient placeholders (swap for photos)
└── music/                # drop birthday.mp3 here to enable music
```

## 🎨 Personalize It

- **Photos:** replace `public/images/memory-1.svg … memory-6.svg` with your own
  images (see `public/images/README.md`).
- **Music:** add `public/music/birthday.mp3` (see `public/music/README.md`).
- **Words:** edit the copy directly in each component under `src/components/`.

---

Made with 💜 for Heri.
