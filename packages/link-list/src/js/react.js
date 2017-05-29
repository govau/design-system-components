/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * link-lists function
 *
 * A simple list of inline links.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


/**
 * An item inside the LinkList component
 *
 * @param  {string} item.link - The link URL
 * @param  {string} item.text - The link Text
 */
export const LinkListItem = ({ item }) => (
	<li>
		{ item.link === undefined
			? ( item.text )
			: ( <a href={ item.link }>{ item.text }</a> )
		}
	</li>
);

LinkListItem.propTypes = {
	item: PropTypes.shape({
		link: PropTypes.string,
		text: PropTypes.string.isRequired,
	}),
};


/**
 * DEFAULT
 * The Link List component
 *
 * @param  {boolean} inverted - Inverted option
 * @param  {boolean} inverted - Inline option
 * @param  {array}   items    - All items inside the link list to be passed to LinkListItem
 */
const LinkList = ({ inverted, inline, items }) => (
	<ul className={ `uikit-link-list${ inverted ? ' uikit-link-list--inverted' : '' }${ inline ? ' uikit-link-list--inline' : '' }` }>
		{ items.map( ( item, i ) => <LinkListItem key={ i } item={ item } /> ) }
	</ul>
);

LinkList.propTypes = {
	inverted: PropTypes.bool,
	inline: PropTypes.bool,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.string.isRequired,
		})
		).isRequired,
};

export default LinkList;
