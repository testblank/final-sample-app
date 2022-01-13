const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@components': path.resolve(__dirname, 'src/components/'),
			'@config': path.resolve(__dirname, 'src/config/'),
			'@modules': path.resolve(__dirname, 'src/modules/'),
			'@pages': path.resolve(__dirname, 'src/pages/'),
			'@routes': path.resolve(__dirname, 'src/routes/'),
			'@styles': path.resolve(__dirname, 'src/styles/'),
			'@utils': path.resolve(__dirname, 'src/utils/'),
			'@icons': path.resolve(__dirname, 'src/icons/'),
		},
	},
	style: {
		postcss: {
			plugins: [require('tailwindcss'), require('autoprefixer')],
		},
		// webpack: {
		//   configure: (config, { env, paths }) => {
		//     config.module.rules.push({
		//       test: /\.svg$/,
		//       use: ['@svgr/webpack'],
		//     });
		//     return config;
		//   },
		// },
	},
};
