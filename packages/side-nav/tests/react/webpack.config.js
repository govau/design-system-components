const path = require( 'path' );

module.exports = {
	entry: './index.js',
	mode: 'development',
	output: {
		filename: './bundle.js',
		path: path.resolve( __dirname )
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
		],
	},
};
