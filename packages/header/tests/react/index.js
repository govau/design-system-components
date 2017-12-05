import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header.js';


ReactDOM.render(
	<div>
		<h2>header default</h2>

		<Header title="Page title" />


		<hr />
		<h2>header with children</h2>

		<Header title="Section title">
			<button>Menu button?</button>
		</Header>


		<hr />
		<h2>header with different heading level</h2>

		<Header title="Section title" level="2" />


		<hr />
		<h2>header with subline</h2>

		<Header title="Page title" subline="Service sub-title that could be a little longer" />


		<hr />
		<h2>header <code>--hero</code> with subline</h2>

		<Header title="Page title" hero subline="Service sub-title that could be a little longer" />


		<hr />
		<h2>header <code>--alt</code></h2>

		<Header title="Page title" alt />


		<hr />
		<h2>header <code>--alt</code> with subline</h2>

		<Header title="Page title" alt subline="Service sub-title that could be a little longer" />


		<hr />
		<h2>header  <code>--hero</code> <code>--alt</code> with subline</h2>

		<Header title="Page title" alt hero subline="Service sub-title that could be a little longer" />


		<hr />
		<h2>header <code>--dark</code></h2>

		<Header title="Page title" dark />


		<hr />
		<h2>header <code>--dark</code> with subline</h2>

		<Header title="Page title" dark subline="Service sub-title that could be a little longer" />


		<hr />
		<h2>header <code>--hero</code> <code>--dark</code> with subline</h2>

		<Header title="Page title" dark hero subline="Service sub-title that could be a little longer" />


		<hr />
		<h2>header <code>--alt</code> <code>--dark</code></h2>

		<Header title="Page title" alt dark />


		<hr />
		<h2>header <code>--alt</code> <code>--dark</code> with subline</h2>

		<Header title="Page title" alt dark subline="Service sub-title that could be a little longer" />


		<hr />
		<h2>header <code>--hero</code> <code>--alt</code> <code>--dark</code> with subline</h2>

		<Header title="Page title" alt dark hero subline="Service sub-title that could be a little longer" />

	</div>,

	document.getElementById('root'),
);
