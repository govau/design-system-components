import React from 'react';
import ReactDOM from 'react-dom';

import DirectionLink from './direction-links.js';


ReactDOM.render(
	<div>
		<h2>bare</h2>
		<DirectionLink href="#url" text="Continue" />

		<hr />
		<h2><code>--right</code> variant</h2>
		<DirectionLink href="#url" text="Next" direction="right" />

		<hr />
		<h2><code>--left</code> variant</h2>
		<DirectionLink href="#url" text="Back" direction="left" />

		<hr />
		<h2><code>--up</code> variant</h2>
		<DirectionLink href="#url" text="Top" direction="up" />

		<hr />
		<h2><code>--down</code> variant</h2>
		<DirectionLink href="#url" text="Skip to footer" direction="down" />
	</div>,

	document.getElementById('root'),
);
