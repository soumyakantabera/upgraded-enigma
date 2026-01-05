/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/upgraded-enigma' : '',
  assetPrefix: isProd ? '/upgraded-enigma/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
