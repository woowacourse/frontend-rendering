/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },

  env: {
    HOST:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:7942'
        : 'https://server-frontend-rendering-1d9d4e7d2546.herokuapp.com',
    DICT_COUNT: 5,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.pium.life',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/*',
      },
    ],
  },
};

module.exports = nextConfig;
