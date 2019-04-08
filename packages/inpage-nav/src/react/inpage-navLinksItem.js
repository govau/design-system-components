/***************************************************************************************************************************************************************
 *
 * inpage-nav links item function
 *
 * Use inpage-nav links to help users scan and jump to content of a page.
 *
**************************************************************************************************************************************************************/


import React from 'react';
import PropTypes from 'prop-types';


/**
 * The section component for the AUinpageNavLinks component
 *
 * @param  {object} link             - The link of this section
 * @param  {object} title            - The title of the section
 * @param  {object} li               - An additional object to be spread into the wrapping element, optional
 * @param  {object} attributeOptions - Any other attribute options
 */
export const AUinpageNavLinksItem = ({ link, title, li = {}, ...attributeOptions }) => (
	<li { ...li }>
		<a href={ `#${ link }` } { ...attributeOptions }>{ title }</a>
	</li>
);

AUinpageNavLinksItem.propTypes = {
	link: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	li: PropTypes.object,
};
