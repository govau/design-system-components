/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * progress-indicator function
 *
 * Indicator of progress through a multitude of pages mostly used for forms.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
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
const statusText = {
	doing: 'Doing',
	todo: 'Todo',
	done: 'Done',
};

/**
 * An item inside the ProgressIndicator component
 *
 * @param  {array}    item            - The item array with all progress items
 * @param  {string}   item.link       - The link URL, If no link is passed we render a button instead of a link tag, optional
 * @param  {string}   item.text       - The text of this item
 * @param  {string}   item.status     - The status of this item
 * @param  {string}   item.statusText - The status text of this item, optional
 * @param  {function} item.onClick    - An onClick function, optional
 */
export const ProgressIndicatorItem = ({ item }) => {
	const attributeOptions = {};

	if( typeof item.onClick === 'function' ) {
		attributeOptions.onClick = item.onClick;
	}

	return (
		<li>
			{ item.link
				? <a className={`au-progress-indicator__link au-progress-indicator__link--${ item.status }`} href={ item.link } { ...attributeOptions }>
						<span className="au-progress-indicator__status">{ item.statusText ? item.statusText : statusText[ item.status ] }</span>
						{ item.text }
					</a>
				: <button className={`au-progress-indicator__link au-progress-indicator__link--${ item.status }`} { ...attributeOptions }>
						<span className="au-progress-indicator__status">{ item.statusText ? item.statusText : statusText[ item.status ] }</span>
						{ item.text }
					</button>
			}
		</li>
	);
};

ProgressIndicatorItem.propTypes = {
	item: PropTypes.shape({
		link: PropTypes.string,
		text: PropTypes.string.isRequired,
		status: PropTypes.PropTypes.oneOf([ 'doing', 'todo', 'done' ]).isRequired,
		statusText: PropTypes.string,
		onclick: PropTypes.func,
	}),
};


/**
 * All theme options
 *
 * @type {Object}
 */
const themes = {
	light: '',
	dark: 'au-progress-indicator--dark',
};


/**
 * DEFAULT
 * The progress-indicator component
 *
 * @param  {string} theme - The colour theme of the component
 * @param  {array}  items - All items for this progress indicator
 */
const ProgressIndicator = ({ theme, items }) => (
	<ul className={ `au-progress-indicator ${ theme ? themes[ theme ] : themes.light }` }>
		{ items.map( ( item, i ) => <ProgressIndicatorItem key={ i } item={ item } /> ) }
	</ul>
);

ProgressIndicator.propTypes = {
	theme: PropTypes.oneOf([ 'light', 'dark' ]),
	items: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.string.isRequired,
			status: PropTypes.PropTypes.oneOf([ 'doing', 'todo', 'done' ]).isRequired,
			statusText: PropTypes.string,
			onclick: PropTypes.func,
		})
		).isRequired,
};

export default ProgressIndicator;
