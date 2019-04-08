/***************************************************************************************************************************************************************
 *
 * form group function
 *
 * The form component contains layout, labelling and inline validations for form fields
 *
**************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * The form group component
 *
 * @param  {string}  status           - Adds invalid state to form group
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const AUformGroup = ( { status, dark, className, ...attributeOptions } ) => (
	<div className={
		`au-form-group ${ className }` +
		`${ status === 'invalid' ? ' au-form-group--invalid ' : ''}`
		}
		{ ...attributeOptions }
	></div>
);


AUformGroup.propTypes = {
	/**
	 * Adds invalid state to form group
	 */
	status: PropTypes.oneOf(['valid', 'invalid']),
	/**
	 * An additional class, optional
	 */
	className: PropTypes.string,
};

AUformGroup.defaultProps = {
	status: "valid",
	className: ''
}
