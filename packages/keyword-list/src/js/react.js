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


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]

/**
 * An item inside the AUkeywordList component
 *
 * @param  {string}   repeatedName     - The repeated bit in each item
 * @param  {string}   link             - The link URL, optional
 * @param  {string}   name             - The name of the item
 * @param  {object}   li               - An additional object to be spread into the wrapping element, optional
 * @param  {object}   attributeOptions - Any other attribute options
 */
export const AUkeywordListItem = ({ repeatedName, link, name, li = {}, ...attributeOptions }) => {

	if( typeof attributeOptions.onClick === 'function' ) {

		// if we find an onClick event but no link we make it a link so onClick can be added (no button support yet)
		if( !link ) {
			link = '#';
		}
	}

	return (
		<li { ...li }>
			{ link
				? <a href={ link } { ...attributeOptions }><small className="au-keyword-list__small">{ repeatedName }</small>{ name }</a>
				: <span><small className="au-keyword-list__small">{ repeatedName }</small>{ name }</span>
			}
		</li>
	);
};

AUkeywordListItem.propTypes = {
	repeatedName: PropTypes.string.isRequired,
	link: PropTypes.string,
	name: PropTypes.string.isRequired,
	li: PropTypes.object,
};


/**
 * DEFAULT
 * The keyword-list component
 *
 * @param  {string} repeatedName     - The repeated bit in each item
 * @param  {array}  items            - All items in this list, format: { link: '', name: '', onClick: () }
 * @param  {string} dark             - Add the dark variation class
 * @param  {string} className        - An additional class, optional
 * @param  {object} attributeOptions - Any other attribute options
 */
const AUkeywordList = ({ repeatedName, items, dark, className = '', ...attributeOptions }) => (
	<ul className={ `au-keyword-list au-link-list ${ className }${ dark ? ' au-keyword-list--dark' : '' } `} { ...attributeOptions }>
		{ items.map( ( item, i ) => <AUkeywordListItem key={ i } repeatedName={ repeatedName } { ...item } /> ) }
	</ul>
);

AUkeywordList.propTypes = {
	repeatedName: PropTypes.string.isRequired,
	dark: PropTypes.bool,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			name: PropTypes.string.isRequired,
			li: PropTypes.object,
		})
		).isRequired,
	className: PropTypes.string,
};

export default AUkeywordList;
