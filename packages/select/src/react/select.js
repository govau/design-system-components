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
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {array}   options          - The options for the select, format: { value: '', text: '' }
 * @param  {string}  block            - The block option
 * @param  {string}  status           - Mark this field as either 'valid' or 'invalid', optional
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
const AUselect = ({ dark, options, block, status, className = '', ...attributeOptions }) => {

	return (
		<select className={
			`au-select ${ className }` +
			`${ block ? ` au-select--block` : `` }` +
			`${ dark ? ' au-select--dark' : '' }` +
			`${ status === 'valid' ? ' au-select--valid' : '' }` +
			`${ status === 'invalid' ? ' au-select--invalid' : '' }`
		} { ...attributeOptions }>
			{
				options.map(
					( option, i ) => <AUselectItem key={ i } { ...option } />
				)
			}
		</select>
	);
};

AUselect.propTypes = {
	/**
	 * A dark variation of the component
	 */
	dark: PropTypes.bool,
	/**
	 * 
	 */
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
		})
	).isRequired,
	/**
	 * 
	 */
	block: PropTypes.bool,
	/**
	 * 
	 */
	status: PropTypes.oneOf([ 'valid', 'invalid' ]),
	/**
	 * The class name for the element, optional.
	 */
	className: PropTypes.string,
};

export default AUselect;
