/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * headings function
 *
 * Class styles for display headings.
 *
 **************************************************************************************************************************************************************/

import React, { Fragment } from 'react';
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
	'au-display-xs',
	'au-display-sm',
	'au-display-md',
	'au-display-lg',
	'au-display-xl',
	'au-display-xxl',
	'au-display-xxxl',
];


/**
 * DEFAULT
 * The headings component
 *
 * @param  {string} level            - The tag level (<h1/> <h2/> etc)
 * @param  {string} size             - The headings size
 * @param  {string} children         - Anything inside
 * @param  {string} className        - An additional class, optional
 * @param  {object} attributeOptions - Any other attribute options
 */
const AUheading = ({ level, size, children, className = '', ...attributeOptions }) => {
	const HeadingTag = `h${ level }`;

	return (
		<HeadingTag className={ `au-display-${ size } ${ className }` } { ...attributeOptions }>{ children }</HeadingTag>
	);
};

AUheading.propTypes = {
	/**
	 * The semantic headline tag level, h1-h6.
	 */
	level: PropTypes.oneOf([ '1', '2', '3', '4', '5', '6' ]).isRequired,
	/**
	 * The display size, 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'.
	 */
	size: PropTypes.oneOf([ 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl' ]).isRequired,
	children: PropTypes.node.isRequired,
	/**
	 * The class name for the element, optional.
	 */
	className: PropTypes.string,
};

AUheading.defaultProps = {
	level: '3',
	size: 'md',
};

export default AUheading;
