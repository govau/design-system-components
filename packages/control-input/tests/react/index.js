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
						required={ this.required }
						disabled={ item.disabled }
						checked={ this.state.radio === item.value }
						onChange={ () => {
							this.setState({ radio: item.value });

							if( typeof item.onChange === 'function' ) {
								item.onChange();
							}
						} }
						className={ item.className }
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
						required={ this.required }
						disabled={ item.disabled }
						checked={ this.state[ item.value ] }
						onChange={ () => {
							this.setState({ [item.value]: !this.state[ item.value ] });

							if( typeof item.onChange === 'function' ) {
								item.onChange();
							}
						} }
						className={ item.className }
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
						id: 'cb-phone',
					},
					{
						label: 'Tablet',
						value: 'tablet',
						checked: true,
						id: 'cb-tablet',
					},
					{
						label: 'Laptop',
						value: 'laptop',
						id: 'cb-laptop',
					},
					{
						label: 'Mobile',
						value: 'mobile',
						className: 'testing',
						id: 'cb-mobile',
					},
					{
						label: 'Fax',
						value: 'fax',
						disabled: true,
						checked: true,
						id: 'cb-fax',
					},
				]} />


				<hr />
				<h2>radio buttons</h2>
				<RadioList name="radio-ex" items={[
					{
						label: 'Yes',
						value: 'yes',
						id: 'radio-yes',
					},
					{
						label: 'Maybe',
						value: 'maybe',
						id: "radio-maybe"
					},
					{
						label: 'No',
						value: 'no',
						className: 'testing',
						id: "radio-no"
					},
					{
						label: 'What',
						value: 'what',
						disabled: true,
						checked: true,
						id: "radio-what"
					},
				]} />


				<hr/>
				<h2>control-inputs <code> --block</code></h2>
				<AUcheckbox id="cb-block" label="I agree" block />
				<AUradio id="radio-block" label="Maybe" block />


				<hr/>
				<h2>control-inputs <code>--small</code></h2>
				<AUcheckbox id="cb-small" label="I agree" small />
				<AUradio id="radio-small" label="Maybe" small />


				<hr />
				<h2>invalid checkboxes with and without classes</h2>
				<AUcheckbox id="cb-invalid-class" label="I agree" status="invalid" defaultChecked />
				<AUcheckbox id="cb-invalid" label="I agree" required />


				<hr />
				<h2>invalid radio buttons with and without classes</h2>
				<AUradio id="radio-invalid-class" label="I agree" status="invalid" defaultChecked />
				<AUradio id="radio-invalid" label="I agree" required />


				<hr />
				<h2>control-inputs with <code>onChange</code></h2>
				<CheckboxList name="checkbox-ex2" items={[
					{
						label: 'Phone',
						value: 'phone',
						onChange: () => { console.log('This function will run when the first checkbox is changed') },
						id:"cb-phone-onchange"
					},
					{
						label: 'Tablet',
						value: 'tablet',
						checked: true,
						onChange: () => { console.log('This function will run when the second checkbox is changed') },
						id:"cb-tablet-onchange"
					},
				]} />

				<hr />

				<RadioList name="radio-ex2" items={[
					{
						label: 'Yes',
						value: 'yes',
						onChange: () => { console.log('This function will run when the first radio button is changed') },
						id:"radio-yes-onchange"
					},
					{
						label: 'Maybe',
						value: 'maybe',
						onChange: () => { console.log('This function will run when the second radio button is changed') },
						id:"radio-maybe-onchange"
					},
				]} />
			</div>
			<div className="split split--dark">
				<h2>checkboxes <code>--dark</code></h2>
				<CheckboxList dark name="checkbox-ex-dark" items={[
					{
						label: 'Phone',
						value: 'phone',
						id:"dark-cbl-phone"
					},
					{
						label: 'Tablet',
						value: 'tablet',
						checked: true,
						id: "dark-cbl-tab"
					},
					{
						label: 'Laptop',
						value: 'laptop',
						id:"dark-cbl-lap"
					},
					{
						label: 'Mobile',
						value: 'mobile',
						className: 'testing',
						id:"dark-cbl-mob"
					},
					{
						label: 'Fax',
						value: 'fax',
						id:"dark-cbl-fax",
						disabled: true,
						checked: true,
					},
				]} />


				<hr />
				<h2>radio buttons <code>--dark</code></h2>
				<RadioList dark name="radio-ex-dark" items={[
					{
						label: 'Yes',
						value: 'yes',
						id: "rl-dark-yes"
					},
					{
						label: 'Maybe',
						value: 'maybe',
						id: "rl-dark-maybe"
					},
					{
						label: 'No',
						value: 'no',
						className: 'testing',
						id: "rl-dark-no"
					},
					{
						label: 'What',
						value: 'what',
						disabled: true,
						checked: true,
						id: "rl-dark-what"
					},
				]} />


				<hr/>
				<h2>control-inputs <code>--dark --block</code></h2>
				<AUcheckbox id="cb-dark-block" label="I agree" block dark />
				<AUradio id="radio-dark-block" label="Maybe" block dark />


				<hr/>
				<h2>control-inputs <code>--dark --small</code></h2>
				<AUcheckbox id="cb-dark-small" label="I agree" dark small />
				<AUradio id="radio-dark-block-small" label="Maybe" dark small />


				<hr />
				<h2>invalid checkboxes with and without classes <code>--dark</code></h2>
				<AUcheckbox id="cb-dark-class-invalid" dark label="I agree" status="invalid" defaultChecked />
				<AUcheckbox id="cb-dark-invalid" dark label="I agree" required />


				<hr />
				<h2>invalid radio buttons with and without classes <code>--dark</code></h2>
				<AUradio id="radio-dark-class-invalid" dark label="I agree" status="invalid" defaultChecked />
				<AUradio id="radio-dark-invalid" dark label="I agree" required />
			</div>
		</div>
		<div className="split-wrapper">
			<div className="split split--alt">
				<h2>checkboxes <code>--alt</code></h2>
				<CheckboxList alt name="checkbox-ex-alt" items={[
					{
						label: 'Phone',
						value: 'phone',
						id: 'cbl-alt-phone',
					},
					{
						label: 'Tablet',
						value: 'tablet',
						checked: true,
						id: 'cbl-alt-tab'
					},
					{
						label: 'Laptop',
						value: 'laptop',
						id: 'cbl-alt-lap'
					},
					{
						label: 'Mobile',
						value: 'mobile',
						className: 'testing',
						id: 'cbl-alt-test'
					},
					{
						label: 'Fax',
						value: 'fax',
						disabled: true,
						checked: true,
						id: 'cbl-alt-fax'
					},
				]} />


				<hr />
				<h2>radio buttons <code>--alt</code></h2>
				<RadioList alt name="radio-ex-alt" items={[
					{
						label: 'Yes',
						value: 'yes',
						id: 'yesRadio',
						id: 'rl-alt-yes'
					},
					{
						label: 'Maybe',
						value: 'maybe',
						id: 'rl-alt-maybe'
					},
					{
						label: 'No',
						value: 'no',
						className: 'testing',
						id: 'rl-alt-no'
					},
					{
						label: 'What',
						value: 'what',
						disabled: true,
						checked: true,
						id: 'rl-alt-what'
					},
				]} />


				<hr/>
				<h2>control-inputs <code>--alt --block</code></h2>
				<AUcheckbox id="cb-alt-block" label="I agree" alt block />
				<AUradio id="cb-radio-block" label="Maybe" alt block />


				<hr/>
				<h2>control-inputs <code>--alt --small</code></h2>
				<AUcheckbox id="cb-alt-small" label="I agree" alt small />
				<AUradio id="radio-alt-small" label="Maybe" alt small />


				<hr />
				<h2>invalid checkboxes with and without classes <code>--alt</code></h2>
				<AUcheckbox id="cb-alt-invalid-class" alt label="I agree" status="invalid" defaultChecked />
				<AUcheckbox id="cb-alt-block-invalid" alt label="I agree" required />


				<hr />
				<h2>invalid radio buttons with and without classes <code>--alt</code></h2>
				<AUradio id="radio-alt-invalid-class" alt label="I agree" status="invalid" defaultChecked />
				<AUradio id="radio-alt-invalid" alt label="I agree" required />
			</div>
			<div className="split split--alt split--dark">
				<h2>checkboxes <code>--alt --dark</code></h2>
				<CheckboxList dark alt name="checkbox-ex-alt-dark" items={[
					{
						label: 'Phone',
						value: 'phone',
						id: 'cbl-dark-alt-phone'
					},
					{
						label: 'Tablet',
						value: 'tablet',
						checked: true,
						id: 'cbl-dark-alt-tab'
					},
					{
						label: 'Laptop',
						value: 'laptop',
						id: 'cbl-dark-alt-lap'
					},
					{
						label: 'Mobile',
						value: 'mobile',
						className: 'testing',
						id: 'cbl-dark-alt-mob'
					},
					{
						label: 'Fax',
						value: 'fax',
						disabled: true,
						checked: true,
						id: 'cbl-dark-alt-fax'
					},
				]} />


				<hr />
				<h2>radio buttons <code>--alt --dark</code></h2>
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
						className: 'testing',
					},
					{
						label: 'What',
						value: 'what',
						disabled: true,
						checked: true,
					},
				]} />


				<hr/>
				<h2>control-inputs <code>--alt --dark --block</code></h2>
				<AUcheckbox id="cb-alt-dark-block" label="I agree" alt dark block />
				<AUradio id="radio-alt-dark-block"  label="Maybe" alt dark block />


				<hr/>
				<h2>control-inputs <code>--alt --dark --small</code></h2>
				<AUcheckbox id="cb-alt-dark-small"  label="I agree" alt dark small />
				<AUradio id="radio-alt-dark-small"  label="Maybe" alt dark small />


				<hr />
				<h2>invalid checkboxes with and without classes <code>--alt --dark</code></h2>
				<AUcheckbox id="cb-alt-dark-invalid-class"  alt dark label="I agree" status="invalid" defaultChecked />
				<AUcheckbox id="cb-alt-dark-invalid"  alt dark label="I agree" required />


				<hr />
				<h2>invalid radio buttons with and without classes <code>--alt --dark</code></h2>
				<AUradio id="radio-alt-dark-invalid-class" alt dark label="I agree" status="invalid" defaultChecked />
				<AUradio id="radio-alt-dark-invalid" alt dark label="I agree" required />
			</div>
		</div>
	</div>,

	document.getElementById('root'),
);
