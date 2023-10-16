/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    domains: [
      'res.klook.com',
      'images.squarespace-cdn.com',
      'a.cdn-hotels.com',
      'www.jamonfive.com',
      'www.discoverlosangeles.com',
    ],
  },
};

module.exports = nextConfig;
