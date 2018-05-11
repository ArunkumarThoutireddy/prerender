// Packages
import React, { Component } from 'react';

// Components

// Actions

function pageWrapper(Cmp, args) {
	return class PageWrapper extends Component {
		render() {
			return (
				<div className="PageWrapper">
					<Cmp {...this.props} {...args} />
				</div>
			);
		}
	};
}

export default pageWrapper;
