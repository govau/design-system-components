import React from 'react';
import ReactDOM from 'react-dom';

import AUselect from './select.js';


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
				<AUselect
					dark={ this.props.dark }
					disabled={ this.props.disabled }
					id="test1"
					onChange={ event => this.changeSelect( event.target.value ) }
					value={ this.state.select }
					options={[
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
	<div className="split-wrapper">
		<div className="split">
		<h2>select default</h2>
			<AUselect id="test2" options={[
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
			<h2>select invalid</h2>
			<AUselect id="test2" status="invalid" options={[
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
			<h2>select valid</h2>
			<AUselect id="test2" status="valid" options={[
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
			<h2>select with additional classes</h2>
			<AUselect id="test2" className="testing" options={[
				{
					value: '',
					text: 'Please select',
				},
				{
					value: '1',
					text: 'Option 1',
					className: 'testing',
				},
				{
					value: '2',
					text: 'Option 2',
				},
			]} />


			<hr />
			<h2>select block</h2>

			<AUselect id="test3" block options={[
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

			<AUselect id="test4" onChange={ () => {
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
			<h2>select disabled <code>--dark</code></h2>
			<AUselect disabled id="test4" onChange={ () => {
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
		</div>
		<div className="split split--dark">
		<h2>select <code>--dark</code></h2>
			<AUselect dark id="test2" options={[
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
			<h2>select invalid <code>--dark</code></h2>
			<AUselect dark id="test2" status="invalid" options={[
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
			<h2>select valid <code>--dark</code></h2>
			<AUselect dark id="test2" status="valid" options={[
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
			<h2>select with additional classes <code>--dark</code></h2>
			<AUselect dark id="test2" className="testing" options={[
				{
					value: '',
					text: 'Please select',
				},
				{
					value: '1',
					text: 'Option 1',
					className: 'testing',
				},
				{
					value: '2',
					text: 'Option 2',
				},
			]} />


			<hr />
			<h2>select block <code>--dark</code></h2>

			<AUselect dark id="test3" block options={[
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
			<h2>select with onchange <code>--dark</code></h2>

			<AUselect dark id="test4" onChange={ () => {
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
			<h2>select disabled <code>--dark</code></h2>
			<AUselect dark disabled id="test4" onChange={ () => {
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
			<h2>select with state <code>--dark</code></h2>

			<SelectWrapper dark />
		</div>
	</div>,

	document.getElementById('root'),
);
