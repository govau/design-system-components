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
 * @param  {string}   link    - The link target, if not supplied this will render as a button, optional
 * @param  {string}   text    - The text of the CTA link
 * @param  {function} onClick - An optional function for onClick, optional
 */
const CTALink = ({ link, text, onClick }) => {
	const attributeOptions = {};

	if( typeof onClick !== 'undefined' ) {
		attributeOptions.onClick = onClick;
	}

	if( link ) {
		return( <a className="uikit-cta-link" href={ link } { ...attributeOptions }>{ text }</a> );
	}
	else {
		return( <button className="uikit-cta-link" href={ link } { ...attributeOptions }>{ text }</button> );
	}
}

CTALink.propTypes = {
	link: PropTypes.string,
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

export default CTALink;
