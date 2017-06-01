/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * keyword-list function
 *
 * Headers provide a consistent start to pages.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


/**
 * An item inside the KeywordList component
 *
 * @param  {string}   repeatedName - The repeated bit in each item
 * @param  {object}   item         - The keyword list item
 * @param  {string}   item.link    - The link URL, optional
 * @param  {string}   item.name    - The name of the item
 * @param  {function} item.onClick - An onClick event, optional
 */
export const KeywordListItem = ({ repeatedName, item }) => {
	const attributeOptions = {};

	if( typeof item.onClick === 'function' ) {
		attributeOptions.onClick = item.onClick;

		// if we find an onClick event but no link we make it a link so onClick can be added (no button support yet)
		if( !item.link ) {
			item.link = '#';
		}
	}

	return (
		<li className="uikit-keyword-list__item">
			{ item.link
				? <a href={ item.link } { ...attributeOptions }><small className="uikit-keyword-list__item__small">{ repeatedName }</small>{ item.name }</a>
				: <span><small className="uikit-keyword-list__item__small">{ repeatedName }</small>{ item.name }</span>
			}
		</li>
	);
};

KeywordListItem.propTypes = {
	repeatedName: PropTypes.string.isRequired,
	item: PropTypes.shape({
		link: PropTypes.string,
		name: PropTypes.string.isRequired,
		onClick: PropTypes.func,
	}),
};


/**
 * DEFAULT
 * The keyword-list component
 *
 * @param  {string} repeatedName - The repeated bit in each item
 * @param  {array}  items        - All items in this list, format: { link: '', name: '', onClick: () }
 */
const KeywordList = ({ repeatedName, items }) => (
	<ul className="uikit-keyword-list uikit-link-list">
		{ items.map( ( item, i ) => <KeywordListItem key={ i } item={ item } repeatedName={ repeatedName } /> ) }
	</ul>
);

KeywordList.propTypes = {
	repeatedName: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			name: PropTypes.string.isRequired,
			onClick: PropTypes.func,
		})
		).isRequired,
};

export default KeywordList;
