import React from 'react';
import withTitle from './withTitle';

class Dashboard extends React.Component {
	render() {
		return (
			<div>
				<h2>Dashboard</h2>
			</div>
		);
	}
}

export default withTitle(Dashboard, 'Dashboard');
