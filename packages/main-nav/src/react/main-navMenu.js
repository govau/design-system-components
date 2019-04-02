/***************************************************************************************************************************************************************
 *
 * mainNav menu function
 *
 * Horizontal list of links to key areas on the website. Usually located in the header.
 *
 **************************************************************************************************************************************************************/


import React from 'react';
import PropTypes from 'prop-types';

// ES5 dependency: import AUaccordion from '@gov.au/link-list';
// ES6 dependency: import AUlinkList from './link-list';


/**
 * A menu inside the AUmainNav
 *
 * @param  {array}  items            - The links in an array containing text, location and active status
 * @param  {string} linkComponent    - The component used for the link
 */
const AUmainNavMenu = ({ items, linkComponent }) => {
	// Generate the menu
	const GenerateMenu = ( items ) => {
		const menu = items.map( item => {
			const link =  item.active ? {
				link: item.link,
				text: item.text,
				'aria-current': 'page',
				li: {
					className: 'active',
				},
			} :
			{
				link: item.link,
				text: item.text,
			};

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


AUmainNavMenu.propTypes = {
	/**
	 * 
	 */
	items: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.node.isRequired,
			children: PropTypes.array,
		})
	).isRequired,
	/**
	 * 
	 */
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
};

AUmainNavMenu.defaultProps = {
	linkComponent: 'a',
};
