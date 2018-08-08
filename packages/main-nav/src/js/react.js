/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * mainNav function
 *
 * Horizontal list of links to key areas on the website. Usually located in the header.
 *
 **************************************************************************************************************************************************************/

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// ES5 dependency: import AUlinkList from '@gov.au/link-list';
// ES6 dependency: import AUlinkList from './link-list';


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
const AUmainNavMenu = ({ items, linkComponent }) => {
	// Generate the menu
	const GenerateMenu = ( items ) => {
		const menu = items.map( item => {
			const link = {
				link: item.link,
				text: item.text,
				li: {
					className: item.active ? 'active' : '',
				},
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


export const AUmainNavContent = ({ items, toggleState }) => (
	<Fragment>
		<button
			aria-controls="main-nav-default"
			className="au-main-nav__toggle au-main-nav__toggle--menu">
			Menu
		</button>
		<div className="au-main-nav__content">
			<div className="au-main-nav__content-inner">
				<div className="au-main-nav__focus-trap-top"></div>
				<button
					aria-controls="main-nav-default"
					className="au-main-nav__toggle au-main-nav__toggle--close">
					Close
				</button>
				<AUmainNavMenu items={ items } />
				<div className="au-main-nav__focus-trap-bottom"></div>
			</div>
		</div>
		<div className="au-main-nav__overlay"></div>
	</Fragment>
);


class AUmainNav extends React.PureComponent {
	constructor( props ) {
		super( props );

		const { dark, alt, closed = true, speed, className = '', children, ...attributeOptions } = props;

		this.toggleClasses    = this.toggleClasses.bind( this );
		this.removeClass      = this.removeClass.bind( this );
		this.addClass         = this.addClass.bind( this );
		this.mainNavOpen      = this.mainNavOpen.bind( this );
		this.mainNavClose     = this.mainNavClose.bind( this );

		this.closeClass = this.props.closed ? 'au-accordion--closed' : '';

		console.log( '------------------------' );
		console.log( this.children );
	}


	/**
	 * IE8 compatible function for replacing classes on a DOM node
	 *
	 * @param  {object} element       - The DOM element we want to toggle classes on
	 * @param  {object} state         - The current state of the animation on the element
	 * @param  {string} openingClass  - The firstClass you want to toggle on the DOM node
	 * @param  {string} closingClass  - The secondClass you want to toggle on the DOM node
	 */
	toggleClasses( element, state, openingClass, closingClass ) {
		if( state === 'opening' || state === 'open' ) {
			var oldClass = openingClass || 'au-main-nav--closed';
			var newClass = closingClass || 'au-main-nav--open';
		}
		else {
			var oldClass = closingClass || 'au-main-nav--open';
			var newClass = openingClass || 'au-main-nav--closed';
		}

		removeClass( element, oldClass );
		addClass( element, newClass );
	}


	/**
	 * IE8 compatible function for removing a class
	 *
	 * @param  {object} element   - The DOM element we want to manipulate
	 * @param  {object} className - The name of the class to be removed
	 */
	removeClass( element, className ) {
		if( element.classList ) {
			element.classList.remove( className );
		}
		else {
			element.className = element.className.replace( new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " " );
		}
	}


	/**
	 * IE8 compatible function for adding a class
	 *
	 * @param  {object} element   - The DOM element we want to manipulate
	 * @param  {object} className - The name of the class to be added
	 */
	addClass( element, className ) {
		if( element.classList ) {
			element.classList.add( className );
		}
		else {
			element.className = element.className + " " + className;
		}
	}


	/**
	 * Open a mainNav element
	 *
	 * @param  {string}  element  - The toggle for the main nav
	 * @param  {integer} speed    - The speed in ms for the animation
	 *
	 */
	mainNavOpen( element, speed ) {
		// stop event propagation
		try {
			window.event.cancelBubble = true;
			event.stopPropagation();
		}
		catch( error ) {}

		console.log( element );


		// Elements we modify
		var content         = element.querySelector( '.au-main-nav__content' );
		var overlay         = element.querySelector( '.au-main-nav__overlay' );
		var closeButton     = element.querySelector( '.au-main-nav__toggle--close' );
		var focustrapTop    = element.querySelector( '.au-main-nav__focus-trap-top' );
		var focustrapBottom = element.querySelector( '.au-main-nav__focus-trap-bottom' );
		var focusContent    = content.querySelectorAll( 'a, .au-main-nav__toggle' );


		// Set these value immediately for transitions
		content.style.display = 'block';
		overlay.style.left    = 0;
		overlay.style.opacity = 1;


		(function( element, speed ) {
			AU.animate.Run({
				element: content,
				property: 'left',
				endSize: 0,
				speed: speed || 250,
				callback: function() {
					// Toggle classes
					toggleClasses( content, 'open', 'au-main-nav__content--closed', 'au-main-nav__content--open' );
					toggleClasses( overlay, 'open', 'au-main-nav__overlay--closed', 'au-main-nav__overlay--open' );

					// Lock scrolling on the body
					toggleClasses( document.documentElement, 'open', 'au-main-nav__scroll--unlocked', 'au-main-nav__scroll--locked' );


					// Move the focus to the close button
					closeButton.focus();


					// Focus trap enabled
					focustrapTop.setAttribute( "tabindex", 0 );
					focustrapBottom.setAttribute( "tabindex", 0 );


					focustrapTop.addEventListener( 'focus', auFocusTrapListener = function() {
						focusContent[ focusContent.length - 1 ].focus();
					});

					focustrapBottom.addEventListener( 'focus', auFocusTrapListener = function() {
						focusContent[ 0 ].focus();
					});

					// Add key listener
					document.addEventListener( 'keyup', auKeyListener = function( event ) {
						event = event || window.event;
						overlayOpen = window.getComputedStyle( overlay ).getPropertyValue( 'display' );

						// Check the menu is open and visible and the escape key is pressed
						if( event.keyCode === 27 && overlayOpen === 'block' ) {
							mainNav.Close( element );
						}
					});

					// Reset inline styles
					content.style.display = '';
					content.style.left    = '';
					overlay.style.display = '';
					overlay.style.left    = '';
				},
			});
		})( element, speed );
	}


	/**
	 * Close a mainNav element
	 *
	 * @param  {string}  elements - The DOM node/s to toggle
	 * @param  {integer} speed    - The speed in ms for the animation
	 *
	 */
	mainNavClose( element, speed ) {
		// stop event propagation
		try {
			window.event.cancelBubble = true;
			event.stopPropagation();
		}
		catch( error ) {}

		// Elements we modify
		var content         = element.querySelector( '.au-main-nav__content' );
		var overlay         = element.querySelector( '.au-main-nav__overlay' );
		var menuButton      = element.querySelector( '.au-main-nav__toggle--menu' );
		var focustrapTop    = element.querySelector( '.au-main-nav__focus-trap-top' );
		var focustrapBottom = element.querySelector( '.au-main-nav__focus-trap-bottom' );


		// Set these value immediately for transitions
		overlay.style.opacity = '0';


		(function( speed ) {
			AU.animate.Run({
				element: content,
				property: 'left',
				endSize: -300,
				speed: speed || 250,
				callback: function() {
					// Toggle the classes
					toggleClasses( document.documentElement, 'closing', 'au-main-nav__scroll--unlocked', 'au-main-nav__scroll--locked' );
					toggleClasses( content, 'closing', 'au-main-nav__content--closed', 'au-main-nav__content--open' );
					toggleClasses( overlay, 'closing', 'au-main-nav__overlay--closed', 'au-main-nav__overlay--open' );


					// Move the focus back to the menu button
					menuButton.focus();


					// Remove the focus trap
					focustrapTop.removeAttribute( "tabindex" );
					focustrapBottom.removeAttribute( "tabindex" );


					// Remove the event listeners
					focustrapTop.removeEventListener( 'focus', auFocusTrapListener );
					focustrapBottom.removeEventListener( 'focus', auFocusTrapListener );


					// Remove the event listener for the keypress
					document.removeEventListener( 'keyup', auKeyListener );


					// Reset inline styles
					content.style.display = '';
					content.style.left    = '';
					overlay.style.opacity = '';
				},
			});
		})( speed );
	}


	render() {
		return (
			<nav
				className={
					'au-main-nav' +
					`${ this.dark ? ' au-main-nav--dark ' : '' }` +
					`${ this.alt ? ' au-main-nav--alt ' : '' }` +
					` ${ this.className }`
				}
				id="main-nav-default"
				{ ...this.attributeOptions }
			>
				{ this.children }
			</nav>
		);
	}
};

AUmainNav.propTypes = {
	dark: PropTypes.bool
};

AUmainNav.defaultProps = {};

export default AUmainNav;
