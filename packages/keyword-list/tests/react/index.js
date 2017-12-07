import React from 'react';
import ReactDOM from 'react-dom';

import KeywordList from './keyword-list.js';


ReactDOM.render(
	<div className="split-wrapper">
		<div className="split au-body">
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


			<hr />
			<h2>keyword-list with onClick</h2>

			<KeywordList repeatedName='Links' items={[
				{
					link: '#url',
					name: 'With link',
					onClick: event => { event.preventDefault(); console.log('This function is called when the first item is clicked') },
				},
				{
					name: 'Without link',
					onClick: event => { event.preventDefault(); console.log('This function is called when the second item is clicked') },
				},
			]} />
		</div>
		<div className="split au-body au-body--dark">
		<h2>keyword-list without link</h2>
			<KeywordList dark repeatedName='Department of' items={[
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

			<KeywordList dark repeatedName='Department of' items={[
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


			<hr />
			<h2>keyword-list with onClick</h2>

			<KeywordList dark repeatedName='Links' items={[
				{
					link: '#url',
					name: 'With link',
					onClick: event => { event.preventDefault(); console.log('This function is called when the first item is clicked') },
				},
				{
					name: 'Without link',
					onClick: event => { event.preventDefault(); console.log('This function is called when the second item is clicked') },
				},
			]} />
		</div>
	</div>,

	document.getElementById('root'),
);
