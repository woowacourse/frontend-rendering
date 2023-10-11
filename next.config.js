/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: {
      sourceMap: true,
      autoLabel: "dev-only",
    },
  },
  output: "export",
};

module.exports = nextConfig;
