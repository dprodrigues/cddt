/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'tailwindui.com',
      'avatars.githubusercontent.com',
    ],
  },
}

module.exports = nextConfig
