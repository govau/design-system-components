import React from 'react';
import ReactDOM from 'react-dom';

import DirectionLink from './direction-links.js';


ReactDOM.render(
	<div>
		<h2>bare</h2>
		<DirectionLink link="#url" text="Continue" />


		<hr />
		<h2><code>--right</code> variant</h2>

		<DirectionLink link="#url" text="Next" direction="right" />


		<hr />
		<h2><code>--left</code> variant</h2>

		<DirectionLink link="#url" text="Back" direction="left" />


		<hr />
		<h2><code>--up</code> variant</h2>

		<DirectionLink link="#url" text="Top" direction="up" />


		<hr />
		<h2><code>--down</code> variant</h2>

		<DirectionLink link="#url" text="Skip to footer" direction="down" />


		<hr />
		<h2>direction-link as button with onclick</h2>

		<DirectionLink text="Scroll up" direction="up" onClick={ () => console.log('This function will be called on click') } />
	</div>,

	document.getElementById('root'),
);
