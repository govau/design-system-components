import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import AUPagination from './pagination.js';

// Render some pagination
class App extends React.Component {
	constructor( props ) {
		super( props );
	}

	onChanged(data){
	 
	}
  
	render() {
	
		return (
			<div>
			<AUPagination totalResults={ 100 } recordsPerPage={ 10 } center onChange={ this.onChanged } />	
	
			</div>
		);
	}
};

// render to page
ReactDOM.render(
	<App />,

	document.getElementById('root'),
);