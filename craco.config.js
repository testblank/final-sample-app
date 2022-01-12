const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@api': path.resolve(__dirname, 'src/api/'),
			'@components': path.resolve(__dirname, 'src/components/'),
			'@config': path.resolve(__dirname, 'src/config/'),
			'@data': path.resolve(__dirname, 'src/data/'),
			'@hooks': path.resolve(__dirname, 'src/hooks/'),
			'@pages': path.resolve(__dirname, 'src/pages/'),
			'@publish': path.resolve(__dirname, 'src/publish/'),
			'@redux': path.resolve(__dirname, 'src/redux/'),
			'@res': path.resolve(__dirname, 'src/res/'),
			'@routes': path.resolve(__dirname, 'src/routes/'),
			'@sample-pages': path.resolve(__dirname, 'src/sample-pages/'),
			'@stories': path.resolve(__dirname, 'src/stories/'),
			'@styles': path.resolve(__dirname, 'src/styles/'),
			'@utils': path.resolve(__dirname, 'src/utils/'),
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
