/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * control-input function
 *
 * Control inputs include radio buttons and checkboxes. They allow users to select one or more options.
 *
 **************************************************************************************************************************************************************/

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * The checkbox component
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {boolean} alt              - Add the alt variation class, optional
 * @param  {boolean} small            - Add the small variation class
 * @param  {boolean} block            - Add the block variation class
 * @param  {string}  label            - The label
 * @param  {string}  status           - Mark this field as either 'valid' or 'invalid', optional
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 *
 */
export const AUcheckbox = ({ dark, alt, small, block, label, status, className = '', ...attributeOptions }) => {
	return (
		<label className={
			`au-control-input ${ className }` +
			`${ dark ? ' au-control-input--dark' : '' }` +
			`${ alt ? ' au-control-input--alt' : '' }` +
			`${ small ? ' au-control-input--small' : '' }` +
			`${ block ? ` au-control-input--block` : '' }` +
			`${ status === 'valid' ? ' au-control-input--valid' : '' }` +
			`${ status === 'invalid' ? ' au-control-input--invalid' : '' }`
		}>
			<input className="au-control-input__input" type="checkbox" { ...attributeOptions } />
			<span className="au-control-input__text">{ label }</span>
		</label>
	);
};

AUcheckbox.propTypes = {
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	small: PropTypes.bool,
	block: PropTypes.bool,
	label: PropTypes.string.isRequired,
	status: PropTypes.oneOf([ 'valid', 'invalid' ]),
	className: PropTypes.string,
};


/**
 * The radio component
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {boolean} alt              - Add the alt variation class, optional
 * @param  {boolean} small            - Add the small variation class
 * @param  {boolean} block            - Add the block variation class
 * @param  {string}  label            - The label
 * @param  {string}  status           - Mark this field as either 'valid' or 'invalid', optional
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const AUradio = ({ dark, alt, small, block, label, status, className = '', ...attributeOptions }) => {

	return (
		<label className={
			`au-control-input ${ className }` +
			`${ dark ? ` au-control-input--dark` : '' }` +
			`${ alt ? ` au-control-input--alt` : '' }` +
			`${ small ? ` au-control-input--small` : '' }` +
			`${ block ? ` au-control-input--block` : '' }` +
			`${ status === 'valid' ? ' au-control-input--valid' : '' }` +
			`${ status === 'invalid' ? ' au-control-input--invalid' : '' }`
		} >
			<input className="au-control-input__input" type="radio" { ...attributeOptions } />
			<span className="au-control-input__text">{ label }</span>
		</label>
	);
};

AUradio.propTypes = {
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	small: PropTypes.bool,
	block: PropTypes.bool,
	label: PropTypes.string.isRequired,
	status: PropTypes.oneOf([ 'valid', 'invalid' ]),
	className: PropTypes.string,
};


export class AURadioList extends React.Component {
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

	toggleRadioBox(radio) {
		// this.props.toggleRadioBox(radio);
		console.log(radio);
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
						block = { this.props.block }
						full={ this.props.full }
						value={ item.value }
						required={ this.required }
						disabled={ item.disabled }
						checked={ this.state.radio === item.value }
						onChange={ () => {
							this.toggleRadioBox(item.value);
						} }
						className={ item.className }
					/>
				) }
			</div>
		);
	};
}

AURadioList.propTypes = {

}



// to test a nice list of checkboxs
export class AUcheckboxList extends React.Component {
	// for an example on what a state change might look like we have to add a state
	constructor( props ) {
		super( props );

		// set the default select state
		let checkboxState = {};
		this.props.items.map( item => checkboxState[ item.value ] = item.checked ? true : false );

		this.state = checkboxState;
	}

	// toggleCheckBox = (checkboxValue) => {
	// 	this.props.updateCheckbox(checkboxValue);
	// }

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
						// onChange={ () => {
						// 	this.toggleCheckBox(item.value);
						// } }
						className={ item.className }
					/>
				) }
			</div>
		);
	};
}
