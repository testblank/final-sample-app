module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ['airbnb', 'eslint:recommended', 'plugin:prettier/recommended'],
	rules: {
		// ? allow both js and jsx filename
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.js', '.jsx'],
			},
		],
		// ? for import alias
		'import/no-unresolved': 0,
		// ? for consoloe.log
		'no-console': 0,
		// ? for arrow function react components
		'react/function-component-definition': [
			2,
			{ namedComponents: 'arrow-function' },
		],
		// ? for reducer immer.js
		'no-param-reassign': 0,
		// ? Delete `␍`  관련 에러 해결
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
	},
};
