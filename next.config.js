/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Fixes image handling for static exports
  },
  trailingSlash: true, // Ensures proper paths for GitHub Pages
};

module.exports = nextConfig;
