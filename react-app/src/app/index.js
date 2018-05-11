// Packages
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Components
import AppRoute from './AppRoute';

import configureStore from './store';

const mainStore = configureStore();

const appRoot = document.getElementById('app-root');
if (appRoot) {
	ReactDOM.render(
		<Provider store={mainStore}>
			<AppRoute />
		</Provider>,
		appRoot
	);
}
