/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'tailwindui.com',
      'avatars.githubusercontent.com',
    ],
  },
}

module.exports = nextConfig
