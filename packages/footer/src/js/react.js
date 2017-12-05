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
 * @param  {node} children - The inside of this section
 */
export const FooterNav = ({ children }) => (
	<nav className="au-footer__navigation">
		{ children }
	</nav>
);

FooterNav.propTypes = {
	children: PropTypes.node.isRequired,
};


/**
 * A section for the footer that sits at the end
 *
 * @param  {node} children - The inside of this section
 */
export const FooterEnd = ({ children }) => (
	<nav className="au-footer__end">
		{ children }
	</nav>
);

FooterEnd.propTypes = {
	children: PropTypes.node.isRequired,
};


/**
 * DEFAULT
 * The footer component
 *
 * @param  {string} dark     - Add the dark variation class
 * @param  {string} alt      - Add the alt variation class
 * @param  {node}   children - The inside of this section
 */
const Footer = ({ dark, alt, children }) => (
	<footer className={ `au-footer${ dark ? ' au-footer--dark' : '' }${ alt ? ' au-footer--alt' : '' } `} role="contentinfo">
		{ children }
	</footer>
);

Footer.propTypes = {
	children: PropTypes.node.isRequired,
	dark: PropTypes.bool,
	alt: PropTypes.bool,
};

export default Footer;
