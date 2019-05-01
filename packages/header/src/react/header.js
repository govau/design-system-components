/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * header function
 *
 * Headers provide a consistent start to pages.
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
 * The header component
 *
 * @param  {boolean}  hero             - The hero option, optional
 * @param  {boolean}  dark             - Add the dark variation class, optional
 * @param  {boolean}  alt              - Add the alt variation class, optional
 * @param  {node}     children         - The inside of this section
 * @param  {string}   className        - An additional class, optional
 * @param  {object}   attributeOptions - Any other attribute options
 */
const AUheader = ({ hero, dark, alt, children, className = '', ...attributeOptions }) => (
	<div
		className={`au-header ${ className }${ hero ? ' au-header--hero' : '' }${ dark ? ' au-header--dark' : '' }${ alt ? ' au-header--alt' : '' }`}
		role="banner" { ...attributeOptions }>
		{ children }
	</div>
);

AUheader.propTypes = {
	hero: PropTypes.bool,
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	children: PropTypes.node,
	className: PropTypes.string,
};

export default AUheader;
