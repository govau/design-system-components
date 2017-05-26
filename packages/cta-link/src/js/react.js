/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * cta-link function
 *
 * Provide a see more/all link when there are too many items to show in the current context.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


/**
 * DEFAULT
 * The cta link component
 *
 * @param  {string} href - The link target
 * @param  {string} text - The text of the CTA link
 */
const CTALink = ({ href, text }) => (
	<a className="uikit-cta-link" href={ href }>{ text }</a>
);

CTALink.propTypes = {
	href: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default CTALink;
