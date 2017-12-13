/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * header function
 *
 * Headers provide a consistent start to pages.
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
 * The header component
 *
 * @param  {string}  title           - The title of the header
 * @param  {string}  level           - The tag level (<h1/> <h2/> etc), default: '1'
 * @param  {string}  subline         - An optional subline, optional
 * @param  {boolean} hero            - The hero option, optional
 * @param  {string}  dark            - Add the dark variation class
 * @param  {string}  alt             - Add the alt variation class
 * @param  {node}    children        - The inside of this section
 * @param  {object} attributeOptions - Any other attribute options
 */
const AUheader = ({ title, level, subline, hero, dark, alt, children, ...attributeOptions }) => {
	const HeadingTag = `h${ level }`;

	return (
		<div
			className={`au-header${ hero ? ' au-header--hero' : '' }${ dark ? ' au-header--dark' : '' }${ alt ? ' au-header--alt' : '' }`}
			role="banner"
			{ ...attributeOptions }
		>
			<HeadingTag className="au-header-heading">{ title }</HeadingTag>
			{ subline && <span className="au-header-subline">{ subline }</span> }
			{ children }
		</div>
	);
};


AUheader.propTypes = {
	title: PropTypes.node.isRequired,
	level: PropTypes.oneOf([ '1', '2', '3', '4', '5', '6' ]).isRequired,
	subline: PropTypes.node,
	hero: PropTypes.bool,
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	children: PropTypes.node,
};


AUheader.defaultProps = {
	level: '1',
};


export default AUheader;
