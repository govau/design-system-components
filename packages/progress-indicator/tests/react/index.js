import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import AUprogressIndicator from './progress-indicator.js';


// Let’s show some dynamic interactions
class ProgressIndicatorWrapper extends React.Component {

	constructor( props ) {
		super();

		this.state = {
			items: [
				{
					link: '#url',
					text: 'Introduction',
					status: 'done',
				},
				{
					link: '#url',
					text: 'Business Contacts',
					status: 'done',
				},
				{
					link: '#url',
					text: 'Case Studies',
					status: 'todo',
				},
				{
					link: '#url',
					text: 'Personal Infos',
					status: 'doing',
				},
				{
					link: '#url',
					text: 'Spouses',
					status: 'todo',
				},
			],
		};
	}

	changeStatus( name, status ) {
		let newState = [];
		this.state.items.map( item => { // lacking IDs we just iterate over the state and id the one we need by it’s text
			if( item.text === name ) {
				item.status = status;
			}

			newState.push( item );
		});

		this.setState({ items: newState });
	}

	render() {
		return (
			<div>
				<AUprogressIndicator dark={ this.props.dark } items={ this.state.items } />

				<button type="button" onClick={ () => { this.changeStatus( 'Personal Infos', 'done' ) } }>Mark "Personal Infos" as done</button>
				<button type="button" onClick={ () => { this.changeStatus( 'Spouses', 'doing' ) } }>Mark "Spouses" as doing</button>
				<button type="button" onClick={ () => { this.changeStatus( 'Business Contacts', 'todo' ) } }>Mark "Business Contacts" as todo</button>
			</div>
		);
	}
}


ReactDOM.render(
	<div className="split-wrapper">
		<div className="split au-body">
		<h2>progress-indicator default</h2>

		<AUprogressIndicator items={[
			{
				link: '#url',
				text: 'Introduction',
				status: 'done',
			},
			{
				link: '#url',
				text: 'Business Contacts',
				status: 'done',
			},
			{
				link: '#url',
				text: 'Case Studies',
				status: 'todo',
			},
			{
				link: '#url',
				text: 'Personal Infos',
				status: 'doing',
			},
			{
				link: '#url',
				text: 'Spouses',
				status: 'todo',
			},
		]} />


		<hr />
		<h2>progress-indicator with additional classes</h2>

		<AUprogressIndicator className="testing" items={[
			{
				link: '#url',
				text: 'Introduction',
				status: 'done',
			},
			{
				link: '#url',
				text: 'Business Contacts',
				status: 'done',
				className: 'testing',
			},
			{
				link: '#url',
				text: 'Case Studies',
				status: 'todo',
				li: {
					className: 'testing',
				},
			},
			{
				link: '#url',
				text: 'Step 1',
				status: 'todo',
			},
			{
				link: '#url',
				text: 'Step 2',
				status: 'todo',
			},
		]} />


		<hr />
		<h2>progress-indicator with no links and onClick</h2>

		<AUprogressIndicator items={[
			{
				text: 'Introduction',
				status: 'done',
				onClick: event => {
					event.preventDefault();

					console.log('This function runs when the first item is clicked');
				},
			},
			{
				text: 'Business Contacts',
				status: 'doing',
				onClick: event => {
					event.preventDefault();

					console.log('This function runs when the second item is clicked');
				},
			},
			{
				text: 'Case Studies',
				status: 'todo',
				onClick: event => {
					event.preventDefault();

					console.log('This function runs when the third item is clicked');
				},
			},
		]} />


		<hr />
		<h2>progress-indicator with state</h2>

		<ProgressIndicatorWrapper />
	</div>
	<div className="split au-body au-body--dark">
		<h2>progress-indicator <code>--dark</code></h2>
		<AUprogressIndicator dark items={[
			{
				link: '#url',
				text: 'Introduction',
				status: 'done',
			},
			{
				link: '#url',
				text: 'Business Contacts',
				status: 'done',
			},
			{
				link: '#url',
				text: 'Case Studies',
				status: 'todo',
			},
			{
				link: '#url',
				text: 'Personal Infos',
				status: 'doing',
			},
			{
				link: '#url',
				text: 'Spouses',
				status: 'todo',
			},
		]} />


		<hr />
		<h2>progress-indicator with additional classes <code>--dark</code></h2>

		<AUprogressIndicator dark className="testing" items={[
			{
				link: '#url',
				text: 'Introduction',
				status: 'done',
			},
			{
				link: '#url',
				text: 'Business Contacts',
				status: 'done',
				className: 'testing',
			},
			{
				link: '#url',
				text: 'Case Studies',
				status: 'todo',
				li: {
					className: 'testing',
				},
			},
			{
				link: '#url',
				text: 'Step 1',
				status: 'todo',
			},
			{
				link: '#url',
				text: 'Step 2',
				status: 'todo',
			},
		]} />


		<hr />
		<h2>progress-indicator with no links and onClick <code>--dark</code></h2>

		<AUprogressIndicator dark items={[
			{
				text: 'Introduction',
				status: 'done',
				onClick: event => {
					event.preventDefault();

					console.log('This function runs when the first item is clicked');
				},
			},
			{
				text: 'Business Contacts',
				status: 'doing',
				onClick: event => {
					event.preventDefault();

					console.log('This function runs when the second item is clicked');
				},
			},
			{
				text: 'Case Studies',
				status: 'todo',
				onClick: event => {
					event.preventDefault();

					console.log('This function runs when the third item is clicked');
				},
			},
		]} />


		<hr />
		<h2>progress-indicator with state <code>--dark</code></h2>

		<ProgressIndicatorWrapper dark />


		<hr />
		<h2>progress-indicator with router</h2>

		<BrowserRouter>
			<Fragment>
				<AUprogressIndicator linkComponent={ Link } dark items={[
					{
						text: 'One',
						status: 'done',
						link: 'one'
					},
					{
						text: 'Two',
						status: 'doing',
						link: 'two'
					},
				]} />
				<br />
				<Route path="/react/one" render={ () => ( <p>Route one</p> )} />
				<Route path="/react/two" render={ () => ( <p>Route two</p> )} />
			</Fragment>
		</BrowserRouter>
	</div>
</div>,

	document.getElementById('root'),
);
