/***************************************************************************************************************************************************************
 *
 * form label function
 *
 * The form component contains layout, labelling and inline validations for form fields
 *
**************************************************************************************************************************************************************/


import React from 'react';
import PropTypes from 'prop-types';


/**
 * The label component
 *
 * @param  {string}  text            - Text of the label, required
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {boolean} inline           - Display the label inline, optional
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const AUlabel = ( { text, dark, inline, className, ...attributeOptions } ) => (
	<label className={
			`au-label ${ className }` +
			`${ dark ? ' au-label--dark' : '' }` +
			`${ inline ? ' au-label--inline' : ''}`
		}
		{ ...attributeOptions }
	>
    { text }
	</label>
);

AUlabel.propTypes = {
	/**
	 * Text of the label, required
	 */
	text: PropTypes.string.isRequired,
	/**
	 * Add the dark variation class, optional
	 */
	dark: PropTypes.bool,
	/**
	 * Display the label inline, optional
	 */
	inline: PropTypes.bool,
	/**
	 * An additional class, optional
	 */
	className: PropTypes.string,
};


AUlabel.defaultProps = {
	className: ''
}
