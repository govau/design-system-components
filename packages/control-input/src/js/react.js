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
 * @param  {string}   dark             - Add the dark variation class
 * @param  {string}   alt              - Add the alt variation class
 * @param  {string}   label            - The label
 * @param  {object}   attributeOptions - Any other attribute options
 *
 */
export const AUcheckbox = ({ dark, alt, label, ...attributeOptions }) => {
	return (
		<label className={ `au-control-input${ dark ? ' au-control-input--dark' : '' }${ alt ? ' au-control-input--alt' : '' }` }>
			<input className="au-control-input__input" type="checkbox" { ...attributeOptions } />
			<span className="au-control-input__text">{ label }</span>
		</label>
	);
};

AUcheckbox.propTypes = {
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	label: PropTypes.string.isRequired,
	name: PropTypes.string,
	value: PropTypes.string.isRequired,
	id: PropTypes.string,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
};


/**
 * The radio component
 *
 * @param  {string}   dark             - Add the dark variation class
 * @param  {string}   alt              - Add the alt variation class
 * @param  {string}   label            - The label
 * @param  {object}   attributeOptions - Any other attribute options
 */
export const AUradio = ({ dark, alt, label, ...attributeOptions }) => {

	return (
		<label className={ `au-control-input${ dark ? ` au-control-input--dark` : '' }${ alt ? ` au-control-input--alt` : '' }` } >
			<input className="au-control-input__input" type="radio" { ...attributeOptions } />
			<span className="au-control-input__text">{ label }</span>
		</label>
	);
};

AUradio.propTypes = {
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	label: PropTypes.string.isRequired,
	name: PropTypes.string,
	value: PropTypes.string.isRequired,
	id: PropTypes.string,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
};
