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
	up: 'uikit-direction-link--up',
	right: 'uikit-direction-link--right',
	down: 'uikit-direction-link--down',
	left: 'uikit-direction-link--left',
};

/**
 * DEFAULT
 * The direction-links component
 *
 * @param  {string} link      - The link target, optional
 * @param  {string} text      - The text of the CTA link
 * @param  {string} direction - The direction for the arrow; can be either: up right down left, default: 'right'
 * @param  {string} onClick   - An onClick function, optional
 */
const DirectionLink = ({ link, text, direction, onClick }) => {
	const attributeOptions = {};

	if( typeof onClick !== 'undefined' ) {
		attributeOptions.onClick = onClick;
	}

	if( link ) {
		return (<a className={ `uikit-direction-link ${ directions[ direction ] }` } href={ link } { ...attributeOptions }>{ text }</a> );
	}
	else {
		return (<button className={ `uikit-direction-link ${ directions[ direction ] }` } { ...attributeOptions }>{ text }</button> );
	}
};

DirectionLink.propTypes = {
	link: PropTypes.string,
	text: PropTypes.string.isRequired,
	direction: PropTypes.oneOf([ 'up', 'right', 'down', 'left' ]).isRequired,
	onClick: PropTypes.func,
};

DirectionLink.defaultProps = {
	direction: 'right',
};

export default DirectionLink;
