import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import getValue from 'object-getvalue';

import createHistory from 'history/createBrowserHistory';

import * as rootReducer from '../reducers/index';

// Create a history of your choosing (we're using a browser history in this case)
const basename = getValue(window, '');

let historyOptions = {};

if (window.location.pathname.includes(basename)) {
	// This condition will only execute only ONCE during Hard Reload
	historyOptions = { basename };
}

const history = createHistory(historyOptions);

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history);

const combinerRootReducer = combineReducers({
	...rootReducer,
	form: formReducer,
	router: routerReducer
});

export default function configureStore() {
	const middleware = [historyMiddleware, thunk];

	let composeEnhancers;
	if (process.env.NODE_ENV !== 'production') {
		/* eslint-disable global-require */
		const { logger } = require('redux-logger');
		middleware.push(logger);

		const { composeWithDevTools } = require('redux-devtools-extension');
		composeEnhancers = composeWithDevTools({
			// Specify here name, actionsBlacklist, actionsCreators and other options if needed
		});
	}

	const finalEnhancer = composeEnhancers || compose;
	const store = createStore(combinerRootReducer, finalEnhancer(applyMiddleware(...middleware)));
	return store;
}

export { history };
