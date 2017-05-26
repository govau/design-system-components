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


/**
 * DEFAULT
 * The direction-links component
 *
 * @param  {string} href      - The link target
 * @param  {string} text      - The text of the CTA link
 * @param  {string} direction - The direction for the arrow; can be either: top right bottom left
 */
const DirectionLink = ({ href, text, direction }) => {
	const directions = {
		up: 'uikit-direction-link--up',
		right: 'uikit-direction-link--right',
		down: 'uikit-direction-link--down',
		left: 'uikit-direction-link--left',
	};

	return (
		<a className={ `uikit-direction-link ${ directions[ direction ] }` } href={ href }>{ text }</a>
	);
};

DirectionLink.propTypes = {
	href: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	direction: PropTypes.oneOf([ 'up', 'right', 'down', 'left' ]),
};

DirectionLink.defaultProps = {
	direction: 'right',
};

export default DirectionLink;
