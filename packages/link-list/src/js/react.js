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
 * @param  {object}   item         - The link list item
 * @param  {string}   item.link    - The link URL, optional
 * @param  {string}   item.text    - The link Text
 * @param  {function} item.onClick - An onClick event, optional
 */
export const LinkListItem = ({ item }) => {
	const attributeOptions = {};

	if( typeof item.onClick === 'function' ) {
		attributeOptions.onClick = item.onClick;

		// if we find an onClick event but no link we make it a link so onClick can be added (no button support yet)
		if( !item.link ) {
			item.link = '#';
		}
	}

	return (
		<li>
			{ item.link === undefined
				? ( item.text )
				: ( <a href={ item.link } { ...attributeOptions }>{ item.text }</a> )
			}
		</li>
	);
};

LinkListItem.propTypes = {
	item: PropTypes.shape({
		link: PropTypes.string,
		text: PropTypes.string.isRequired,
		onClick: PropTypes.func,
	}),
};


/**
 * DEFAULT
 * The Link List component
 *
 * @param  {boolean} inverted - Inverted option
 * @param  {boolean} inverted - Inline option
 * @param  {array}   items    - All items inside the link list to be passed to LinkListItem, format: { link: '', text: '', onClick: () }
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
			onClick: PropTypes.func,
		})
		).isRequired,
};

export default LinkList;
