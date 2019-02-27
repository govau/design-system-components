import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import AUdirectionLink from './direction-links.js';


ReactDOM.render(
	<div className="split-wrapper">
		<div className="split">
			<h2>bare</h2>
			<AUdirectionLink link="#url" text="Continue" />


			<hr />
			<h2>with additional classes</h2>
			<AUdirectionLink link="#url" text="Continue" className="testing" />


			<hr />
			<h2><code>--right</code> variant</h2>

			<AUdirectionLink link="#url" text="Next" direction="right" />


			<hr />
			<h2><code>--left</code> variant</h2>

			<AUdirectionLink link="#url" text="Back" direction="left" />


			<hr />
			<h2><code>--up</code> variant</h2>

			<AUdirectionLink link="#url" text="Top" direction="up" />


			<hr />
			<h2><code>--down</code> variant</h2>

			<AUdirectionLink link="#url" text="Skip to footer" direction="down" />


			<hr />
			<h2>direction-link as button with onclick</h2>

			<AUdirectionLink text="Log it" direction="up" onClick={ () => console.log('This function will be called on click') } />
		</div>
		<div className="split split--dark">
			<h2>bare</h2>
			<AUdirectionLink dark link="#url" text="Continue" />


			<hr />
			<h2>with additional classes</h2>
			<AUdirectionLink dark link="#url" text="Continue" className="testing" />


			<hr />
			<h2><code>--dark</code><code>--right</code> variant</h2>

			<AUdirectionLink dark link="#url" text="Next" direction="right" />


			<hr />
			<h2><code>--dark</code><code>--left</code> variant</h2>

			<AUdirectionLink dark link="#url" text="Back" direction="left" />


			<hr />
			<h2><code>--dark</code><code>--up</code> variant</h2>

			<AUdirectionLink dark link="#url" text="Top" direction="up" />


			<hr />
			<h2><code>--dark</code><code>--down</code> variant</h2>

			<AUdirectionLink dark link="#url" text="Skip to footer" direction="down" />


			<hr />
			<h2>direction-link as button with onclick</h2>

			<AUdirectionLink dark text="Log it" direction="up" onClick={ () => console.log('This function will be called on click') } />

			<hr />
			<h2>direction-link as with router</h2>
			<BrowserRouter basename={ window.location.pathname }>
				<Fragment>
					<AUdirectionLink linkComponent={ Link } link="one" dark text="Page one" />&nbsp;
					<AUdirectionLink linkComponent={ Link } link="two" dark text="Page two" />
					<br />
					<Route path="/one" render={ () => ( <p>Route one</p> )} />
					<Route path="/two" render={ () => ( <p>Route two</p> )} />
				</Fragment>
			</BrowserRouter>
		</div>
	</div>,

	document.getElementById('root'),
);
