/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * direction-links function
 *
 * Use direction links to link up and down within the DOM or back to a parent page.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * All direction options
 *
 * @type {Object}
 */
const directions = {
	up: 'au-direction-link--up',
	right: 'au-direction-link--right',
	down: 'au-direction-link--down',
	left: 'au-direction-link--left',
};


/**
 * DEFAULT
 * The direction-links component
 *
 * @param  {string}  linkComponent    - The component used for the link
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {string}  link             - The link target, optional
 * @param  {string}  text             - The text of the CTA link
 * @param  {string}  direction        - The direction for the arrow; can be either: up right down left, default: 'right'
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
const AUdirectionLink = ({ linkComponent, dark, link, text, direction, className = '', ...attributeOptions }) => {
	const LinkComponent = linkComponent;

	if( link ) {
		// If we are using a normal link
		if( LinkComponent === 'a' ) {
			attributeOptions.href = link;
		}
		// If we are using a link component
		else if( typeof LinkComponent === 'function' ) {
			attributeOptions.to = link;
		}

		return (
			<LinkComponent className={ `au-direction-link ${ className } ${ directions[ direction ] }${ dark ? ' au-direction-link--dark' : '' }` } { ...attributeOptions }>{ text }</LinkComponent>
		);
	}
	else {
		return (
			<button className={ `au-direction-link ${ className } ${ directions[ direction ] }${ dark ? ' au-direction-link--dark' : '' }` } { ...attributeOptions }>{ text }</button>
		);
	}
};

AUdirectionLink.propTypes = {
	/**
	 * A dark variation of the component.
	 */
	dark: PropTypes.bool,
	/**
	 * The href link, optional.
	 */
	link: PropTypes.string,
	/**
	 * The text of the link.
	 */
	text: PropTypes.string.isRequired,
	/**
	 * The direction the link goes.
	 */
	direction: PropTypes.oneOf([ 'up', 'right', 'down', 'left' ]).isRequired,
	/**
	 * The class name for the element, optional.
	 */
	className: PropTypes.string,
	/**
	 * The component used for the link, optional.
	 */
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ])
};

AUdirectionLink.defaultProps = {
	direction: 'right',
	linkComponent: 'a',
};

export default AUdirectionLink;
