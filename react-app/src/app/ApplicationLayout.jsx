import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { checkAndSetToken } from './actions/ApplicationActions';

class ApplicationLayout extends React.Component {
	componentDidMount() {
		this.props.dispatch(checkAndSetToken());
	}

	render() {
		return (
			<BrowserRouter>
				<div className="application-layout" />
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return state;
};

ApplicationLayout.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(ApplicationLayout);
