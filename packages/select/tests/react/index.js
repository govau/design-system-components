import React from 'react';
import ReactDOM from 'react-dom';

import Select from './select.js';


// to test a select with state
class SelectWrapper extends React.Component {
	// for an example on what a state change might look like we have to add a state
	constructor( props ) {
		super( props );

		this.state = {
			select: '2',
		};
	}

	// let’s change the state in the absence of more complex application code
	changeSelect( value ) {
		this.setState({ select: value });
	}

	render() {
		return (
			<div>
				<Select id="test1" onChange={ event => this.changeSelect( event.target.value ) } value={ this.state.select } options={[
					{
						value: '',
						text: 'Please select',
					},
					{
						value: '1',
						text: 'Option 1',
					},
					{
						value: '2',
						text: 'Option 2',
					},
					{
						value: '3',
						text: 'Option 3',
					},
					{
						value: '4',
						text: 'Option 4',
					},
				]} />

				<br /><button type="button" onClick={ () => { this.changeSelect('3') } }>Change select to value 3</button>
			</div>
		);
	};
}


ReactDOM.render(
	<div>
		<h2>select default</h2>

		<Select id="test2" options={[
			{
				value: '',
				text: 'Please select',
			},
			{
				value: '1',
				text: 'Option 1',
			},
			{
				value: '2',
				text: 'Option 2',
			},
			{
				value: '3',
				text: 'Option 3',
			},
			{
				value: '4',
				text: 'Option 4',
			},
		]} />


		<hr />
		<h2>select block</h2>

		<Select id="test3" block options={[
			{
				value: '',
				text: 'Please select',
			},
			{
				value: '1',
				text: 'Option 1',
			},
			{
				value: '2',
				text: 'Option 2',
			},
			{
				value: '3',
				text: 'Option 3',
			},
			{
				value: '4',
				text: 'Option 4',
			},
		]} />


		<hr />
		<h2>select with onchange</h2>

		<Select id="test4" onChange={ () => {
			console.log('This function is called when the select input has changed');
		} } options={[
			{
				value: '1',
				text: 'Option 1',
			},
			{
				value: '2',
				text: 'Option 2',
			},
			{
				value: '3',
				text: 'Option 3',
			},
		]} />


		<hr />
		<h2>select with state</h2>

		<SelectWrapper />
	</div>,

	document.getElementById('root'),
);
