/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fetchCache: true,
  },
  images: {
    domains: ["i.scdn.co"],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
