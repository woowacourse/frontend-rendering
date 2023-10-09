/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
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
