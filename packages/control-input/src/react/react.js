/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * control-input function
 *
 * Control inputs include radio buttons and checkboxes. They allow users to select one or more options.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
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
 * @param  {string}  label            - The label text
 * @param  {string}  status           - Mark this field as either 'valid' or 'invalid', optional
 * @param  {string}  id               - The id of the checkbox input
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 *
 */
export const AUcheckbox = ({ dark, alt, small, block, label, status, id, className = '', ...attributeOptions }) => {
	return (
		<div className={
			`au-control-input ${ className }` +
			`${ dark ? ' au-control-input--dark' : '' }` +
			`${ alt ? ' au-control-input--alt' : '' }` +
			`${ small ? ' au-control-input--small' : '' }` +
			`${ block ? ` au-control-input--block` : '' }` +
			`${ status === 'valid' ? ' au-control-input--valid' : '' }` +
			`${ status === 'invalid' ? ' au-control-input--invalid' : '' }`
		}>
			<input className="au-control-input__input" id={ id } type="checkbox" { ...attributeOptions } />
			<label className="au-control-input__text" htmlFor={ id }>{ label }</label>
		</div>
	);
};

AUcheckbox.propTypes = {
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	small: PropTypes.bool,
	block: PropTypes.bool,
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired, 
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
 * @param  {string}  label            - The label text
 * @param  {string}  status           - Mark this field as either 'valid' or 'invalid', optional
 * @param  {string}  id               - The id of the radio input
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const AUradio = ({ dark, alt, small, block, label, status, id, className = '', ...attributeOptions }) => {

	return (
		<div className={
			`au-control-input ${ className }` +
			`${ dark ? ` au-control-input--dark` : '' }` +
			`${ alt ? ` au-control-input--alt` : '' }` +
			`${ small ? ` au-control-input--small` : '' }` +
			`${ block ? ` au-control-input--block` : '' }` +
			`${ status === 'valid' ? ' au-control-input--valid' : '' }` +
			`${ status === 'invalid' ? ' au-control-input--invalid' : '' }`
		} >
			<input className="au-control-input__input" type="radio" id= { id } { ...attributeOptions } />
			<label className="au-control-input__text" htmlFor = { id }>{ label }</label>
		</div>
	);
};

AUradio.propTypes = {
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	small: PropTypes.bool,
	block: PropTypes.bool,
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	status: PropTypes.oneOf([ 'valid', 'invalid' ]),
	className: PropTypes.string,
};
