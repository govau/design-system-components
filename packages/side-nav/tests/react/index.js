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
						active: true,
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


// To manage side-nav with state just wrap it with a state
class SideNavWrapper extends React.Component {
	// for an example on what a state change might look like we have to add a state
	constructor() {
		super();

		this.state = {
			closed: false
		};
	}

	// let’s change the state in the absence of more complex application code
	changeSideNav() {
		this.setState({ closed: !this.state.closed });
	}

	render() {
		return (
			<Fragment>
				<AUsideNav
					closed={ this.state.closed }
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
					onOpen={ () => { this.changeSideNav() }}
					onClose={ () => { this.changeSideNav() }}
				/>

				<button
					className="au-side-nav-toggle"
					type="button"
					onClick={ () => { this.changeSideNav() }}>
					Toggle side nav via state ( normally hidden on desktop )
				</button>
			</Fragment>
		);
	}
}


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
		<div className="split-wrapper">
			<div className="split au-body">
				<SideNavWrapper />
			</div>
		</div>
	</div>,

	document.getElementById('root'),
);
