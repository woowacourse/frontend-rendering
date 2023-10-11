/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	env: {
		HOST:
			process.env.NODE_ENV === 'development'
				? 'http://localhost:3000'
				: 'https://clean-fake-pium.vercel.app',
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
