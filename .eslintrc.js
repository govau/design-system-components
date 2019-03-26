module.exports = {
	'root': true,
	'env': {
		'node': true,
		'commonjs': true,
		'es6': true,
	},
	'extends': 'eslint:recommended',
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly',
	},
	'parserOptions': {
		'ecmaVersion': 2018,
	},
	'rules': {
		'no-console': 'off',
		'no-unused-vars': ['warn', { 'ignoreRestSiblings': true }],
		'no-var': 'error',
		'no-return-assign': 'error',
		'no-return-await': 'error',
		'no-multi-assign': 'error',
		'eqeqeq': 'error',
		'require-await': 'error',
		'wrap-iife': ["error", "inside"],
		'curly': ['error', 'all'],
		'semi': 'error',
		'func-style': ['error', 'expression'],
		'newline-per-chained-call': 'warn',
		'array-bracket-spacing': ['error', 'always'],
		'object-curly-spacing': ['error', 'always'],
		'space-in-parens': ['error', 'always', { 'exceptions': ['empty'] }],
		'block-spacing': ['error', 'always'],
		'brace-style': ['error', 'stroustrup'],
		'indent': ['error', 'tab', {
			'ignoreComments': true,
		}],
		'arrow-spacing': 'error',
		'space-before-function-paren': ['error', {
			'anonymous': 'never',
			'named': 'never',
			'asyncArrow': 'always',
		}],
	}
};
