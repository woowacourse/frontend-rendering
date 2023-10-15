/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.klook.com",
      "images.squarespace-cdn.com",
      "a.cdn-hotels.com",
      "www.jamonfive.com",
      "www.discoverlosangeles.com",
    ],
  },
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
