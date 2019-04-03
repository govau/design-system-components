/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * form function
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
	 * 
	 */
	text: PropTypes.string.isRequired,
	/**
	 * 
	 */
	dark: PropTypes.bool,
	/**
	 * 
	 */
	inline: PropTypes.bool,
	/**
	 * 
	 */
	className: PropTypes.string,
};


AUlabel.defaultProps = {
	className: ''
}


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
	 * 
	 */
	text: PropTypes.string.isRequired,
	/**
	 * 
	 */
	alt: PropTypes.bool,
	/**
	 * 
	 */
	dark: PropTypes.bool,
	/**
	 * 
	 */
	className: PropTypes.string,
};


AUhintText.defaultProps = {
	className: ''
}


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
	 * 
	 */
	dark: PropTypes.bool,
	/**
	 * 
	 */
	text: PropTypes.string.isRequired,
	/**
	 * 
	 */
	className: PropTypes.string,
};


AUerrorText.defaultProps = {
	className: ''
}

/**
 * The form group component
 *
 * @param  {string}  status           - Adds invalid state to form group
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const AUformGroup = ( { status, dark, className, ...attributeOptions } ) => (
	<div className={
		`au-form-group ${ className }` +
		`${ dark ? ' au-form-group--dark' : '' }` + 
		`${ status === 'invalid' ? ' au-form-group--invalid ' : ''}`
		}
		{ ...attributeOptions }
	></div>
);


AUformGroup.propTypes = {
	/**
	 * 
	 */
	status: PropTypes.oneOf(['valid', 'invalid']),
	/**
	 * 
	 */
	dark: PropTypes.bool,
	/**
	 * 
	 */
	className: PropTypes.string,
};

AUformGroup.defaultProps = {
	status: "valid",
	className: ''
}


/**
 * The fieldset component
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
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
	 * 
	 */
	dark: PropTypes.bool,
	/**
	 * 
	 */
	className: PropTypes.string,
};


AUfieldset.defaultProps = {
	className: ''
}


/**
 * The legend component
 *
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const AUlegend = ( {...attributeOptions} ) => (
	<legend class="au-fieldset__legend" { ...attributeOptions }></legend>
);
