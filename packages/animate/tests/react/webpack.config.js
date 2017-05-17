module.exports = {
	entry: './index.jsx',
	output: {
		filename: './bundle.js'
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
