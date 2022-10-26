const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    disableStaticImages: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      issuer: /\.tsx$/,
    })

    config.resolve.alias = {
      ...config.resolve.alias,
      ...{
        '@assets': path.resolve(__dirname, '../src/assets/'),
        '@components': path.resolve(__dirname, '../src/components/'),
        '@libs': path.resolve(__dirname, '../src/libs/'),
      },
    }

    return config
  },
}

module.exports = nextConfig
