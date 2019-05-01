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
 * The footer component
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {boolean} alt              - Add the alt variation class, optional
 * @param  {node}    children         - The inside of this section
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
const AUfooter = ({ dark, alt, children, className = '', ...attributeOptions }) => (
	<footer
		className={ `au-footer ${ className }${ dark ? ' au-footer--dark' : '' }${ alt ? ' au-footer--alt' : '' } `}
		{ ...attributeOptions }
		role="contentinfo"
	>
		{ children }
	</footer>
);

AUfooter.propTypes = {
	/**
	 * A dark variation of the component
	 */
	dark: PropTypes.bool,
	/**
	 * A alternate variation of the component
	 */
	alt: PropTypes.bool,
	/**
	 * The elements inside.
	 */
	children: PropTypes.node.isRequired,
	/**
	 * The class name for the element, optional.
	 */
	className: PropTypes.string,
};

export default AUfooter;
