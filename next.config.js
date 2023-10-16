/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  env: {
    VOTOGETHER_BASE_URL: process.env.VOTOGETHER_BASE_URL,
    VOTOGETHER_MOCKING_URL: process.env.VOTOGETHER_MOCKING_URL,
    VOTOGETHER_REST_API_KEY: process.env.VOTOGETHER_REST_API_KEY,
    VOTOGETHER_SERVER_REDIRECT_KEY: process.env.VOTOGETHER_SERVER_REDIRECT_KEY,
  },
};

module.exports = nextConfig;
