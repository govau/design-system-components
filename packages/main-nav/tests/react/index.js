import React from 'react';
import ReactDOM from 'react-dom';

import AUmainNav, { AUmainNavContent } from './main-nav.js';


const menu = [
	{
		link: '#',
		text: 'About',
	},
	{
		link: '#',
		text: 'Get started',
	},
	{
		link: '#',
		text: 'Components',
		active: true
	},
	{
		link: '#',
		text: 'Templates',
	},
	{
		link: '#',
		text: 'Community',
	},
	{
		link: '#',
		text: 'Support',
	},
	{
		link: '#',
		text: 'GitHub',
	},
	{
		link: '#',
		text: 'Download',
	},
];


ReactDOM.render(
	<div>
		<h2>main-nav</h2>
		<AUmainNav>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<AUmainNavContent items={ menu } />
					</div>
				</div>
			</div>
		</AUmainNav>

		<h2>main-nav <code>alt</code></h2>
		<AUmainNav alt>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<AUmainNavContent items={ menu } />
					</div>
				</div>
			</div>
		</AUmainNav>

		<h2>main-nav <code>dark</code></h2>
		<AUmainNav dark>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<AUmainNavContent items={ menu } />
					</div>
				</div>
			</div>
		</AUmainNav>

		<h2>main-nav <code>dark</code> <code>alt</code></h2>
		<AUmainNav alt dark>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<AUmainNavContent items={ menu } />
					</div>
				</div>
			</div>
		</AUmainNav>

		<h2>main-nav with <code>slow</code></h2>
		<AUmainNav>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<AUmainNavContent speed={ 1000 } items={ menu }>
							<p>Some extra magic</p>
						</AUmainNavContent>
					</div>
				</div>
			</div>
		</AUmainNav>

		<h2>main-nav with <code>callbacks</code></h2>
		<AUmainNav dark>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<AUmainNavContent
							items={ menu }
							onOpen={ () => { console.log('This function will run when the main menu opens'); } }
							afterOpen={ () => { console.log('This function will run after the main menu has opened'); } }
							onClose={ () => { console.log('This function will run when the main menu closes'); } }
							afterClose={ () => { console.log('This function will run after the main menu has closed'); } }
						>
							<p>Some extra magic</p>
						</AUmainNavContent>
					</div>
				</div>
			</div>
		</AUmainNav>

		<h2>main-nav with children</h2>
		<AUmainNav>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<AUmainNavContent items={ menu }>
						</AUmainNavContent>
					</div>
				</div>
			</div>
		</AUmainNav>
	</div>,

	document.getElementById('root'),
);
