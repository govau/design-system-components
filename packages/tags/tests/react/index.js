import React from 'react';
import ReactDOM from 'react-dom';

import Tags from './tags.js';


ReactDOM.render(
	<div>
		<h2>tags without links</h2>

		<Tags tags={[
			{
				text: 'foo',
			},
			{
				text: 'bar',
			},
			{
				text: 'baz',
			},
			{
				text: 'boing',
			},
		]} />


		<hr />
		<h2>tags with links</h2>

		<Tags tags={[
			{
				link: '#url',
				text: 'foo',
			},
			{
				link: '#url',
				text: 'bar',
			},
			{
				link: '#url',
				text: 'baz',
			},
			{
				link: '#url',
				text: 'boing',
			},
		]} />
	</div>,

	document.getElementById('root'),
);
