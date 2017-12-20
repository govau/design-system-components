import React from 'react';
import ReactDOM from 'react-dom';

import { AUcheckbox, AUradio } from './control-input.js';


// to test a nice list of radio buttons
class RadioList extends React.Component {
	// for an example on what a state change might look like we have to add a state
	constructor( props ) {
		super( props );

		// set the default select state
		let radioState = '';
		this.props.items.map( item => item.checked ? radioState = item.value : '' );

		this.state = {
			radio: radioState,
		};
	}

	render() {
		return (
			<div>
				{ this.props.items.map( ( item, i ) =>
					<AUradio
						key={ i }
						dark={ this.props.dark }
						alt={ this.props.alt }
						label={ item.label }
						name={ this.props.name }
						id={ item.id }
						full={ this.props.full }
						value={ item.value }
						disabled={ item.disabled }
						checked={ this.state.radio === item.value }
						onChange={ () => {
							this.setState({ radio: item.value });

							if( typeof item.onChange === 'function' ) {
								item.onChange();
							}
						} }
					/>
				) }
			</div>
		);
	};
}


// to test a nice list of checkboxs
class CheckboxList extends React.Component {
	// for an example on what a state change might look like we have to add a state
	constructor( props ) {
		super( props );

		// set the default select state
		let checkboxState = {};
		this.props.items.map( item => checkboxState[ item.value ] = item.checked ? true : false );

		this.state = checkboxState;
	}

	render() {
		return (
			<div>
				{ this.props.items.map( ( item, i ) =>
					<AUcheckbox
						key={ i }
						dark={ this.props.dark }
						alt={ this.props.alt }
						label={ item.label }
						name={ this.props.name }
						id={ item.id }
						full={ this.props.full }
						value={ item.value }
						disabled={ item.disabled }
						checked={ this.state[ item.value ] }
						onChange={ () => {
							this.setState({ [item.value]: !this.state[ item.value ] });

							if( typeof item.onChange === 'function' ) {
								item.onChange();
							}
						} }
					/>
				) }
			</div>
		);
	};
}


ReactDOM.render(
	<div>
		<div className="split-wrapper">
			<div className="split">
			<h2>checkboxes</h2>
				<CheckboxList name="checkbox-ex" items={[
					{
						label: 'Phone',
						value: 'phone',
						id: 'phoneCheckbox'
					},
					{
						label: 'Tablet',
						value: 'tablet',
						checked: true,
					},
					{
						label: 'Laptop',
						value: 'laptop',
					},
					{
						label: 'Mobile',
						value: 'mobile',
					},
					{
						label: 'Fax',
						value: 'fax',
						disabled: true,
						checked: true,
					},
				]} />


				<hr />
				<h2>radio buttons</h2>
				<RadioList name="radio-ex" items={[
					{
						label: 'Yes',
						value: 'yes',
						id: 'yesRadio'
					},
					{
						label: 'Maybe',
						value: 'maybe',
					},
					{
						label: 'No',
						value: 'no',
					},
					{
						label: 'What',
						value: 'what',
						disabled: true,
						checked: true,
					},
				]} />


				<hr />
				<h2>control-inputs with <code>onChange</code></h2>

				<p>
					<CheckboxList name="checkbox-ex2" items={[
						{
							label: 'Phone',
							value: 'phone',
							onChange: () => { console.log('This function will run when the first checkbox is changed') },
						},
						{
							label: 'Tablet',
							value: 'tablet',
							checked: true,
							onChange: () => { console.log('This function will run when the second checkbox is changed') },
						},
					]} />
				</p>


				<p>
					<RadioList name="radio-ex2" items={[
						{
							label: 'Yes',
							value: 'yes',
							onChange: () => { console.log('This function will run when the first radio button is changed') },
						},
						{
							label: 'Maybe',
							value: 'maybe',
							onChange: () => { console.log('This function will run when the second radio button is changed') },
						},
					]} />
				</p>
			</div>
			<div className="split split--dark">
				<h2>checkboxes</h2>
				<CheckboxList dark name="checkbox-ex-dark" items={[
					{
						label: 'Phone',
						value: 'phone',
					},
					{
						label: 'Tablet',
						value: 'tablet',
						checked: true,
					},
					{
						label: 'Laptop',
						value: 'laptop',
					},
					{
						label: 'Mobile',
						value: 'mobile',
					},
					{
						label: 'Fax',
						value: 'fax',
						disabled: true,
						checked: true,
					},
				]} />


				<hr />
				<h2>radio buttons</h2>
				<RadioList dark name="radio-ex-dark" items={[
					{
						label: 'Yes',
						value: 'yes',
					},
					{
						label: 'Maybe',
						value: 'maybe',
					},
					{
						label: 'No',
						value: 'no',
					},
					{
						label: 'What',
						value: 'what',
						disabled: true,
						checked: true,
					},
				]} />
			</div>
		</div>
		<div className="split-wrapper">
			<div className="split split--alt">
			<h2>checkboxes</h2>
				<CheckboxList alt name="checkbox-ex-alt" items={[
					{
						label: 'Phone',
						value: 'phone',
						id: 'phoneCheckbox'
					},
					{
						label: 'Tablet',
						value: 'tablet',
						checked: true,
					},
					{
						label: 'Laptop',
						value: 'laptop',
					},
					{
						label: 'Mobile',
						value: 'mobile',
					},
					{
						label: 'Fax',
						value: 'fax',
						disabled: true,
						checked: true,
					},
				]} />


				<hr />
				<h2>radio buttons</h2>
				<RadioList alt name="radio-ex-alt" items={[
					{
						label: 'Yes',
						value: 'yes',
						id: 'yesRadio'
					},
					{
						label: 'Maybe',
						value: 'maybe',
					},
					{
						label: 'No',
						value: 'no',
					},
					{
						label: 'What',
						value: 'what',
						disabled: true,
						checked: true,
					},
				]} />


				<hr />
				<h2>control-inputs with <code>onChange</code></h2>

				<p>
					<CheckboxList alt name="checkbox-ex-alt2" items={[
						{
							label: 'Phone',
							value: 'phone',
							onChange: () => { console.log('This function will run when the first checkbox is changed') },
						},
						{
							label: 'Tablet',
							value: 'tablet',
							checked: true,
							onChange: () => { console.log('This function will run when the second checkbox is changed') },
						},
					]} />
				</p>


				<RadioList alt name="radio-ex-alt2" items={[
					{
						label: 'Yes',
						value: 'yes',
						onChange: () => { console.log('This function will run when the first radio button is changed') },
					},
					{
						label: 'Maybe',
						value: 'maybe',
						onChange: () => { console.log('This function will run when the second radio button is changed') },
					},
				]} />
			</div>
			<div className="split split--alt split--dark">
				<h2>checkboxes</h2>
				<CheckboxList dark alt name="checkbox-ex-alt-dark" items={[
					{
						label: 'Phone',
						value: 'phone',
					},
					{
						label: 'Tablet',
						value: 'tablet',
						checked: true,
					},
					{
						label: 'Laptop',
						value: 'laptop',
					},
					{
						label: 'Mobile',
						value: 'mobile',
					},
					{
						label: 'Fax',
						value: 'fax',
						disabled: true,
						checked: true,
					},
				]} />


				<hr />
				<h2>radio buttons</h2>
				<RadioList dark alt name="radio-ex-dark-alt" items={[
					{
						label: 'Yes',
						value: 'yes',
					},
					{
						label: 'Maybe',
						value: 'maybe',
					},
					{
						label: 'No',
						value: 'no',
					},
					{
						label: 'What',
						value: 'what',
						disabled: true,
						checked: true,
					},
				]} />
			</div>
		</div>
	</div>,

	document.getElementById('root'),
);
