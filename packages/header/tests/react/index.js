import React from 'react';
import ReactDOM from 'react-dom';

import AUheader from './header.js';


ReactDOM.render(
	<div>
		<h2>header default</h2>

		<AUheader title="Page title" />


		<hr />
		<h2>header with additional class</h2>

		<AUheader dark title="Page title" subline="Service sub-title" className="testing" />


		<hr />
		<h2>header with children</h2>

		<AUheader title="Section title">
			<button>Menu button?</button>
		</AUheader>


		<hr />
		<h2>header with different heading level</h2>

		<AUheader title="Section title" level="2" />


		<hr />
		<h2>header with subline</h2>

		<AUheader title="Page title" subline="Service sub-title that could be a little longer" />


		<hr />
		<h2>header <code>--hero</code> with subline</h2>

		<AUheader title="Page title" hero subline="Service sub-title that could be a little longer" />


		<hr />
		<h2>header <code>--alt</code></h2>

		<AUheader title="Page title" alt />


		<hr />
		<h2>header <code>--alt</code> with subline</h2>

		<AUheader title="Page title" alt subline="Service sub-title that could be a little longer" />


		<hr />
		<h2>header  <code>--hero</code> <code>--alt</code> with subline</h2>

		<AUheader title="Page title" alt hero subline="Service sub-title that could be a little longer" />


		<hr />
		<h2>header <code>--dark</code></h2>

		<AUheader title="Page title" dark />


		<hr />
		<h2>header <code>--dark</code> with subline</h2>

		<AUheader title="Page title" dark subline="Service sub-title that could be a little longer" />


		<hr />
		<h2>header <code>--hero</code> <code>--dark</code> with subline</h2>

		<AUheader title="Page title" dark hero subline="Service sub-title that could be a little longer" />


		<hr />
		<h2>header <code>--alt</code> <code>--dark</code></h2>

		<AUheader title="Page title" alt dark />


		<hr />
		<h2>header <code>--alt</code> <code>--dark</code> with subline</h2>

		<AUheader title="Page title" alt dark subline="Service sub-title that could be a little longer" />


		<hr />
		<h2>header <code>--hero</code> <code>--alt</code> <code>--dark</code> with subline</h2>

		<AUheader title="Page title" alt dark hero subline="Service sub-title that could be a little longer" />

	</div>,

	document.getElementById('root'),
);
