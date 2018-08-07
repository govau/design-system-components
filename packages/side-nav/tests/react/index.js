import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import AUsideNav from './side-nav.js';


const menu = [
	{
		link: '#',
		text: 'Change to route one',
	},
	{
		link: '#',
		text: 'Change to route two',
		children: [
			{
				link: '#',
				text: 'Change to route one',
			},
			{
				link: '#',
				text: 'Change to route two',
				children: [
					{
						link: '#',
						text: 'Change to route one',
					},
					{
						link: '#',
						text: 'Change to route two',
						children: [
							{
								link: '#',
								text: 'Change to route one',
								active: true,
							},
							{
								link: '#',
								text: 'Change to route two',
								children: [
									{
										link: '#',
										text: 'Change to route one',
									},
									{
										link: '#',
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
		link: '#',
		text: 'Change to route three',
	},
	{
		link: '#',
		text: 'Change to route four',
		children: [
			{
				link: '#',
				text: 'Change to route one',
			},
			{
				link: '#',
				text: 'Change to route two',
			},
		],
	},
	{
		link: '#',
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
					speed={ 2000 }
					accordionHeader="In this section"
					menuHeaderLink="#"
					menuHeader="Lodging your tax return"
					items={ menu }
					onOpen={ () => console.log( 'open started' )}
					onClose={ () => console.log( 'close started' )}
					afterOpen={ () => console.log( 'open completed' )}
					afterClose={ () => console.log( 'close completed' )}
				/>
			</div>
			<div className="split au-body au-body--dark au-body--alt">
				<BrowserRouter basename={ window.location.pathname }>
					<Fragment>
						<AUsideNav
							dark
							alt
							linkComponent={ Link }
							accordionHeader="In this section"
							menuHeaderLink="#"
							menuHeader="Lodging your tax return"
							items={[
								{
									link: 'one',
									text: 'Change to route one',
								},
								{
									link: 'two',
									text: 'Change to route two',
								},
							]}
						/>
						<Switch>
							<Route path="/one" render={ () => ( <p>Route one</p> )} />
							<Route path="/two" render={ () => ( <p>Route two</p> )} />
						</Switch>
					</Fragment>
				</BrowserRouter>
			</div>
		</div>
	</div>,

	document.getElementById('root'),
);
