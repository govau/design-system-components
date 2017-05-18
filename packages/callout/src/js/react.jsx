/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * Callout function
 *
 * Use callout to notify and alert users of important snippets of information.
 *
 **************************************************************************************************************************************************************/

import React from 'react';

/**
 * Default callout
 *
 * @param  {string} options.description       - A description of the content of the callout for a11y
 * @param  {string} options.children          - Anything inside
 * @param  {string} options.calloutClassNames - Any additional classes you may want to put on the component
 */
export const Callout = ({ description, children, calloutClassNames = null }) => (
	<section className={`uikit-callout ${calloutClassNames}`} aria-label={ description }>
		{ children }
	</section>
);


/**
 * Calendar callout
 *
 * @param  {string} options.description       - A description of the content of the callout for a11y
 * @param  {string} options.calloutClassNames - Any additional classes you may want to put on the component
 * @param  {string} options.subline           - The subline of the event
 * @param  {string} options.datetime          - The datetime of the event as ISO datetime
 * @param  {string} options.time              - The time that appears on the page
 * @param  {string} options.name              - The name of the event
 */
export const CalloutCalendar = ({ description, calloutClassNames, subline, datetime, time, name }) => (
	<section className={`uikit-callout uikit-callout--calendar-event ${calloutClassNames}`} aria-label={ description }>
		{ subline && <span className="uikit-callout--calendar-event__lede">{ subline }</span> }
		<time className="uikit-callout--calendar-event__time" dateTime={ new Date( datetime ).toJSON() }>{ time }</time>
		{ name && <span className="uikit-callout--calendar-event__name">{ name }</span> }
	</section>
);
