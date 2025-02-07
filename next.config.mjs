/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"]
  },
  output: "export", // Enables full static export
  assetPrefix: "/personal-portfolio/", // Correct repo name
  basePath: "/personal-portfolio", // Ensures correct internal routing
  trailingSlash: true, // Helps with GitHub Pages routing
  images: {
    unoptimized: true // GitHub Pages does not support Next.js Image Optimization
  }
};

export default nextConfig;
