/***************************************************************************************************************************************************************
 *
 * inpage-nav links function
 *
 * Use inpage-nav links to help users scan and jump to content of a page.
 *
**************************************************************************************************************************************************************/


import React from 'react';
import PropTypes from 'prop-types';


/**
 * The inpage-nav component
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {string}  title            - The title of the content link block, default: Contents
 * @param  {array}   sections         - An array of objects of all sections, sample: { link: '', title: '', onClick: () }
 * @param  {string}  className        - An additional class, optional
 * @param  {string}  ariaLabel        - The aria-label attribute, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const AUinpageNavLinks = ({ dark, title, sections, ariaLabel, className = '', ...attributeOptions }) => (
	<nav className={ `au-inpage-nav-links ${ className }${ dark ? ' au-inpage-nav-links--dark' : '' }` } ariaLabel={ ariaLabel } { ...attributeOptions }>
		<h2 className="au-inpage-nav-links__heading au-display-sm">{ title }</h2>

		<ul className="au-link-list">
			{ sections.map( ( section, i ) => <AUinpageNavLinksItem key={ i } { ...section } /> ) }
		</ul>
	</nav>
);

AUinpageNavLinks.propTypes = {
	/**
	 * A dark variation of the component
	 */
	dark: PropTypes.bool,
	/**
	 * 
	 */
	title: PropTypes.string.isRequired,
	/**
	 * 
	 */
	sections: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			li: PropTypes.object,
		})
	).isRequired,
	/**
	 * The class name for the element, optional.
	 */
	className: PropTypes.string,
};

AUinpageNavLinks.defaultProps = {
	title: 'Contents',
	ariaLabel: 'in page navigation',
};
