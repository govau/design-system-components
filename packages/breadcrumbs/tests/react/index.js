import React from 'react';
import ReactDOM from 'react-dom';

import Breadcrumbs from './breadcrumbs.js';


ReactDOM.render(
	<div>
		<h2>breadcrumbs</h2>
		<Breadcrumbs label="Breadcrumb for this page" items={[
			{
				link: '#link',
				text: 'text1',
			},
			{
				link: '#link2',
				text: 'text2',
			},
			{
				text: 'text3',
			},
		]} />

		<hr />
		<h2>breadcrumbs inverted</h2>

		<Breadcrumbs inverted label="Breadcrumb for the other page" items={[
			{
				link: '#link',
				text: 'text1',
			},
			{
				link: '#link2',
				text: 'text2',
			},
			{
				text: 'text3',
			},
		]} />
	</div>,

	document.getElementById('root'),
);
