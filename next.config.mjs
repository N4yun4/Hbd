/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Placeholders are local SVGs; unoptimized keeps them drop-in
    // replaceable (swap any file in /public/images) with no build step.
    unoptimized: true,
  },
};

export default nextConfig;
