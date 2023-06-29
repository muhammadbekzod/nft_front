/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'ipfs.io',
      'c4.wallpaperflare.com',
      'lh3.googleusercontent.com',
      'storage.opensea.io',
      'storage.googleapis.com'
    ]
  }
}

module.exports = nextConfig
