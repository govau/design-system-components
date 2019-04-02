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
 * @param  {string}  ariaLabel        - The aria-label attribute, optional
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
	ariaLabel,
	attributeOptions,
}) => (
		<aside aria-label={ ariaLabel }>
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
	/**
	 * A dark variation of the component.
	 */
	dark: PropTypes.bool,
	/**
	 * An alternate variation of the component.
	 */
	alt: PropTypes.bool,
	/**
	 * The headline of the accordion.
	 */
	accordionHeader: PropTypes.string.isRequired,
	/**
	 * A function executed when the accordion opens, optional.
	 */
	onOpen: PropTypes.func,
	/**
	 * A function executed after the accordion opens, optional.
	 */
	afterOpen: PropTypes.func,
	/**
	 * A function executed when the accordion closes, optional.
	 */
	onClose: PropTypes.func,
	/**
	 * A function executed after the accordion closes, optional.
	 */
	afterClose: PropTypes.func,
	/**
	 * The headline of the menu.
	 */
	menuHeader: PropTypes.string,
	/**
	 * The menu headers link.
	 */
	menuHeaderLink: PropTypes.string,
	/**
	 * Closed state, optional.
	 */
	closed: PropTypes.bool,
	/**
	 * Speed of the animation in ms, optional.
	 */
	speed: PropTypes.number,
	/**
	 * The component used for the child links, optional.
	 */
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
	/**
	 * The menu items.
	 */
	items: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.node.isRequired,
			children: PropTypes.array,
		})
	).isRequired,
	/**
	 * The class name for the element, optional.
	 */
	className: PropTypes.string,
	/**
	 * The aria-label attribute, defaults to "side navigation".
	 */
	ariaLabel: PropTypes.string,
};

AUsideNav.defaultProps = {
	linkComponent: 'a',
	closed: true,
	ariaLabel: 'side navigation',
};

export default AUsideNav;
