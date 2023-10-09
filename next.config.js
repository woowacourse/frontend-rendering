/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },

  env: {
    HOST:
      process.env.NODE_ENV === 'development' ? 'http://localhost:7942' : 'https://api.pium.life',
    DICT_COUNT: process.env.NODE_ENV === 'development' ? 5 : 333,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.pium.life',
        port: '',
        pathname: '/**',
      },
      ...(process.env.NODE_ENV === 'development'
        ? [
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              port: '',
              pathname: '/*',
            },
          ]
        : []),
    ],
  },
};

module.exports = nextConfig;
