/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['e-cdns-images.dzcdn.net'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
