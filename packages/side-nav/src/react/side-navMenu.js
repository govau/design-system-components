/***************************************************************************************************************************************************************
 *
 * sideNav menu function
 *
 * A vertical list of links for site navigation typically placed next to the body content.
 *
 **************************************************************************************************************************************************************/


import React from 'react';
import PropTypes from 'prop-types';

// ES5 dependency: import AUlinkList from '@gov.au/link-list';
// ES6 dependency: import AUlinkList from './link-list';

/**
 * A menu inside the AUsideNav
 *
 * @param  {array}  items            - The links in an array containing text, location and active status
 * @param  {string} linkComponent    - The component used for the link
 */
const AUsideNavMenu = ({ items, linkComponent }) => {
	// Recursively re generate the menu with children as necessary
	const GenerateMenu = ( items ) => {
		const menu = items.map( item => {
			const link = {
				link: item.active ? '' : item.link,
				text: item.active ? <span>{ item.text }</span> : item.text,
				li: {
					className: item.active ? 'active' : '',
				},
			};

			// If it has children create a menu again
			if( item.children ){
				link.children = <AUlinkList items={ GenerateMenu( item.children ) } linkComponent={ item.linkComponent } />
			}

			// return the link, maybe with children
			return link;
		});

		return menu;
	}

	// Create the menu with children
	return (
		<AUlinkList items={ GenerateMenu( items ) } linkComponent={ linkComponent } />
	);
}