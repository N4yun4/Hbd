/** @type {import('next').NextConfig} */

// When deploying to GitHub Pages (a project site served from /<repo>/),
// the CI workflow sets NEXT_PUBLIC_BASE_PATH="/Hbd". Locally it's empty,
// so `next dev` and local previews work at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  // Emit a fully static site into `out/` so it can be hosted on GitHub Pages.
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    // Required for `output: export`; also keeps image assets drop-in.
    unoptimized: true,
  },
};

export default nextConfig;
