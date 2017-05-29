import React from 'react';
import ReactDOM from 'react-dom';

import Breadcrumbs from './breadcrumbs.js';


ReactDOM.render(
	<div>
		<h2>breadcrumbs</h2>
		<Breadcrumbs label="Breadcrumb for this page" items={[
			{
				link: '#options',
				text: 'Options',
			},
			{
				link: '#help',
				text: 'Help',
			},
			{
				text: 'Sign Out',
			},
		]} />

		<hr />
		<h2>breadcrumbs inverted</h2>

		<Breadcrumbs inverted label="Breadcrumb for the other page" items={[
			{
				link: '#options',
				text: 'Options2',
			},
			{
				link: '#help',
				text: 'Help2',
			},
			{
				text: 'Sign Out2',
			},
		]} />
	</div>,

	document.getElementById('root'),
);
