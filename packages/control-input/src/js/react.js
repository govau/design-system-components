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


/**
 * The radio component
 *
 */
export class AUradioList extends React.Component {
	// for an example on what a state change might look like we have to add a state
	constructor( props ) {
		super( props );

		let radioState = '';
		this.props.items.map( item => item.checked ? radioState = item.value : '' );

		this.state = {
			radio: radioState,
		};
	}

	toggleRadioBox( item ) {
		this.setState({ radio: item.value });

		// called when any radio box in the group is changed
		if ( typeof this.props.toggleRadioBox === 'function' ) {
			this.props.toggleRadioBox( item.value );
		}

		// when an individual radio box has an on change function
		if ( typeof item.onChange === 'function' ) {
			item.onChange();
		}

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
						className={ item.className }
						id={ item.id }
						block = { this.props.block }
						full={ this.props.full }
						value={ item.value }
						required={ this.required }
						disabled={ item.disabled }
						checked={ this.state.radio === item.value }
						status = { item.status }
						onChange={ () => {
							this.toggleRadioBox( item );
						} }
						className={ item.className }
					/>
				) }
			</div>
		);
	};
}

AUradioList.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
			id: PropTypes.string,
			className: PropTypes.string,
			checked: PropTypes.bool,
			disabled: PropTypes.bool,
			status: PropTypes.oneOf([ 'valid', 'invalid' ]),
			onChange: PropTypes.func
		})).isRequired,
		name: PropTypes.string.isRequired,
		dark: PropTypes.bool,
		alt: PropTypes.bool,
}



/**
 * The radio component
 *
 */
export class AUcheckboxList extends React.Component {
	// for an example on what a state change might look like we have to add a state
	constructor( props ) {
		super( props );

		// set the default select state
		let checkboxState = {};
		this.props.items.map( item => checkboxState[ item.value ] = item.checked ? true : false );

		this.state = checkboxState;
	}

	toggleCheckBox( item ) {
		this.setState({ [item.value]: !this.state[ item.value ] });

		// called when any checkbox in the group is changed
		if ( typeof this.props.toggleCheckBox === 'function' ) {
			this.props.toggleCheckBox( item.value );
		}

		// when an individual checkbox has an on change function
		if ( typeof item.onChange === 'function' ) {
			item.onChange();
		}

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
						className={ item.className }
						id={ item.id }
						block = { this.props.block }
						full={ this.props.full }
						value={ item.value }
						required={ this.required }
						disabled={ item.disabled }
						checked={ this.state[ item.value ] }
						status = { item.status }
						onChange={ () => {
							this.toggleCheckBox(item);
						} }
						className={ item.className }
					/>
				) }
			</div>
		);
	};
}
AUcheckboxList.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
			className: PropTypes.string,
			checked: PropTypes.bool,
			disabled: PropTypes.bool,
			status: PropTypes.string,
			onChange: PropTypes.func
		})).isRequired,
		name: PropTypes.string.isRequired,
		dark: PropTypes.bool,
		alt: PropTypes.bool,
}
