const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PROJECT_CONFIG = require('../project-config.js');

module.exports = function getPlugins(options) {
	let API_BASE_URL = false;

	if (options.IS_ABSOLUTE_API_PATH) {
		API_BASE_URL = JSON.stringify(PROJECT_CONFIG.API_BASE_URL);
	}

	const plugins = [
		new CaseSensitivePathsPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			VERSION: JSON.stringify('Some Random Version'), // This Returns a String else 'PURE TEXT WITHOUT  quote'
			ASSETS_PUBLIC_PATH: JSON.stringify('/assets'),
			IS_MOCK_SERVER: options.IS_MOCK_SERVER,
			API_BASE_URL,
			APP_PUBLIC_PATH: ''
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		options.extractCSS,
		new CopyWebpackPlugin([
			{
				from: PROJECT_CONFIG.ASSETS_SRC,
				to: PROJECT_CONFIG.OUTPUT_ASSETS_FOLDER
			}
		]),

		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body',
			filename: 'index.html'
		})
	];

	if (options.IS_ANALYSE_BUILD) {
		plugins.push(
			new Visualizer({
				filename: '../build-analysis/statistics.html'
			})
		);
	}

	return plugins;
};
