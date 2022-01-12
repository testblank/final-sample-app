const _config = require('./src/config/tailwindConfig');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette')
	.default;

// border-top-color 화 같이 부분적인 테두리 색 적용 csss를 tailwind에서 사용하기 위해 추가함
const borderColorPlugin = ({ addUtilities, e, theme, variants }) => {
	let colors = flattenColorPalette(theme('borderColor'));

	delete colors.default;

	if (this.theme?.extend?.colors !== undefined) {
		colors = Object.assign(colors, this.theme.extend.colors);
	}

	const colorMap = Object.keys(colors).map(color => ({
		[`.border-t-${color}`]: { borderTopColor: colors[color] },
		[`.border-r-${color}`]: { borderRightColor: colors[color] },
		[`.border-b-${color}`]: { borderBottomColor: colors[color] },
		[`.border-l-${color}`]: { borderLeftColor: colors[color] },
	}));
	const utilities = Object.assign({}, ...colorMap);

	addUtilities(utilities, variants('borderColor'));
};

module.exports = {
	// mode: 'jit', // just in time mode https://tailwindcss.com/docs/just-in-time-mode#enabling-jit-mode
	plugins: [borderColorPlugin],
	// purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	// darkMode: 'class', // or 'media' or 'class'
	theme: {
		fontFamily: {
			// ? className={'font-bold'}
			// ? className={'font-medium'}
			// ? className={'font-regular'}
			bold: 'NotoSansKR-Bold', // ! fontWeight 700
			medium: 'NotoSansKR-Medium', // ! fontWeight 500
			regular: 'NotoSansKR-Regular', // ! fontWeight 400
		},
		extend: {
			fontSize: {
				// ? className={'text-34'}
				34: '34px',
				24: '24px',
				20: '20px',
				16: '16px',
				14: '14px',
				15: '15px',
				12: '12px',
				10: '10px',
			},
			lineHeight: {
				// ? className={'leading-50'}
				50: '50px',
				36: '36px',
				30: '30px',
				24: '24px',
				22: '22px',
				21: '21px',
				18: '18px',
				15: '15px',
			},
			// ? className={'text-opacity--87'}
			textOpacity: {
				87: 0.87,
			},
			// ? className={'text-gray-50'}
			colors: _config.colors,
			zIndex: {
				0: 0,
				1: 1,
				2: 2,
				3: 3,
				4: 4,
				5: 5,
				6: 6,
				7: 7,
				8: 8,
				9: 9,
				10: 10,
			},
		},
	},
	variants: ['responsive', 'group-hover', 'disabled', 'hover', 'focus', 'active'],
};
