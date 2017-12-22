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


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * DEFAULT
 * The cta link component
 *
 * @param  {string} dark             - Add the dark variation class
 * @param  {string} link             - The link target, if not supplied this will render as a button, optional
 * @param  {string} text             - The text of the CTA link
 * @param  {object} attributeOptions - Any other attribute options
 */
const AUctaLink = ({ dark, link, text, ...attributeOptions }) => {

	if( link ) {
		return( <a className={ `au-cta-link${ dark ? ` au-cta-link--dark` : '' }` } href={ link } { ...attributeOptions }>{ text }</a> );
	}
	else {
		return( <button className={ `au-cta-link${ dark ? ` au-cta-link--dark` : '' }` } href={ link } { ...attributeOptions }>{ text }</button> );
	}
}

AUctaLink.propTypes = {
	dark: PropTypes.bool,
	link: PropTypes.string,
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

export default AUctaLink;
