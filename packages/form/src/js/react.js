/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * footer function
 *
 * Footers help users who reach the bottom of a page without finding what they want.
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
 * The label component
 *
 * @param  {string}  title            - Title of the label, required
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {boolean} inline           - Display the label inline, optional
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const AUlabel = ({ title, dark, inline, className = '', ...attributeOptions }) => (
	<label
		className={ `au-label ${ className }` +
		`${ dark ? ' au-label--dark' : '' }` + 
		`${ inline ? 'au-label--inline' : ''}`
		}
		{ ...attributeOptions }
	>
    {title}
	</label>
);

AUlabel.propTypes = {
	title: PropTypes.string.isRequired,
	dark: PropTypes.bool,
	inline: PropTypes.bool,
	className: PropTypes.string,
};

/**
 * DEFAULT
 * The hint text component
 *
 * @param  {string}  title            - Title of the label, required
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const AUhintText = ({ title, dark,  className = '', ...attributeOptions }) => (
	<span
		className={ `au-hint-text ${ className }` +
		`${ dark ? ' au-hint-text--dark' : '' }`
		}
		{ ...attributeOptions }
	>
    {title}
	</span>
);

AUhintText.propTypes = {
	title: PropTypes.string.isRequired,
	dark: PropTypes.bool,
	className: PropTypes.string,
};



/**
 * The error component
 *
 * @param  {string}  title            - Title of the label, required
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const AUerrorText = ({ title, dark, className = '', ...attributeOptions }) => (
	<span
		className={ `au-error-text ${ className }` +
		`${ dark ? ' au-error-text--dark' : '' }`
		}
		{ ...attributeOptions }
	>
    {title}
	</span>
);

AUerrorText.propTypes = {
	dark: PropTypes.bool,
	title: PropTypes.string.isRequired,
	className: PropTypes.string,
};


/**
 * The form group component
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const AUformGroup = ({ status, dark, className = '', ...attributeOptions }) => (
	<div
		className={ `au-form-group ${ className }` +
		`${ dark ? ' au-form-group--dark' : '' }` + 
		`${ status === 'invalid' ? 'au-form-group--invalid ' : ' '}`
		}
		{ ...attributeOptions }
	>

	</div>
);

AUformGroup.propTypes = {
	status: PropTypes.oneOf(['valid', 'invalid']),
	dark: PropTypes.bool,
	className: PropTypes.string,
};

AUformGroup.defaultProps = {
	status: "valid"
}


/**
 * The fieldset component
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const AUfieldset = ({ dark, className = '', ...attributeOptions }) => (
	<fieldset
		className={ `au-fieldset ${ className }` +
		`${ dark ? ' au-fieldset--dark' : '' }`
		}
		{ ...attributeOptions }
	>

	</fieldset>
);

AUfieldset.propTypes = {
	dark: PropTypes.bool,
	className: PropTypes.string,
};
