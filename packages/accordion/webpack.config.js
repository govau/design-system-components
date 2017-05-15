module.exports = {
	entry: './tests/react/index.jsx',
	output: {
		filename: './tests/react/bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	}
};
