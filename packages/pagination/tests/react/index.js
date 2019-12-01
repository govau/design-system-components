import React from 'react';
import ReactDOM from 'react-dom';

import AUPagination from './pagination.js';

// Render some pagination
class App extends React.Component {
	constructor( props ) {
		super( props );
	}

	onChanged(data){
	  console.log("Test");
	}
  
	render() {
	
		return (
			<div>
			<AUPagination totalResults={ 100 } recordsPerPage={ 10 } onChange={ this.onChanged } />	
			</div>
		);
	}
};

// render to page
ReactDOM.render(
	<App />,

	document.getElementById('root'),
);