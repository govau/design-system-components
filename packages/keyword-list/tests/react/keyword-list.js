/*! @gov.au/keyword-list v3.0.3 */
/***************************************************************************************************************************************************************
 *
 * keyword-list function
 *
 * Headers provide a consistent start to pages.
 *
 **************************************************************************************************************************************************************/

import React, { Fragment } from 'react';
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
 * @param  {string}   linkComponent    - The component used for the link
 * @param  {string}   name             - The name of the item
 * @param  {object}   li               - An additional object to be spread into the wrapping element, optional
 * @param  {object}   attributeOptions - Any other attribute options
 */
export const AUkeywordListItem = ({ linkComponent, repeatedName, link, name, li = {}, ...attributeOptions }) => {
	const LinkComponent = linkComponent;

	if( typeof attributeOptions.onClick === 'function' ) {

		// if we find an onClick event but no link we make it a link so onClick can be added (no button support yet)
		if( !link ) {
			link = '#';
		}
	}

	if( link ){

		// If we are using a normal link
		if( LinkComponent === 'a' ) {
			attributeOptions.href = link;
		}
		// If we are using a link component
		else if( typeof LinkComponent === 'function' ) {
			attributeOptions.to = link;
		}
	}

	return (
		<li { ...li }>
			{
				link
					? <LinkComponent { ...attributeOptions }><small className="au-keyword-list__small">{ repeatedName }</small>{ name }</LinkComponent>
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
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
};


AUkeywordListItem.defaultProps = {
	linkComponent: 'a',
};


/**
 * DEFAULT
 * The keyword-list component
 *
 * @param  {string}  repeatedName     - The repeated bit in each item
 * @param  {array}   items            - All items in this list, format: { link: '', name: '', onClick: () }
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {string}  className        - An additional class, optional
 * @param  {string}  linkComponent    - The component used for the link
 * @param  {object}  attributeOptions - Any other attribute options
 */
const AUkeywordList = ({ repeatedName, linkComponent, items, dark, className = '', ...attributeOptions }) => (
	<ul className={ `au-keyword-list au-link-list ${ className }${ dark ? ' au-keyword-list--dark' : '' } `} { ...attributeOptions }>
		{
			items.map(
				( item, i ) => <AUkeywordListItem linkComponent={ linkComponent } key={ i } repeatedName={ repeatedName } { ...item } />
			)
		}
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
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
};


AUkeywordList.defaultProps = {
	linkComponent: 'a',
};


export default AUkeywordList;
