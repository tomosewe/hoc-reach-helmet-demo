import * as React from 'react';
import { Helmet } from 'react-helmet';

function withTitle(WrappedComponent, title) {
	return class extends React.Component {
		render() {
			return (
				<div>
					<Helmet>
						<title>{title}</title>
					</Helmet>
					<WrappedComponent {...this.props} />
				</div>
			);
		}
	};
}

export default withTitle;
