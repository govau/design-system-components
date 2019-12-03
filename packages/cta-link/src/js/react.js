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
 * @param  {string}  linkComponent    - The component used for the link
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {string}  link             - The link target, if not supplied this will render as a button, optional
 * @param  {string}  text             - The text of the CTA link
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
const AUctaLink = ({ linkComponent, dark, link, text, className = '', ...attributeOptions }) => {
	const LinkComponent = linkComponent;

	if( link ) {
		// If we are using a normal link
		if( LinkComponent === 'a' ) {
			attributeOptions.href = link;
		} else {
			// If we are using a link component
			attributeOptions.to = link;
		}

		return (
			<LinkComponent className={ `au-cta-link ${ className }${ dark ? ` au-cta-link--dark` : '' }` } { ...attributeOptions }>{ text }</LinkComponent>
		);
	}
	else {
		return (
			<button className={ `au-cta-link${ dark ? ` au-cta-link--dark` : '' }` } { ...attributeOptions }>{ text }</button>
		);
	}
}

AUctaLink.propTypes = {
	dark: PropTypes.bool,
	link: PropTypes.string,
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ])
};

AUctaLink.defaultProps = {
	linkComponent: 'a',
};

export default AUctaLink;
