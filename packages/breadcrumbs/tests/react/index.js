import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import AUbreadcrumbs from './breadcrumbs.js';


ReactDOM.render(
	<div className="split-wrapper">
		<div className="split au-body">
			<h2>breadcrumbs</h2>
			<AUbreadcrumbs label="Breadcrumb for this page" items={[
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
			<h2>breadcrumbs with onClick</h2>

			<AUbreadcrumbs label="Breadcrumb for the other page" items={[
				{
					link: '#link',
					text: 'with link',
					onClick: event => { event.preventDefault(); console.log('This function is called when the first item is clicked') },
				},
				{
					text: 'without link',
					onClick: event => { event.preventDefault(); console.log('This function is called when the second item is clicked') },
				},
			]} />

			<hr />
			<h2>breadcrumbs with additional classes</h2>

			<AUbreadcrumbs label="Breadcrumb for the next page" className="testing" items={[
				{
					link: '#link',
					text: 'Options',
				},
				{
					link: '#link',
					text: 'Help',
					className: 'testing',
				},
				{
					text: 'Sign Out',
					li: {
						className: 'testing',
					},
				},
			]} />
		</div>
		<div className="split au-body au-body--dark">
			<h2>breadcrumbs <code>--dark</code></h2>

			<AUbreadcrumbs dark label="Breadcrumb for the other page" items={[
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

			<hr />
			<h2>breadcrumbs with Link router</h2>
			<BrowserRouter>
				<Fragment>
					<AUbreadcrumbs
						dark
						linkComponent={ Link }
						label="Breadcrumb with router"
						items={[
							{
								link: 'one',
								text: 'Options2',
							},
							{
								link: 'two',
								text: 'Help2',
							},
							{
								text: 'Sign Out2',
							},
					]} />
					<Route path="/tests/one" render={ () => ( <p>Route one</p> )} />
					<Route path="/tests/two" render={ () => ( <p>Route two</p> )} />
				</Fragment>
			</BrowserRouter>

		</div>
	</div>,

	document.getElementById('root'),
);
