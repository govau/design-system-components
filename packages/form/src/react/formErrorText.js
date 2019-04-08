/***************************************************************************************************************************************************************
 *
 * form error text function
 *
 * The form component contains layout, labelling and inline validations for form fields
 *
**************************************************************************************************************************************************************/


import React from 'react';
import PropTypes from 'prop-types';


/**
 * The error text component
 *
 * @param  {string}  text            - Text of the label, required
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {boolean} inline           - Display the error text inline, optional
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const AUerrorText = ( { text, dark, inline, className, ...attributeOptions } ) => (
	<span className={
		`au-error-text ${ className }` +
		`${ dark ? ' au-error-text--dark' : '' }` +
		`${ inline ? ' au-error-text--inline' : '' }`
		}
		{ ...attributeOptions }
	>
	{ text }
	</span>
);


AUerrorText.propTypes = {
	/**
	 * Text of the label, required
	 */
	dark: PropTypes.bool,
	/**
	 * Add the dark variation class, optional
	 */
	text: PropTypes.string.isRequired,
	/**
	 * Display the error text inline, optional
	 */
	inline: PropTypes.bool,
	/**
	 * An additional class, optional
	 */
	className: PropTypes.string,
};


AUerrorText.defaultProps = {
	className: ''
}
