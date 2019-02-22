import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import AUlinkList from './link-list.js';


ReactDOM.render(
	<div className="split-wrapper">
		<div className="split au-body">
			<h2>Link list</h2>
			<AUlinkList items={[
				{
					link: '#options',
					text: <span>text <strong>with HTML</strong></span>,
				},
				{
					link: '#help',
					text: <Fragment>Service sub-title <strong className="testing">i am here as well</strong></Fragment>,
				},
				{
					link: '#signout',
					text: 'Sign Out',
				},
			]} />


			<hr />
			<h2>Link list additional class</h2>

			<AUlinkList className="additional-class" items={[
				{
					link: '#options',
					text: 'Options',
				},
				{
					link: '#help',
					text: 'Help',
					className: 'test-class',
					li: {
						className: 'test-class test-class--mod',
					},
				},
				{
					link: '#signout',
					text: 'Sign Out',
					className: 'test-class test-class--mod',
					li: {
						className: 'test-class',
					},
				},
			]} />


			<hr />
			<h2>Link list inline</h2>

			<AUlinkList inline items={[
				{
					link: '#Options',
					text: 'Options',
				},
				{
					link: '#help',
					text: 'Help',
				},
				{
					link: '#signout',
					text: 'Sign Out',
				},
			]} />


			<hr />
			<h2>Link list with onClick</h2>

			<AUlinkList items={[
				{
					link: '#Options',
					text: 'With link',
					onClick: event => { event.preventDefault(); console.log('This function is called when the first item is clicked') },
				},
				{
					text: 'Without link',
					onClick: event => { event.preventDefault(); console.log('This function is called when the second item is clicked') },
				},
			]} />

			<hr />
			<h2>Link list with Link router</h2>
			<BrowserRouter basename={ window.location.pathname }>
				<Fragment>
					<AUlinkList linkComponent={ Link } items={[
						{
							link: 'one',
							text: 'Change to route one',
						},
						{
							link: 'two',
							text: 'Change to route two',
						},
					]} />
					<Route path="/one" render={ () => ( <p>Route one</p> )} />
					<Route path="/two" render={ () => ( <p>Route two</p> )} />
				</Fragment>
			</BrowserRouter>
		</div>
		<div className="split au-body au-body--dark">
			<h2>Link list</h2>
			<AUlinkList items={[
				{
					link: '#options',
					text: 'Options',
				},
				{
					link: '#help',
					text: 'Help',
				},
				{
					link: '#signout',
					text: 'Sign Out',
				},
			]} />


			<hr />
			<h2>Link list additional class</h2>

			<AUlinkList className="additional-class" items={[
				{
					link: '#options',
					text: 'Options',
				},
				{
					link: '#help',
					text: 'Help',
					className: 'test-class',
					li: {
						className: 'test-class test-class--mod',
					},
				},
				{
					link: '#signout',
					text: 'Sign Out',
					className: 'test-class test-class--mod',
					li: {
						className: 'test-class',
					},
				},
			]} />


			<hr />
			<h2>Link list inline</h2>

			<AUlinkList inline items={[
				{
					link: '#options',
					text: 'Options',
				},
				{
					link: '#help',
					text: 'Help',
				},
				{
					link: '#signout',
					text: 'Sign Out',
				},
			]} />


			<hr />
			<h2>Link list with onClick</h2>

			<AUlinkList items={[
				{
					link: '#Options',
					text: 'With link',
					onClick: event => { event.preventDefault(); console.log('This function is called when the first item is clicked') },
				},
				{
					text: 'Without link',
					onClick: event => { event.preventDefault(); console.log('This function is called when the second item is clicked') },
				},
			]} />

			<hr />
			<h2>Link list with Link router</h2>
			<BrowserRouter basename={ window.location.pathname }>
				<Fragment>
					<AUlinkList linkComponent={ Link } items={[
						{
							link: 'one',
							text: 'Change to route one',
						},
						{
							link: 'two',
							text: 'Change to route two',
						},
					]} />
					<Route path="/one" render={ () => ( <p>Route one</p> )} />
					<Route path="/two" render={ () => ( <p>Route two</p> )} />
				</Fragment>
			</BrowserRouter>
		</div>
	</div>,

	document.getElementById( 'root' ),
);
