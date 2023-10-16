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
