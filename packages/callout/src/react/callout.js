/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * Callout function
 *
 * Use callout to notify and alert users of important snippets of information.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * Default callout
 *
 * @param  {string}  title            - The title of the header
 * @param  {string}  level            - The tag level (<h1/> <h2/> etc), default: '1'
 * @param  {boolean} srOnlyTitle      - Title is visible to screen readers only
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {boolean} alt              - Add the alt variation class, optional
 * @param  {string}  children         - Anything inside
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const AUcallout = ({ title, level, srOnlyTitle, dark, alt, description, children, className = '', ...attributeOptions }) => {
	const HeadingTag = `h${ level }`;

	return (
		<section
			className={ `au-callout ${ className }${ dark ? ' au-callout--dark' : '' }${ alt ? ' au-callout--alt' : '' }` }
			{ ...attributeOptions }
		>
			<HeadingTag
				children={ title }
				className={ `au-callout__heading${ srOnlyTitle ? ' au-callout__heading--sronly' : '' }` }
			/>
			{ children }
		</section>
	)
};

AUcallout.propTypes = {
	/**
	 * Title of the callout.
	 */
	title: PropTypes.string.isRequired,
	/**
	 * The tag level (<h1/> <h2/> etc), default: '1'.
	 */
	level: PropTypes.number,
	/**
	 * Make title screen reader visible.
	 */
	srOnlyTitle: PropTypes.bool,
	/**
	 * A dark variation of the component.
	 */
	dark: PropTypes.bool,
	/**
	 * A alternate variation of the component.
	 */
	alt: PropTypes.bool,
	/**
	 * Anything inside.
	 */
	children: PropTypes.node.isRequired,
	/**
	 * The class name for the element, optional.
	 */
	className: PropTypes.string,
};

AUcallout.defaultProps = {
	level: 2,
	srOnlyTitle: false,
};
