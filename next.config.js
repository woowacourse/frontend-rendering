/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	env: {
		HOST: 'http://localhost:3000',
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
