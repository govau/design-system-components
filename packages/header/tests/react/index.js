import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header.js';


ReactDOM.render(
	<div>
		<h2>header default</h2>

		<Header title="Page title" />


		<hr />
		<h2>header default with subline</h2>

		<Header title="Page title" theme="light" subline="Service sub-title that could be a little longer" />


		<hr />
		<h2>hero header default with subline</h2>

		<Header title="Page title" theme="light" hero subline="Service sub-title that could be a little longer" />


		<hr />
		<h2>header light</h2>

		<Header title="Page title" theme="light" />


		<hr />
		<h2>header light with subline</h2>

		<Header title="Page title" theme="light" subline="Service sub-title that could be a little longer" />


		<hr />
		<h2>hero header light with subline</h2>

		<Header title="Page title" theme="light" hero subline="Service sub-title that could be a little longer" />


		<hr />
		<h2>header dark</h2>

		<Header title="Page title" theme="dark" />


		<hr />
		<h2>header dark with subline</h2>

		<Header title="Page title" theme="dark" subline="Service sub-title that could be a little longer" />


		<hr />
		<h2>hero header dark with subline</h2>

		<Header title="Page title" theme="dark" hero subline="Service sub-title that could be a little longer" />
	</div>,

	document.getElementById('root'),
);
