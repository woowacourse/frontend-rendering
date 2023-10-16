/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdnimg.melon.co.kr',
      },
      {
        protocol: 'https',
        hostname: 'image.genie.co.kr',
      },
    ],
  },
};

module.exports = nextConfig;
