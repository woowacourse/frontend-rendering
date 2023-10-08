/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_IMAGE_HOSTNAME,
        pathname: `${process.env.NEXT_PUBLIC_IMAGE_PATHNAME}/*`,
      },
    ],
  },
};

module.exports = nextConfig;
