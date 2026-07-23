import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Happy Birthday Heri 🎂",
  description: "A special birthday surprise website for Heri",
  keywords: ["birthday", "Heri", "surprise", "ucapan ulang tahun"],
  authors: [{ name: "For Heri, with love" }],
  openGraph: {
    title: "Happy Birthday Heri 🎂",
    description: "A special birthday surprise website for Heri",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fcfaff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased aurora-bg">{children}</body>
    </html>
  );
}
