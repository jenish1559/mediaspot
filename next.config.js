/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'picsum.photos',
          },
          {
            protocol: 'https',
            hostname: 'static.123series.nl'
          },
          {
            protocol: 'https',
            hostname: 'wallpapercave.com',
          }
        ],
      },
}

module.exports = nextConfig
