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
 * A section for the footer that contains navigational elements
 *
 * @param  {node}   children         - The inside of this section
 * @param  {object} attributeOptions - Any other attribute options
 */
export const AUfooterNav = ({ children, ...attributeOptions }) => (
	<nav className="au-footer__navigation" { ...attributeOptions }>
		{ children }
	</nav>
);

AUfooterNav.propTypes = {
	children: PropTypes.node.isRequired,
};


/**
 * A section for the footer that sits at the end
 *
 * @param  {node}   children         - The inside of this section
 * @param  {object} attributeOptions - Any other attribute options
 */
export const AUfooterEnd = ({ children, ...attributeOptions }) => (
	<nav className="au-footer__end" { ...attributeOptions }>
		{ children }
	</nav>
);

AUfooterEnd.propTypes = {
	children: PropTypes.node.isRequired,
};


/**
 * DEFAULT
 * The footer component
 *
 * @param  {string} dark             - Add the dark variation class
 * @param  {string} alt              - Add the alt variation class
 * @param  {node}   children         - The inside of this section
 * @param  {object} attributeOptions - Any other attribute options
 */
const AUfooter = ({ dark, alt, children, ...attributeOptions }) => (
	<footer
		className={ `au-footer${ dark ? ' au-footer--dark' : '' }${ alt ? ' au-footer--alt' : '' } `}
		role="contentinfo"
		{ ...attributeOptions }
	>
		{ children }
	</footer>
);

AUfooter.propTypes = {
	children: PropTypes.node.isRequired,
	dark: PropTypes.bool,
	alt: PropTypes.bool,
};

export default AUfooter;
