/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * form fieldset function
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
 * The fieldset component
 *
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const AUfieldset = ( { dark, className, ...attributeOptions } ) => (
	<fieldset className={
			`au-fieldset ${ className }` +
			`${ dark ? ' au-fieldset--dark' : '' }`
		}
		{ ...attributeOptions }
	>
	</fieldset>
);


AUfieldset.propTypes = {
	/**
	 * An additional class, optional
	 */
	className: PropTypes.string,
};


AUfieldset.defaultProps = {
	className: ''
}
