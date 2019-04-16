import { Link, Router } from '@reach/router';
import React from 'react';
import Dashboard from './Dashboard';
import Home from './Home';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<nav>
					<Link to="/">Home</Link>{' '}
					<Link to="dashboard">Dashboard</Link>
				</nav>
				<Router>
					<Home path="/" />
					<Dashboard path="dashboard" />
				</Router>
			</div>
		);
	}
}
