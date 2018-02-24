/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * progress-indicator function
 *
 * Indicator of progress through a multitude of pages mostly used for forms.
 *
 **************************************************************************************************************************************************************/

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]

/**
 * All status options, can be overwritten
 *
 * @type {Object}
 */
const StatusText = {
	doing: 'Doing',
	todo: 'Todo',
	done: 'Done',
};


/**
 * An item inside the AUprogressIndicator component
 *
 * @param  {string}   link             - The link URL, If no link is passed we render a button instead of a link tag, optional
 * @param  {string}   text             - The text of this item
 * @param  {string}   status           - The status of this item
 * @param  {string}   statusText       - The status text of this item, optional
 * @param  {string}   className        - An additional class, optional
 * @param  {object}   li               - An additional object to be spread into the wrapping element, optional
 * @param  {object}   attributeOptions - Any other attribute options
 */
export const AUprogressIndicatorItem = ({ link, text, status, statusText, className = '', li = {}, ...attributeOptions }) => (
	<li { ...li }>
		{
			link
				? <a className={`au-progress-indicator__link au-progress-indicator__link--${ status } ${ className }`} href={ link } { ...attributeOptions }>
						<span className="au-progress-indicator__status">{ statusText ? statusText : StatusText[ status ] }</span>
						{ text }
					</a>
				: <button className={`au-progress-indicator__link au-progress-indicator__link--${ status } ${ className }`} { ...attributeOptions }>
						<span className="au-progress-indicator__status">{ statusText ? statusText : StatusText[ status ] }</span>
						{ text }
					</button>
		}
	</li>
);

AUprogressIndicatorItem.propTypes = {
	link: PropTypes.string,
	text: PropTypes.string.isRequired,
	status: PropTypes.PropTypes.oneOf([ 'doing', 'todo', 'done' ]).isRequired,
	statusText: PropTypes.string,
	li: PropTypes.object,
};


/**
 * DEFAULT
 * The progress-indicator component
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {array}   items            - All items for this progress indicator
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
const AUprogressIndicator = ({ dark, items, className = '', ...attributeOptions }) => (
	<ul className={ `au-progress-indicator${ dark ? ' au-progress-indicator--dark' : '' } ${ className }` } { ...attributeOptions }>
		{
			items.map(
				( item, i ) => <AUprogressIndicatorItem key={ i } { ...item } />
			)
		}
	</ul>
);

AUprogressIndicator.propTypes = {
	dark: PropTypes.bool,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.string.isRequired,
			status: PropTypes.PropTypes.oneOf([ 'doing', 'todo', 'done' ]).isRequired,
			statusText: PropTypes.string,
			li: PropTypes.object,
		})
	).isRequired,
};

export default AUprogressIndicator;
