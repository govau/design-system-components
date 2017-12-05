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
 * @param  {string} dark        - Add the dark variation class
 * @param  {string} description - A description of the content of the callout for a11y
 * @param  {string} children    - Anything inside
 */
export const Callout = ({ dark, description, children }) => (
	<section className={ `au-callout${ dark ? ' au-callout--dark' : '' }` } aria-label={ description }>
		{ children }
	</section>
);

Callout.propTypes = {
	children: PropTypes.node.isRequired,
	description: PropTypes.string.isRequired,
};


/**
 * Calendar callout
 *
 * @param  {string} dark        - Add the dark variation class
 * @param  {string} description - A description of the content of the callout for a11y
 * @param  {string} subline     - The subline of the event, optional
 * @param  {string} datetime    - The datetime of the event as ISO datetime
 * @param  {string} time        - The time that appears on the page
 * @param  {string} name        - The name of the event, optional
 */
export const CalloutCalendar = ({ dark, description, subline, datetime, time, name }) => (
	<section className={ `au-callout au-callout--calendar-event${ dark ? ' au-callout--dark' : '' }` } aria-label={ description }>
		{ subline && <span className="au-callout--calendar-event__lede">{ subline }</span> }
		<time className="au-callout--calendar-event__time" dateTime={ new Date( datetime ).toJSON() }>{ time }</time>
		{ name && <span className="au-callout--calendar-event__name">{ name }</span> }
	</section>
);

CalloutCalendar.propTypes = {
	dark: PropTypes.bool,
	description: PropTypes.string.isRequired,
	subline: PropTypes.string,
	datetime: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	name: PropTypes.string,
};
