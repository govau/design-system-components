import React from 'react';
import ReactDOM from 'react-dom';

import AUheading from './headings.js';


ReactDOM.render(
	<div className="split-wrapper">
		<div className="split">
			<h2>headings</h2>

			<AUheading size="xxxl" level="6" text="au-display-xxxl on h1" />
			<AUheading size="xxl"  level="5" text="au-display-xxl on h1" />
			<AUheading size="xl"   level="1" text="au-display-xl on h1" />
			<AUheading size="lg"   level="2" text="au-display-lg on h2" />
			<AUheading size="md"   level="3" text="au-display-md on h3" />
			<AUheading size="sm"   level="6" text="au-display-sm on h6" />
			<AUheading size="xs"   level="4" text="au-display-xs on h4" />

			<AUheading size="xl"   level="6" text="with additional classes" className="testing" />
		</div>
		<div className="split split--dark">
			<h2>headings <code>--dark</code></h2>

			<AUheading size="xxxl" level="6" text="au-display-xxxl on h1" />
			<AUheading size="xxl"  level="5" text="au-display-xxl on h1" />
			<AUheading size="xl"   level="1" text="au-display-xl on h1" />
			<AUheading size="lg"   level="2" text="au-display-lg on h2" />
			<AUheading size="md"   level="3" text="au-display-md on h3" />
			<AUheading size="sm"   level="6" text="au-display-sm on h6" />
			<AUheading size="xs"   level="4" text="au-display-xs on h4" />

			<AUheading size="xl"   level="6" text="with additional classes" className="testing" />
		</div>
	</div>,

	document.getElementById('root'),
);
