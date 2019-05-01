/***************************************************************************************************************************************************************
 *
 * Callout calendar function
 *
 * Use callout calendar to ...
 *
 **************************************************************************************************************************************************************/


import React from 'react';
import PropTypes from 'prop-types';


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
	 * The subline of the event, optional.
	 */
	subline: PropTypes.string,
	/**
	 * The date time string.
	 */
	datetime: PropTypes.string.isRequired,
	/**
	 * The same date but human readable.
	 */
	time: PropTypes.string.isRequired,
	/**
	 * The name of the event, optional.
	 */
	name: PropTypes.string,
	/**
	 * The class name for the element, optional.
	 */
	className: PropTypes.string,
};

AUcalloutCalendar.defaultProps = {
	title: 'Title of the calendar callout',
	datetime: '2017-01-01T00:00:00+00:00',
	time: 'Sunday 32 Jun',
	level: 2,
	srOnlyTitle: true,
};
