/***************************************************************************************************************************************************************
 *
 * footer end function
 *
 * Footers help users who reach the bottom of a page without finding what they want.
 *
 **************************************************************************************************************************************************************/


import React from 'react';
import PropTypes from 'prop-types';


/**
 * A section for the footer that sits at the end
 *
 * @param  {node}   children         - The inside of this section
 * @param  {string} className        - An additional class, optional
 * @param  {object} attributeOptions - Any other attribute options
 */
export const AUfooterEnd = ({ children, className = '', ...attributeOptions }) => (
	<div className={`au-footer__end ${ className }`} { ...attributeOptions }>
		{ children }
	</div>
);

AUfooterEnd.propTypes = {
	/**
	 * The elements inside.
	 */
	children: PropTypes.node.isRequired,
	/**
	 * The class name for the element, optional.
	 */
	className: PropTypes.string,
};
