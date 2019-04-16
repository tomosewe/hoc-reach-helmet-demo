import React from 'react';
import withTitle from './withTitle';

class Home extends React.Component {
	render() {
		return (
			<div>
				<h2>Home page</h2>
			</div>
		);
	}
}

export default withTitle(Home, 'Home page');
