/* eslint-disable global-require */
const { resolve } = require('path');
const PROJECT_CONFIG = require('./project-config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin(`${PROJECT_CONFIG.OUTPUT_CSS_FOLDER}/bundle.[name].css`);

module.exports = (env = {}) => {
	console.log('>>>> env  : ', env);

	const IS_PRODUCTION_MODE = !env.dev;
	const IS_ANALYSE_BUILD = env.analyse || false;
	const IS_MOCK_SERVER = env.mock || true;
	const IS_ABSOLUTE_API_PATH = env.absoluteApiPath || false;
	const { APP_PUBLIC_PATH } = PROJECT_CONFIG;

	const WEBPACK_UTILS = require('./webpack-settings/webpack-utils')({
		IS_PRODUCTION_MODE,
		IS_ANALYSE_BUILD,
		IS_MOCK_SERVER,
		IS_ABSOLUTE_API_PATH,
		APP_PUBLIC_PATH
	});

	// Webpack Entries
	const ENTRIES = require('./webpack-settings/webpack.entry')({});

	// Webpack rules
	const RULES = require('./webpack-settings/webpack.rules')({
		IS_PRODUCTION_MODE,
		extractCSS,
		APP_PUBLIC_PATH
	});

	// Webpack plugins
	const PLUGINS = require('./webpack-settings/webpack.plugins')({
		IS_PRODUCTION_MODE,
		IS_ANALYSE_BUILD,
		IS_ABSOLUTE_API_PATH,
		APP_PUBLIC_PATH,
		extractCSS
		// copyFiles
	});

	WEBPACK_UTILS.printDetails();

	const config = {
		entry: ENTRIES,
		output: {
			path: resolve(PROJECT_CONFIG.WEB_ROOT),
			filename: `${PROJECT_CONFIG.OUTPUT_JS_FOLDER}/bundle.[name].js`,
			publicPath: '/',
			pathinfo: !IS_PRODUCTION_MODE
		},
		devtool: 'source-map',
		module: {
			rules: RULES
		},
		plugins: PLUGINS,
		resolve: {
			alias: {
				components: resolve(__dirname, 'src', 'app', 'components'),
				constants: resolve(__dirname, 'src', 'app', 'constants'),
				actions: resolve(__dirname, 'src', 'app', 'actions'),
				config: resolve(__dirname, 'src', 'app', 'config'),
				'app': resolve(__dirname, 'src', 'app')
			},
			extensions: ['.js', '.jsx', '.scss']
		},
		stats: {
			children: false
		}
	};

	if (env && env.debug) {
		console.log('wepack.config: ', config);
	}

	return config;
};
