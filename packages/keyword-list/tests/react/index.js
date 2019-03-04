import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import AUkeywordList from './keyword-list.js';


ReactDOM.render(
	<div className="split-wrapper">
		<div className="split au-body">
		<h2>keyword-list without link</h2>
			<AUkeywordList repeatedName='Department of' items={[
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

			<AUkeywordList repeatedName='Department of' items={[
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
			<h2>keyword-list with additional classes</h2>

			<AUkeywordList className="testing" repeatedName='Department of' items={[
				{
					link: '#url',
					name: 'Agriculture and Water Resources',
				},
				{
					link: '#url',
					name: 'Communications and the Arts',
					className: 'testing',
				},
				{
					link: '#url',
					name: 'Communications',
					li: {
						className: 'testing',
					},
				},
			]} />


			<hr />
			<h2>keyword-list with onClick</h2>

			<AUkeywordList repeatedName='Links' items={[
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
			<AUkeywordList dark repeatedName='Department of' items={[
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

			<AUkeywordList dark repeatedName='Department of' items={[
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
			<h2>keyword-list with additional classes</h2>

			<AUkeywordList dark className="testing" repeatedName='Department of' items={[
				{
					link: '#url',
					name: 'Agriculture and Water Resources',
				},
				{
					link: '#url',
					name: 'Communications and the Arts',
					className: 'testing',
				},
				{
					link: '#url',
					name: 'Communications',
					li: {
						className: 'testing',
					},
				},
			]} />


			<hr />
			<h2>keyword-list with onClick</h2>

			<AUkeywordList dark repeatedName='Links' items={[
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


			<hr />
			<h2>keyword-list with router</h2>

			<BrowserRouter basename={ window.location.pathname }>
				<Fragment>
					<AUkeywordList linkComponent={ Link } dark repeatedName='Links' items={[
						{
							link: 'one',
							name: 'With one',
						},
						{
							link: 'two',
							name: 'Without two',
						},
					]} />
					<br />
					<Route path="/one" render={ () => ( <p>Route one</p> )} />
					<Route path="/two" render={ () => ( <p>Route two</p> )} />
				</Fragment>
			</BrowserRouter>


		</div>
	</div>,

	document.getElementById('root'),
);
