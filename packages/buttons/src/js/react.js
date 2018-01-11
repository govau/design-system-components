/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * buttons function
 *
 * Buttons signal action. Use them to move the user through the service.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * All different kind of button options
 *
 * @type {Object}
 */
const options = {
	'primary': '',
	'secondary': 'au-btn--secondary',
	'tertiary': 'au-btn--tertiary',
};


/**
 * DEFAULT
 * The primary button
 *
 * @param  {string}  href             - The href attribute to make this a link
 * @param  {string}  children         - Anything inside
 * @param  {string}  as               - The kind of button, can be either 'primary', 'secondary', 'tertiary', default: 'primary'
 * @param  {string}  dark             - Add the dark variation class
 * @param  {string}  type             - The type attribute, default: 'button', optional
 * @param  {boolean} block            - The block option, optional
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
const AUbutton = ({ href, children, as, dark, type, block, className = '', ...attributeOptions }) => {
	if( href !== undefined ) {
		return (
			<a
				href={ href }
				className={ `au-btn ${ className } ${ options[ as ] }${ block ? ' au-btn--block' : '' }${ dark ? ' au-btn--dark' : '' }` }
				{ ...attributeOptions }
			>
				{ children }
			</a>
		);
	}
	else {
		return (
			<button
				type={ type }
				className={ `au-btn ${ className } ${ options[ as ] }${ block ? ' au-btn--block' : '' }${ dark ? ' au-btn--dark' : '' }` }
				{ ...attributeOptions }
			>
				{ children }
			</button>
		);
	}
};

AUbutton.propTypes = {
	href: PropTypes.string,
	children: PropTypes.string.isRequired,
	as: PropTypes.oneOf([ 'primary', 'secondary', 'tertiary' ]).isRequired,
	dark: PropTypes.bool,
	type: PropTypes.string,
	block: PropTypes.bool,
	className: PropTypes.string,
};

AUbutton.defaultProps = {
	type: 'button',
	as: 'primary',
};

export default AUbutton;
