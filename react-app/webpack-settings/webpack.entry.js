const fs = require('fs');
const { resolve } = require('path');

const PROJECT_CONFIG = require('../project-config.js');

module.exports = function getEntriesConfig(options) {
	const entries = {};

	entries.reactApp = ['./src/app/index.js'];
	entries.vendor = [
		// Polyfill
		'babel-polyfill',

		// React
		'react',
		'react-dom',
		'react-addons-css-transition-group',
		'prop-types',

		// Redux
		'redux',
		'react-redux',

		// Routing
		'react-router',
		'react-router-dom',
		'react-router-redux',
		'history',

		// Other packages
		'redux-thunk',
		'react-modal',
		'redux-logger',
		'redux-devtools-extension',
		'redux-form',
		'react-tap-event-plugin',

		'react-slick',
		'react-share',
		'react-highlight-words',
		'react-responsive',
		'object-getvalue',
		'isomorphic-fetch',
		'query-string'
	];

	return entries;
};
