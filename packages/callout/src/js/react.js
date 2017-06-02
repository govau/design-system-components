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


/**
 * Default callout
 *
 * @param  {string} description - A description of the content of the callout for a11y
 * @param  {string} children    - Anything inside
 */
export const Callout = ({ description, children }) => (
	<section className="uikit-callout" aria-label={ description }>
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
 * @param  {string} description - A description of the content of the callout for a11y
 * @param  {string} subline     - The subline of the event, optional
 * @param  {string} datetime    - The datetime of the event as ISO datetime
 * @param  {string} time        - The time that appears on the page
 * @param  {string} name        - The name of the event, optional
 */
export const CalloutCalendar = ({ description, subline, datetime, time, name }) => (
	<section className="uikit-callout uikit-callout--calendar-event" aria-label={ description }>
		{ subline && <span className="uikit-callout--calendar-event__lede">{ subline }</span> }
		<time className="uikit-callout--calendar-event__time" dateTime={ new Date( datetime ).toJSON() }>{ time }</time>
		{ name && <span className="uikit-callout--calendar-event__name">{ name }</span> }
	</section>
);

CalloutCalendar.propTypes = {
	description: PropTypes.string.isRequired,
	subline: PropTypes.string,
	datetime: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	name: PropTypes.string,
};
