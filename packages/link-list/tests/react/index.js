import React from 'react';
import ReactDOM from 'react-dom';

import AUlinkList from './link-list.js';


ReactDOM.render(
	<div className="split-wrapper">
		<div className="split au-body">
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
				},
				{
					link: '#signout',
					text: 'Sign Out',
					className: 'test-class test-class--mod',
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
				},
				{
					link: '#signout',
					text: 'Sign Out',
					className: 'test-class test-class--mod',
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
		</div>
	</div>,

	document.getElementById('root'),
);
