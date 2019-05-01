/***************************************************************************************************************************************************************
 *
 * form hint text function
 *
 * The form component contains layout, labelling and inline validations for form fields
 *
**************************************************************************************************************************************************************/


import React from 'react';
import PropTypes from 'prop-types';


/**
 * The hint text component
 *
 * @param  {string}  text             - Text of the label, required
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {boolean} alt              - Add the alt variation class, optional
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const AUhintText = ( { text, dark, alt, className, ...attributeOptions } ) => (
	<span className={
		`au-hint-text ${ className }` +
		`${ alt ? ' au-hint-text--alt' : '' }` +
		`${ dark ? ' au-hint-text--dark' : '' }`
		}
		{ ...attributeOptions }
	>
    { text }
	</span>
);


AUhintText.propTypes = {
	/**
	 * Text of the label, required
	 */
	text: PropTypes.string.isRequired,
	/**
	 * Add the dark variation class, optional
	 */
	alt: PropTypes.bool,
	/**
	 * Add the alt variation class, optional
	 */
	dark: PropTypes.bool,
	/**
	 * An additional class, optional
	 */
	className: PropTypes.string,
};


AUhintText.defaultProps = {
	className: ''
}
