import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';

import pageWrapper from './components/PageWrapper';
import SearchPage from './components/pages/SearchPage/SearchPage';

import { enableSPA } from './actions/ApplicationActions';
import { history } from './store';

class AppRoute extends React.Component {
	componentWillMount() {
		// Intentionally Writing it inside Will Mount so that
		// All the childred should get the isSPA flag as true
		this.props.dispatch(enableSPA(true));
	}

	render() {
		return (
			<ConnectedRouter history={history}>
				<Switch>
					<Route
						path="/"
						component={pageWrapper(SearchPage, {
							isSearchPage: true
						})}
					/>
				</Switch>
			</ConnectedRouter>
		);
	}
}

AppRoute.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(AppRoute);
