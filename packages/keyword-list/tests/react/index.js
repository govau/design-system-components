import React from 'react';
import ReactDOM from 'react-dom';

import KeywordList from './keyword-list.js';


ReactDOM.render(
	<div>
		<h2>keyword-list without link</h2>

		<KeywordList repeatedName='Department of' items={[
			{
				name: 'Agriculture and Water Resources',
			},
			{
				name: 'Communications and the Arts',
			},
			{
				name: 'Communications',
			},
			{
				name: 'Finance',
			},
			{
				name: 'Health',
			},
		]} />


		<hr />
		<h2>keyword-list with link</h2>

		<KeywordList repeatedName='Department of' items={[
			{
				link: '#url',
				name: 'Agriculture and Water Resources',
			},
			{
				link: '#url',
				name: 'Communications and the Arts',
			},
			{
				link: '#url',
				name: 'Communications',
			},
			{
				link: '#url',
				name: 'Finance',
			},
			{
				link: '#url',
				name: 'Health',
			},
		]} />
	</div>,

	document.getElementById('root'),
);
