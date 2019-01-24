module.exports = {
	entry: './index.js',
	output: {
		filename: './bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env','@babel/preset-react']
        }
      }
			},
		],
	},
};
