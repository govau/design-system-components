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
 * @param  {string} dark             - Add the dark variation class
 * @param  {string} link             - The link target, optional
 * @param  {string} text             - The text of the CTA link
 * @param  {string} direction        - The direction for the arrow; can be either: up right down left, default: 'right'
 * @param  {object} attributeOptions - Any other attribute options
 */
const AUdirectionLink = ({ dark, link, text, direction, ...attributeOptions }) => {
	if( link ) {
		return (<a className={ `au-direction-link ${ directions[ direction ] }${ dark ? ' au-direction-link--dark' : '' }` } href={ link } { ...attributeOptions }>{ text }</a> );
	}
	else {
		return (<button className={ `au-direction-link ${ directions[ direction ] }${ dark ? ' au-direction-link--dark' : '' }` } { ...attributeOptions }>{ text }</button> );
	}
};

AUdirectionLink.propTypes = {
	dark: PropTypes.bool,
	link: PropTypes.string,
	text: PropTypes.string.isRequired,
	direction: PropTypes.oneOf([ 'up', 'right', 'down', 'left' ]).isRequired,
	onClick: PropTypes.func,
};

AUdirectionLink.defaultProps = {
	direction: 'right',
};

export default AUdirectionLink;
