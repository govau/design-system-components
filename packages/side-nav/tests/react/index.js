import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';


import AUsideNav from './side-nav.js';


const menu = [
	{
		link: 'one#1',
		text: 'Change to route one',
	},
	{
		link: 'two#1',
		text: 'Change to route two',
		children: [
			{
				link: 'one#2',
				text: 'Change to route one',
			},
			{
				link: 'two#2',
				text: 'Change to route two',
				children: [
					{
						link: 'one#3',
						text: 'Change to route one',
					},
					{
						link: 'two#3',
						text: 'Change to route two',
						children: [
							{
								link: 'one#4',
								text: 'Change to route one',
							},
							{
								link: 'two#4',
								text: 'Change to route two',
								children: [
									{
										link: 'one#5',
										text: 'Change to route one',
									},
									{
										link: 'two#5',
										text: 'Change to route two',
									},
								],
							},
						],
					},
				],
			},
		],
	},
	{
		link: 'three#1',
		text: 'Change to route three',
	},
	{
		link: 'four#1',
		text: 'Change to route four',
		children: [
			{
				link: 'one#2',
				text: 'Change to route one',
			},
			{
				link: 'two#2',
				text: 'Change to route two',
			},
		],
	},
	{
		link: 'five#1',
		text: 'Change to route five',
	},
];

ReactDOM.render(
	<div>
		<div className="split-wrapper">
			<div className="split au-body">
				<AUsideNav
					accordionHeader="In this section"
					menuHeaderLink="#"
					menuHeader="Lodging your tax return"
					items={ menu }
				/>
			</div>
			<div className="split au-body au-body--alt">
				<AUsideNav
					alt
					accordionHeader="In this section"
					menuHeaderLink="#"
					menuHeader="Lodging your tax return"
					items={ menu }
				/>
			</div>
		</div>
		<div className="split-wrapper">
			<div className="split au-body au-body--dark">
				<AUsideNav
					dark
					accordionHeader="In this section"
					menuHeaderLink="#"
					menuHeader="Lodging your tax return"
					items={ menu }
				/>
			</div>
			<div className="split au-body au-body--dark au-body--alt">
				<AUsideNav
					dark
					alt
					accordionHeader="In this section"
					menuHeaderLink="#"
					menuHeader="Lodging your tax return"
					items={ menu }
				/>
			</div>
		</div>
	</div>,

	document.getElementById('root'),
);
