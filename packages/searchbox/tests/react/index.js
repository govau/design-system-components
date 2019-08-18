import React from 'react';
import ReactDOM from 'react-dom';

import AUsearchbox from './searchbox.js';
import { AUlabel } from '../../../form/src/js/react';
import { Route, BrowserRouter } from 'react-router-dom';


ReactDOM.render(
	<div className="au-grid">
		<div className="split-wrapper">
			<div className="split">
				<h2>Standard</h2>
				<AUsearchbox label="Search" btnText="Search" id="def-search"/>

				<h2>Responsive</h2>
				<AUsearchbox label="Search" responsive btnText="Search" id="resp-search"/>

				<h2>Icon only</h2>
				<AUsearchbox label="Search" btnText="Search" icon id="icon-search"/>

				<h2>Label outside</h2>
				<AUlabel htmlFor="domain-box" text="Enter a domain"/>
				<AUsearchbox btnText="Check availability" id="domain-box" />

				<h2>Button with onclick function</h2>
				<AUsearchbox label="Search" btnText="Search" id="def-search" onClick={() => console.log('hello')}/>
			</div>
			<div className="split split--dark">
			<h2>Standard</h2>
				<AUsearchbox label="Search" btnText="Search" dark id="def-search-dark-dark"/>

				<h2>Responsive</h2>
				<AUsearchbox label="Search" responsive btnText="Search" dark id="resp-search-dark"/>

				<h2>Icon only</h2>
				<AUsearchbox label="Search" btnText="Search" dark icon id="icon-search-dark"/>

				<h2>Label outside</h2>
				<AUlabel htmlFor="dom" dark text="Enter a domain"/>
				<AUsearchbox btnText="Check availability" id="dom" dark />

				<h2>Button with change route</h2>

				<BrowserRouter>
					<React.Fragment>

						<Route render={({history}) => (
								<AUsearchbox dark label="Search" btnText="Search" id="def-search" onClick={() => { history.push('/one') }}/>
						)} />
						<Route path="/one" render={ () => ( <p>Route one</p> )} />
						<Route path="/two" render={ () => ( <p>Route two</p> )} />
					</React.Fragment>
				</BrowserRouter>
			</div>
		</div>
	</div>,

	document.getElementById('root'),
);
