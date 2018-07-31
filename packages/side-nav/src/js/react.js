/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * sideNav function
 *
 * A vertical list of links for site navigation typically placed next to the body content.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';

// ES5 dependency: import AUlinkList from '@gov.au/link-list';
// ES6 dependency: import AUlinkList from './link-list';
// ES5 dependency: import AUaccordion from '@gov.au/accordion';
// ES6 dependency: import AUaccordion from './accordion';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * A menu inside the AUsideNav
 *
 * @param  {array}  items            - The link Text or link html
 * @param  {string} linkComponent    - The component used for the link
 */
const AUsideNavMenu = ({ items, linkComponent }) => {
	// Recursively re generate the menu with children as necessary
	const GenerateMenu = ( items ) => {
		const menu = items.map( item => {
			const link = {
				link: item.link,
				text: item.text,
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


/**
 * DEFAULT
 * The side navigation component
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {boolean} alt              - Add the alternate variation class, optional
 * @param  {string}  accordionHeader  - The accordion header
 * @param  {boolean} closed           - The accordions default state
 * @param  {func}    speed            - Speed of the animation in ms, optional
 * @param  {func}    onOpen           - Executed when the accordion opens, optional
 * @param  {func}    afterOpen        - Executed after the accordion opened, optional
 * @param  {func}    onClose          - Executed when the accordion closes, optional
 * @param  {func}    afterClose       - Executed after the accordion opened, optional
 * @param  {string}  menuHeader       - The header text for the menu
 * @param  {string}  menuHeaderLink   - The link for the header in the menu
 * @param  {array}   items            - The menu items and their children
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
const AUsideNav = ({
	dark,
	alt,
	accordionHeader,
	speed,
	onOpen,
	afterOpen,
	onClose,
	afterClose,
	closed,
	menuHeader,
	menuHeaderLink,
	linkComponent,
	items,
	className = '',
	attributeOptions
}) => (
		<aside>
			<AUaccordion
				closed={closed}
				speed={speed}
				onOpen={onOpen}
				afterOpen={afterOpen}
				afterClose={afterClose}
				onClose={onClose}
				className={'au-side-nav au-accordion ' +
					`${dark ? 'au-side-nav--dark au-accordion--dark ' : ''}` +
					`${alt ? 'au-side-nav--alt au-accordion--alt ' : ''}` +
					`${className}`
				}
				{...attributeOptions}
				header={accordionHeader}
			>
				<div className="au-side-nav__content">
					<h2 className="au-sidenav__title">
						<a href={menuHeaderLink}>{menuHeader}</a>
					</h2>
					<AUsideNavMenu items={items} linkComponent={linkComponent} />
				</div>
			</AUaccordion>
		</aside>
	);

AUsideNav.propTypes = {
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	accordionHeader: PropTypes.string.isRequired,
	onOpen: PropTypes.func,
	afterOpen: PropTypes.func,
	onClose: PropTypes.func,
	afterClose: PropTypes.func,
	menuHeader: PropTypes.string,
	menuHeaderLink: PropTypes.string,
	closed: PropTypes.bool,
	speed: PropTypes.number,
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
	items: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.node.isRequired,
			children: PropTypes.array,
		})
	).isRequired,
	className: PropTypes.string,
};

AUsideNav.defaultProps = {
	linkComponent: 'a',
	closed: true,
};

export default AUsideNav;
