/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * select function
 *
 * The form select element for multiple options
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * All theme options
 *
 * @type {Object}
 */
const themes = {
	light: '',
	dark: 'au-select--dark',
};


/**
 * DEFAULT
 * The select component
 *
 * @param  {string}   theme    - The colour theme of the component
 * @param  {array}    options  - The options for the select, format: { value: '', text: '' }
 * @param  {string}   id       - The ID for the select for the label
 * @param  {string}   name     - The name attribute
 * @param  {string}   value    - An optional pre-selected value, needs onChange
 * @param  {function} onChange - A function to be called on change
 * @param  {string}   block    - The block option
 */
const Select = ({ theme, options, id, name, value, onChange, block }) => {

	const attributeOptions = {};

	if( typeof id !== 'undefined' ) {
		attributeOptions.id = id;
	}

	if( typeof name !== 'undefined' ) {
		attributeOptions.name = name;
	}

	if( typeof value !== 'undefined' ) {
		attributeOptions.value = value;
	}

	if( typeof onChange === 'function' ) {
		attributeOptions.onChange = onChange;
	}

	return (
		<div className={`au-select${ block ? ` au-select-block` : `` } ${ theme ? themes[ theme ] : '' }`}>
			<select className="au-select__element" { ...attributeOptions }>
				{ options.map( ( option, i ) => <option key={ i } value={ option.value }>{ option.text }</option> ) }
			</select>
		</div>
	);
};

Select.propTypes = {
	theme: PropTypes.oneOf([ 'light', 'dark' ]),
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
		})
		).isRequired,
	name: PropTypes.string,
	value: PropTypes.string,
	id: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	block: PropTypes.bool,
};

Select.defaultProps = {
	theme: 'light',
};

export default Select;
