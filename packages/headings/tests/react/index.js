import React from 'react';
import ReactDOM from 'react-dom';

import Heading from './headings.js';


ReactDOM.render(
	<div className="split-wrapper">
		<div className="split">
			<h2>headings</h2>

			<Heading size="xxxl" level="6" text="au-display-xl on h1" />
			<Heading size="xxl"  level="5" text="au-display-xl on h1" />
			<Heading size="xl"   level="1" text="au-display-xl on h1" />
			<Heading size="lg"   level="2" text="au-display-lg on h2" />
			<Heading size="md"   level="3" text="au-display-md on h3" />
			<Heading size="sm"   level="6" text="au-display-sm on h6" />
			<Heading size="xs"   level="4" text="au-display-xs on h4" />
		</div>
		<div className="split split--dark">
			<h2>headings <code>--dark</code></h2>

			<Heading size="xxxl" level="6" text="au-display-xl on h1" />
			<Heading size="xxl"  level="5" text="au-display-xl on h1" />
			<Heading size="xl"   level="1" text="au-display-xl on h1" />
			<Heading size="lg"   level="2" text="au-display-lg on h2" />
			<Heading size="md"   level="3" text="au-display-md on h3" />
			<Heading size="sm"   level="6" text="au-display-sm on h6" />
			<Heading size="xs"   level="4" text="au-display-xs on h4" />
		</div>
	</div>,

	document.getElementById('root'),
);
