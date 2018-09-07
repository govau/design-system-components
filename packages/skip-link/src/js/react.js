/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * skip-link function
 *
 * Provide skip links to navigation and content.
 *
 **************************************************************************************************************************************************************/

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * One skip-link item
 *
 * @param  {string} link             - The href for the link
 * @param  {string} text             - The link text
 * @param  {string} className        - An additional class, optional
 * @param  {object} attributeOptions - Any other attribute options
 */
export const AUskipLinkItem = ({ link, text, className = '', ...attributeOptions }) => (
	<a className={`au-skip-link__link ${ className }`} href={ link } { ...attributeOptions }>{ text }</a>
);

AUskipLinkItem.propTypes = {
	link: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
};


/**
 * DEFAULT
 * The skip-link component
 *
 * @param  {array}  links            - The links, format: { url: '', text: '' }
 * @param  {string} className        - An additional class, optional
 * @param  {string} ariaLabel        - The aria-label attribute, optional
 * @param  {object} attributeOptions - Any other attribute options
 */
const AUskipLink = ({ links, className = '', ariaLabel, ...attributeOptions }) => (
	<nav className={`au-skip-link ${ className }`} aria-label={ ariaLabel } { ...attributeOptions }>
		{
			links.map(
				( link, i ) => <AUskipLinkItem key={ i } { ...link } />
			)
		}
	</nav>
);

AUskipLink.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
		})
	).isRequired,
	ariaLabel: PropTypes.string,
};

AUskipLink.defaultProps = {
	ariaLabel: 'skip links navigation',
}

export default AUskipLink;
