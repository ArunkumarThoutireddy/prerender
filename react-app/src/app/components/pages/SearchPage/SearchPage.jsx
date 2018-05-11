// Packages
import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../../../../styles/SearchPage.scss';

class SearchPage extends React.Component {
	componentDidMount() {
	}

	componentWillReceiveProps(nextProps) {

	}

	render() {
		return (
			<Fragment>
				<div className="search-page">
					<h2>welcome to React SEO search page</h2>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
	};
};

SearchPage.propTypes = {
};

export default connect(mapStateToProps)(SearchPage);
