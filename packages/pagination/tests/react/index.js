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
	  console.log("Test");
	}
  
	render() {
	
		return (
			<div>
			<AUPagination totalResults={ 100 } recordsPerPage={ 10 } center onChange={ this.onChanged } />	
			{/* <BrowserRouter basename={ window.location.pathname }>
				<React.Fragment>
					<AUPagination totalResults={ 100 } recordsPerPage={ 10 } link="/user/" LinkComponent={ Link }  center onChange={ this.onChanged } />
					<Route path="/user/:userId" render={ () => ( <p>Route one</p> )} />
					<Route path="/two" render={ () => ( <p>Route two</p> )} />
				</React.Fragment>
			</BrowserRouter> */}
			</div>
		);
	}
};

// render to page
ReactDOM.render(
	<App />,

	document.getElementById('root'),
);