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


/**
 * An item inside the ProgressIndicator component
 *
 * @param  {string}   item.link       - The link URL, If no link is passed we render a button instead of a link tag.
 * @param  {string}   item.text       - The text of this item
 * @param  {string}   item.status     - The status of this item
 * @param  {string}   item.statusText - The status text of this item. (optional)
 * @param  {function} item.onClick    - An onClick function. (optional)
 */
export const ProgressIndicatorItem = ({ item }) => {
	const statusText = {
		doing: 'Doing',
		todo: 'Todo',
		done: 'Done',
	};

	const options = {};

	if( typeof item.onClick === 'function' ) {
		options.onClick = item.onClick;
	}

	return (
		<li>
			{ item.link
				? <a className={`progress-indicator__link progress-indicator--${ item.status }`} href={ item.link } { ...options }>
						<span className="progress-indicator__status">{ item.statusText ? item.statusText : statusText[ item.status ] }</span>
						{ item.text }
					</a>
				: <button className={`progress-indicator__link progress-indicator--${ item.status }`} { ...options }>
						<span className="progress-indicator__status">{ item.statusText ? item.statusText : statusText[ item.status ] }</span>
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
 * DEFAULT
 * The progress-indicator component
 *
 * @param  {array} items - All items for this progress indicator
 */
const ProgressIndicator = ({ items }) => (
	<ul className="progress-indicator">
		{ items.map( ( item, i ) => <ProgressIndicatorItem key={ i } item={ item } /> ) }
	</ul>
);

ProgressIndicator.propTypes = {
	items: PropTypes.array.isRequired,
};

export default ProgressIndicator;
