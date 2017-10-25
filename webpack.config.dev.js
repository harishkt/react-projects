import path from 'path';
import webpack from 'webpack';

export default {
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'src')
	},
	entry: [
		'webpack-hot-middleware/client?reload=true',
		path.resolve(__dirname, 'src/index')
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname) + '/dist',
		publicPath: '/'
	},
	module: {
		rules: [
			{test: /\.(js|jsx)$/, use: 'babel-loader', exclude: [/node_modules/]},
			{test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					}
				]
			},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
			{test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	target: 'web'
};
