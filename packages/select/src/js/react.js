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


/**
 * DEFAULT
 * The select component
 *
 * @param  {array}    options  - The options for the select, format: { value: '', text: '' }
 * @param  {string}   id       - The ID for the select for the label
 * @param  {string}   name     - The name attribute
 * @param  {string}   value    - An optional pre-selected value, needs onChange
 * @param  {function} onChange - A function to be called on change
 * @param  {string}   block    - The block option
 */
const Select = ({ options, id, name, value, onChange, block }) => {

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
		<div className={`uikit-select${ block ? ` uikit-select-block` : `` }`}>
			<select className="uikit-select__element" { ...attributeOptions }>
				{ options.map( ( option, i ) => <option key={ i } value={ option.value }>{ option.text }</option> ) }
			</select>
		</div>
	);
};

Select.propTypes = {
	options: PropTypes.array.isRequired,
	name: PropTypes.string,
	value: PropTypes.string,
	id: PropTypes.string,
	onChange: PropTypes.func,
	block: PropTypes.bool,
};

export default Select;
