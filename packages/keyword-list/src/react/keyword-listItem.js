/***************************************************************************************************************************************************************
 *
 * keyword-list item function
 *
 * Headers provide a consistent start to pages.
 *
**************************************************************************************************************************************************************/


import React from 'react';
import PropTypes from 'prop-types';


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
