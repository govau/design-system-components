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
 * @param  {string} repeatedName - The repeated bit in each item
 * @param  {string} item.link    - The link URL (optional)
 * @param  {string} item.name    - The name of the item
 */
export const KeywordListItem = ({ repeatedName, item }) => (
	<li className="uikit-keyword-list__item">
		{ item.link
			? <a href={ item.link }><small className="uikit-keyword-list__item__small">{ repeatedName }</small>{ item.name }</a>
			: <span><small className="uikit-keyword-list__item__small">{ repeatedName }</small>{ item.name }</span>
		}
	</li>
);

KeywordListItem.propTypes = {
	repeatedName: PropTypes.string.isRequired,
	item: PropTypes.shape({
		link: PropTypes.string,
		name: PropTypes.string.isRequired,
	}),
};


/**
 * DEFAULT
 * The keyword-list component
 *
 * @param  {string} repeatedName - The repeated bit in each item
 * @param  {array}  items        - All items in this list. format: { link: '', name: '' }
 */
const KeywordList = ({ repeatedName, items }) => (
	<ul className="uikit-keyword-list uikit-link-list">
		{ items.map( ( item, i ) => <KeywordListItem key={ i } item={ item } repeatedName={ repeatedName } /> ) }
	</ul>
);

KeywordList.propTypes = {
	repeatedName: PropTypes.string.isRequired,
	items: PropTypes.array.isRequired,
};

export default KeywordList;
