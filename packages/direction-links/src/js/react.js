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
 * All theme options
 *
 * @type {Object}
 */
const themes = {
	light: '',
	dark: 'au-direction-link--dark',
};


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
 * @param  {string} theme     - The colour theme of the component
 * @param  {string} link      - The link target, optional
 * @param  {string} text      - The text of the CTA link
 * @param  {string} direction - The direction for the arrow; can be either: up right down left, default: 'right'
 * @param  {string} onClick   - An onClick function, optional
 */
const DirectionLink = ({ theme, link, text, direction, onClick }) => {
	const attributeOptions = {};

	if( typeof onClick !== 'undefined' ) {
		attributeOptions.onClick = onClick;
	}

	if( link ) {
		return (<a className={ `au-direction-link ${ directions[ direction ] } ${ theme ? themes[ theme ] : '' }` } href={ link } { ...attributeOptions }>{ text }</a> );
	}
	else {
		return (<button className={ `au-direction-link ${ directions[ direction ] } ${ theme ? themes[ theme ] : '' }` } { ...attributeOptions }>{ text }</button> );
	}
};

DirectionLink.propTypes = {
	theme: PropTypes.oneOf([ 'light', 'dark' ]),
	link: PropTypes.string,
	text: PropTypes.string.isRequired,
	direction: PropTypes.oneOf([ 'up', 'right', 'down', 'left' ]).isRequired,
	onClick: PropTypes.func,
};

DirectionLink.defaultProps = {
	direction: 'right',
	theme: 'light',
};

export default DirectionLink;
