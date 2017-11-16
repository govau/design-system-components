/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * headings function
 *
 * Class styles for display headings.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]

/**
 * All heading options
 *
 * @type {Array}
 */
const sizes = [
	'au-display-1',
	'au-display-2',
	'au-display-3',
	'au-display-4',
	'au-display-5',
	'au-display-6',
];

/**
 * DEFAULT
 * The headings component
 *
 * @param  {string} level - The tag level (<h1/> <h2/> etc)
 * @param  {string} size  - The headings size
 * @param  {string} text  - The heading text
 */
const Header = ({ level, size, text }) => {
	const HeadingTag = `h${ level }`;

	return (
		<HeadingTag className={ sizes[ ( parseInt( size ) - 1 ) ] }>{ text }</HeadingTag>
	);
};

Header.propTypes = {
	level: PropTypes.oneOf([ '1', '2', '3', '4', '5', '6' ]).isRequired,
	size: PropTypes.oneOf([ '1', '2', '3', '4', '5', '6' ]).isRequired,
	text: PropTypes.node.isRequired,
};

export default Header;
