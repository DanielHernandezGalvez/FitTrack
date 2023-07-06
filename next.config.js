/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  images: {
    domains: ["image.tmdb.org" /* other domains */],
  },
  pageExtensions: ["tsx", "ts"],
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/src/app/pages/index",
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias["@pages"] = path.join(__dirname, "src/app/pages"); // page route
    return config;
  },
};

module.exports = nextConfig;
