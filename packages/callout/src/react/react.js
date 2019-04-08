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
	title: PropTypes.string.isRequired,
	level: PropTypes.number,
	srOnlyTitle: PropTypes.bool,
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

AUcallout.defaultProps = {
	level: 2,
	srOnlyTitle: false,
};


/**
 * Calendar callout
 *
 * @param  {string}  title            - The title of the header
 * @param  {string}  level            - The tag level (<h1/> <h2/> etc), default: '1'
 * @param  {boolean} srOnlyTitle      - Title is visible to screen readers only
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {boolean} alt              - Add the alt variation class, optional
 * @param  {string}  subline          - The subline of the event, optional
 * @param  {string}  datetime         - The datetime of the event as ISO datetime
 * @param  {string}  time             - The time that appears on the page
 * @param  {string}  name             - The name of the event, optional
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const AUcalloutCalendar = ({ title, level, srOnlyTitle, dark, alt, subline, datetime, time, name, className = '', ...attributeOptions }) => {
	const HeadingTag = `h${ level }`;

	return (
		<section
			className={ `au-callout au-callout--calendar-event ${ className }${ dark ? ' au-callout--dark' : '' }${ alt ? ' au-callout--alt' : '' }` }
			{ ...attributeOptions }
		>
			<HeadingTag
				children={ title }
				className={ `au-callout__heading${ srOnlyTitle ? ' au-callout__heading--sronly' : '' }` }
			/>
			{ subline && <p className="au-callout--calendar-event__lede">{ subline }</p> }
			<time className="au-callout--calendar-event__time" dateTime={ new Date( datetime ).toJSON() }>{ time }</time>
			{ name && <span className="au-callout--calendar-event__name">{ name }</span> }
		</section>
	)
}

AUcalloutCalendar.propTypes = {
	title: PropTypes.string.isRequired,
	level: PropTypes.number,
	srOnlyTitle: PropTypes.bool,
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	subline: PropTypes.string,
	datetime: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	name: PropTypes.string,
	className: PropTypes.string,
};

AUcalloutCalendar.defaultProps = {
	level: 2,
	srOnlyTitle: true,
};
