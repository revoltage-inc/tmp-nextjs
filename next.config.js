const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
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
        '@css': path.resolve(__dirname, 'src/assets/css/'),
        '@svg': path.resolve(__dirname, 'src/assets/svg/'),
      },
    }

    return config
  },
}
