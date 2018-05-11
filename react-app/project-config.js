/*
 * Project Setting & Configuration
 * Compilation : ReactJS, SCSS
 * Build Tool : Webpack v3
 */

// Application
const APP_NAME = 'React SEO';
const APP_TITLE = '';
const VERSION = 'v1-0-0';

// Source Code
const SOURCE_ROOT_FOLDER = './src';

// Assets for Copying to Server
const ASSETS_SRC = `${SOURCE_ROOT_FOLDER}/assets`; // [Fonts, Images, Videos, Docs etc]

// Generated Output Folder for Distribution
const WEB_ROOT = 'dist'; // Serve this folder in webpack-dev-server [Include Mock JSON here]

// Generated output folder name for respective file types
const OUTPUT_JS_FOLDER = 'js';
const OUTPUT_CSS_FOLDER = 'css';
const OUTPUT_ASSETS_FOLDER = 'assets'; // Public Folder

/*
 *    /site-name  => If site is hosted on Shared Machine
 *    /           => If site is hosted on Dedicated Machine
 */
const APP_PUBLIC_PATH = '';

// Webpack-Dev-Server
const DEV_SERVER_HOST = 'localhost'; // Use 0.0.0.0 if wanted to access it over LAN using Machine IP address
const DEV_SERVER_PORT = 6565;
const API_BASE_URL = 'http://<HOST_NAME>:<PORT>'; // Without Ending '/'

module.exports = {
	APP_NAME,
	APP_TITLE,
	VERSION,

	SOURCE_ROOT_FOLDER,
	ASSETS_SRC,
	WEB_ROOT,
	OUTPUT_JS_FOLDER,
	OUTPUT_CSS_FOLDER,
	OUTPUT_ASSETS_FOLDER,
	APP_PUBLIC_PATH,
	DEV_SERVER_HOST,
	DEV_SERVER_PORT,
	API_BASE_URL
};
