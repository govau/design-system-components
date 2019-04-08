/***************************************************************************************************************************************************************
 *
 * footer nav function
 *
 * Footers help users who reach the bottom of a page without finding what they want.
 *
 **************************************************************************************************************************************************************/


import React from 'react';
import PropTypes from 'prop-types';


/**
 * A section for the footer that contains navigational elements
 *
 * @param  {node}   children         - The inside of this section
 * @param  {string} className        - An additional class, optional
 * @param  {string} ariaLabel        - The aria-label attribute, optional
 * @param  {object} attributeOptions - Any other attribute options
 */
export const AUfooterNav = ({ children, className = '', ariaLabel, ...attributeOptions }) => (
	<nav className={`au-footer__navigation ${ className }`} aria-label={ ariaLabel } { ...attributeOptions }>
		{ children }
	</nav>
);

AUfooterNav.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	ariaLabel: PropTypes.string,
};

AUfooterNav.defaultProps = {
	ariaLabel: 'footer',
}
