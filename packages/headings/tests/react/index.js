import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import AUheading from './headings.js';


ReactDOM.render(
	<div className="split-wrapper">
		<div className="split">
			<h2>headings</h2>

			<AUheading size="xxxl" level="6">au-display-xxxl on h1</AUheading>
			<AUheading size="xxl"  level="5">au-display-xxl on h1</AUheading>
			<AUheading size="xl"   level="1">au-display-xl on h1</AUheading>
			<AUheading size="lg"   level="2">au-display-lg on h2</AUheading>
			<AUheading size="md"   level="3">au-display-md on h3</AUheading>
			<AUheading size="sm"   level="6">au-display-sm on h6</AUheading>
			<AUheading size="xs"   level="4">au-display-xs on h4</AUheading>

			<AUheading size="xl"   level="6" className="testing">with additional classes</AUheading>
		</div>
		<div className="split split--dark">
			<h2>headings <code>--dark</code></h2>

			<AUheading size="xxxl" level="6">au-display-xxxl on h1</AUheading>
			<AUheading size="xxl"  level="5">au-display-xxl on h1</AUheading>
			<AUheading size="xl"   level="1">au-display-xl on h1</AUheading>
			<AUheading size="lg"   level="2">au-display-lg on h2</AUheading>
			<AUheading size="md"   level="3">au-display-md on h3</AUheading>
			<AUheading size="sm"   level="6">au-display-sm on h6</AUheading>
			<AUheading size="xs"   level="4">au-display-xs on h4</AUheading>

			<AUheading size="xl"   level="6" className="testing">with additional classes</AUheading>
		</div>
	</div>,

	document.getElementById('root'),
);
