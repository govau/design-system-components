import React from 'react';
import ReactDOM from 'react-dom';

import LinkList from './link-list.js';


ReactDOM.render(
	<div>
		<h2>Link list</h2>
		<LinkList items={[
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
		<h2>Link list inverted</h2>

		<LinkList inverted items={[
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
		<h2>Link list inline</h2>

		<LinkList inline items={[
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
		<h2>Link list inline inverted</h2>

		<LinkList inverted inline items={[
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

		<LinkList items={[
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
	</div>,

	document.getElementById('root'),
);
