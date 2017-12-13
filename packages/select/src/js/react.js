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
 * DEFAULT
 * The select component
 *
 * @param  {string} dark             - Add the dark variation class
 * @param  {array}  options          - The options for the select, format: { value: '', text: '' }
 * @param  {string} block            - The block option
 * @param  {object} attributeOptions - Any other attribute options
 */
const AUselect = ({ dark, options, block, ...attributeOptions }) => {

	return (
		<div className={`au-select${ block ? ` au-select-block` : `` }${ dark ? ' au-select--dark' : '' }`}>
			<select className="au-select__element" { ...attributeOptions }>
				{ options.map( ( option, i ) => <option key={ i } value={ option.value }>{ option.text }</option> ) }
			</select>
		</div>
	);
};

AUselect.propTypes = {
	dark: PropTypes.bool,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
		})
		).isRequired,
	name: PropTypes.string,
	id: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	block: PropTypes.bool,
	disabled: PropTypes.bool,
};


export default AUselect;
