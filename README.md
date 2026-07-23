# 🎂 Happy Birthday Heri

Website ucapan ulang tahun interaktif — sebuah "hadiah digital" dengan tema
_Elegant Birthday Memory_ (soft purple → pink → gold).

**Isi halaman:** hero penuh confetti, kartu ucapan yang bisa dibuka (flip),
empat kartu harapan beranimasi, pemutar musik mengambang, dan penutup
"Sukses Terus" di bawah taburan bintang.

## ✨ Fitur

| Bagian | Isinya |
| --- | --- |
| **Hero** | Judul muncul beranimasi, confetti saat halaman dibuka, tombol "Buka Kejutanmu" yang memicu confetti baru + scroll halus ke bawah |
| **Kartu Ucapan** | Amplop tersegel yang membuka (flip 3D `rotateY`) menampilkan pesan, dengan efek hover |
| **Empat Harapan** | Kartu glassmorphism — Sukses, Sehat, Bahagia, Mimpi — dengan ikon gradient dan interaksi hover |
| **Music Player** | Tombol play/pause mengambang. Autoplay dinonaktifkan (kebijakan browser); audio dimuat saat pertama diketuk |
| **Penutup** | Fade-in dengan taburan bintang yang mengambang |
| **Ambient** | Partikel mengambang + background gradient aurora |

Dibangun dengan memperhatikan aksesibilitas (focus ring, `aria` label,
dukungan `prefers-reduced-motion`), responsif (mobile → desktop), metadata SEO,
dan smooth scrolling.

## 🛠️ Teknologi

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — animasi
- **Lucide React** — ikon
- **Google Fonts** — Fraunces (display) + Plus Jakarta Sans (body)

## 🚀 Menjalankan di Lokal

```bash
npm install       # pasang dependency
npm run dev       # dev server → http://localhost:3000
npm run build     # build statis → folder out/
npm run lint      # ESLint
```

## 🌐 Hosting di GitHub Pages

Project sudah diatur untuk **static export** (`output: "export"`) dan punya
workflow GitHub Actions yang otomatis build + deploy.

**Cukup sekali setup:**

1. Push ke branch `main` (workflow ikut ter-push).
2. Buka repo di GitHub → **Settings → Pages**.
3. Bagian **Build and deployment → Source**, pilih **GitHub Actions**.
4. Selesai. Tiap push ke `main`, situs otomatis ter-deploy ke:

   **https://n4yun4.github.io/Hbd/**

> Base path `/Hbd` di-set otomatis oleh workflow lewat `NEXT_PUBLIC_BASE_PATH`,
> jadi semua aset (termasuk musik) tetap ketemu saat di-host di sub-path.

## 📁 Struktur Project

```
src/
├── app/
│   ├── page.tsx          # menyusun semua bagian
│   ├── layout.tsx        # font + metadata
│   ├── globals.css       # tema, glass, shimmer, helper flip
│   └── icon.svg          # favicon (kue ulang tahun)
└── components/
    ├── Hero.tsx
    ├── BirthdayCard.tsx
    ├── Wishes.tsx
    ├── MusicPlayer.tsx
    ├── FinalSection.tsx
    ├── SectionHeading.tsx
    ├── Particles.tsx
    └── Confetti.tsx
public/
├── music/                # taruh birthday.mp3 di sini untuk mengaktifkan musik
└── .nojekyll             # agar folder _next disajikan apa adanya di Pages
.github/workflows/
└── deploy.yml            # build + deploy otomatis ke GitHub Pages
```

## 🎨 Kustomisasi

- **Musik:** tambahkan `public/music/birthday.mp3` (lihat `public/music/README.md`).
- **Teks:** ubah langsung di tiap komponen pada `src/components/`.

---

Dibuat spesial buat Heri 🎉
