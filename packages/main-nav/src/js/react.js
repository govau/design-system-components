/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * mainNav function
 *
 * Horizontal list of links to key areas on the website. Usually located in the header.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';

import AU from '@gov.au/animate'; // interdependency with our animate lib


// ES5 dependency: import AUlinkList from '@gov.au/link-list';
// ES6 dependency: import AUlinkList from './link-list';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


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
	items: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.node.isRequired,
			children: PropTypes.array,
		})
	).isRequired,
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
};

AUmainNavMenu.defaultProps = {
	linkComponent: 'a',
};


// This value gets increased for each navigation component
let IDvalue = 0;


export class AUmainNavContent extends React.PureComponent {
	constructor( props ) {
		super( props );

		const {
			items,
			className = '',
			children,
			linkComponent,
			onOpen,
			afterOpen,
			onClose,
			afterClose,
			...attributeOptions
		} = props;

		// Functions
		this.toggleClasses        = this.toggleClasses.bind( this );
		this.removeClass          = this.removeClass.bind( this );
		this.addClass             = this.addClass.bind( this );
		this.mainNavToggle        = this.mainNavToggle.bind( this );
		this.toggle               = this.toggle.bind( this );
		this.toggleAnimationState = function() {
			this.setState({ animating: !this.state.animating } )
		}.bind( this );


		// Event listeners
		this.auFocusTrapListenerTop    = this.auFocusTrapListenerTop.bind( this );
		this.auFocusTrapListenerBottom = this.auFocusTrapListenerBottom.bind( this );
		this.auKeyListener             = this.auKeyListener.bind( this );


		// Variables
		this.state = {
			closed: true,
			animating: false,
			expanded: false
		};


		// Increase the ID so it's unique for each instance
		IDvalue += 1;
		this.id = `au-main-nav-${ IDvalue }`;
	}


	/**
	 * Toggle an main navigation on click
	 *
	 * @param  {event object} event - The event object of the click
	 */
	toggle( event ) {
		event.preventDefault();

		// If the main menu is animating don't change toggle the menu
		if( this.state.animating ){
			return;
		}

		// Toggle the menu's current state
		this.setState({
			closed: !this.state.closed,
			expanded: !this.state.expanded,
			animating: true,
		});
	}


	/**
	 * componentDidUpdate - Update the component when it changes
	 *
	 * @param {*} prevProps - The previous property values
	 * @param {*} prevState - The previous state values
	 */
	componentDidUpdate( prevProps, prevState ){
		if( prevState !== undefined && this.state !== undefined && this.state.closed !== prevState.closed ) {
			this.mainNavToggle( this.mainNavContent, this.props.speed, {
				onOpen: this.props.onOpen,
				afterOpen: this.props.afterOpen,
				onClose: this.props.onClose,
				afterClose: this.props.afterClose,
			});
		}
	}


	/**
	 * IE8 compatible function for replacing classes on a DOM node
	 *
	 * @param  {object} element       - The DOM element we want to toggle classes on
	 * @param  {string} openingClass  - The firstClass you want to toggle on the DOM node
	 * @param  {string} closingClass  - The secondClass you want to toggle on the DOM node
	 */
	toggleClasses( element, state, openingClass, closingClass ) {
		if( state === 'opening' || state === 'open' ) {
			var oldClass = openingClass || 'au-main-nav__content--closed';
			var newClass = closingClass || 'au-main-nav__content--open';
		}
		else {
			var oldClass = closingClass || 'au-main-nav__content--open';
			var newClass = openingClass || 'au-main-nav__content--closed';
		}

		this.removeClass( element, oldClass );
		this.addClass( element, newClass );
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
	 * auFocusTrapListenerTop - What happens when the focus trap top gets focus
	 *
	 * @param {event} event - the event
	 */
	auFocusTrapListenerTop( event ) {
		var focusContent = this.mainNavMenu.querySelectorAll( 'a, .au-main-nav__toggle' );
		focusContent[ focusContent.length - 1 ].focus();
	}


	/**
	 * auFocusTrapListenerBottom - What happens when the focus trap bottom gets focus
	 *
	 * @param {event} event - the event
	 */
	auFocusTrapListenerBottom( event ) {
		var focusContent = this.mainNavMenu.querySelectorAll( 'a, .au-main-nav__toggle' );
		focusContent[ 0 ].focus();
	}


	/**
	 * auKeyListener - What happens when a key gets pressed and the menu is open
	 *
	 * @param {event} event - the event
	 */
	auKeyListener( event ) {
		// This should only close the menu when the menu is visibly open
		var overlayOpen = window.getComputedStyle( this.mainNavOverlay ).getPropertyValue( 'display' );

		// Check the menu is open and visible and the escape key is pressed
		if( event.keyCode === 27 && overlayOpen === 'block' ) {
			this.toggle( event );
		}
	}


	/**
	 * Toggle a mainNav element
	 *
	 * @param  {string}  element  - The toggle for the main nav
	 * @param  {integer} speed    - The speed in ms for the animation
	 *
	 */
	mainNavToggle( element, speed, callbacks ) {
		// stop event propagation
		try {
			window.event.cancelBubble = true;
			window.event.stopPropagation();
		}
		catch( error ) {}

		// check this once
		if( typeof callbacks != 'object' ) {
			callbacks = {};
		}


		// Elements we modify
		var menu            = this.mainNavMenu;
		var overlay         = this.mainNavOverlay;
		var closeButton     = element.querySelector( '.au-main-nav__toggle--close' );
		var openButton      = element.querySelector( '.au-main-nav__toggle--open' );
		var focustrapTop    = element.querySelector( '.au-main-nav__focus-trap-top' );
		var focustrapBottom = element.querySelector( '.au-main-nav__focus-trap-bottom' );

		var closed          = !this.state.closed;
		var state           = closed ? 'opening' : '';
		var menuWidth       = menu.offsetWidth;


		// Functions
		var ToggleClasses             = this.toggleClasses;
		var AUkeyListener             = this.auKeyListener;
		var AUfocusTrapListenerTop    = this.auFocusTrapListenerTop;
		var AUfocusTrapListenerBottom = this.auFocusTrapListenerBottom;
		var ToggleAnimationState      = this.toggleAnimationState;


		overlay.style.display = 'block';


		(function( menu ) {
			AU.animate.Toggle({
				element: menu,
				property: 'left',
				openSize: 0,
				closeSize: -1 * menuWidth,
				speed: speed || 250,
				prefunction: function( ) {
					// Set these value immediately for transitions
					if( state === 'opening' ) {
						menu.style.display    = 'block';
						overlay.style.left    = 0;
						overlay.style.opacity = 0.5;

						// run when opening
						if( typeof callbacks.onOpen === 'function' ) {
							callbacks.onOpen();
						}
					}
					else {
						overlay.style.opacity = '0';

						// run when closing
						if( typeof callbacks.onClose === 'function' ) {
							callbacks.onClose();
						}
					}
				},
				postfunction: function(){
					if ( state === 'opening' ){

						// Move the focus to the close button
						closeButton.focus();


						// Focus trap enabled
						focustrapTop.setAttribute( "tabindex", 0 );
						focustrapBottom.setAttribute( "tabindex", 0 );


						focustrapTop.addEventListener( 'focus', AUfocusTrapListenerTop );
						focustrapBottom.addEventListener( 'focus', AUfocusTrapListenerBottom );

						// Add key listener
						document.addEventListener( 'keyup', AUkeyListener );

						if( typeof callbacks.afterOpen === 'function' ) {
							callbacks.afterOpen();
						}
					}
					else {
						// Move the focus back to the menu button
						openButton.focus();

						// Remove the focus trap
						focustrapTop.removeAttribute( "tabindex" );
						focustrapBottom.removeAttribute( "tabindex" );


						// Remove the event listeners
						focustrapTop.removeEventListener( 'focus', AUfocusTrapListenerTop );
						focustrapBottom.removeEventListener( 'focus', AUfocusTrapListenerBottom );


						// Remove the event listener for the keypress
						document.removeEventListener( 'keyup', AUkeyListener );

						if( typeof callbacks.afterClose === 'function' ) {
							callbacks.afterClose();
						}
					}


					// Toggle classes
					ToggleClasses( element, state );
					ToggleClasses(
						document.body,
						state,
						'au-main-nav__scroll--unlocked',
						'au-main-nav__scroll--locked',
					);


					// Reset inline styles
					menu.style.display    = '';
					menu.style.left       = '';
					overlay.style.display = '';
					overlay.style.left    = '';
					overlay.style.opacity = '';


					// Toggle the animating state to false so that we can allow toggling again
					ToggleAnimationState();
				},
			});
		})( menu );
	}


	render(){
		return (
			<div
				id={ this.id }
				className="au-main-nav__content"
				ref={ mainNavContent => { this.mainNavContent = mainNavContent }}>
					<button
						aria-controls={ this.id }
						aria-expanded={this.state.expanded}
						onClick={ ( event ) => this.toggle( event ) }
						className="au-main-nav__toggle au-main-nav__toggle--open">
						Menu
					</button>
				<div
					className="au-main-nav__menu"
					ref={ mainNavMenu => { this.mainNavMenu = mainNavMenu }}
					>
					<div className="au-main-nav__menu-inner">
						<div className="au-main-nav__focus-trap-top"></div>
						<button
							aria-controls={ this.id }
							aria-expanded={this.state.expanded}
							onClick={ ( event ) => this.toggle( event ) }
							className="au-main-nav__toggle au-main-nav__toggle--close">
							Close
						</button>
						<AUmainNavMenu
							linkComponent={ this.props.linkComponent }
							items={ this.props.items }
						/>
						{ this.props.children }
						<div className="au-main-nav__focus-trap-bottom"></div>
					</div>
				</div>
				<div
					aria-controls={ this.id }
					ref={ mainNavOverlay => { this.mainNavOverlay = mainNavOverlay }}
					onClick={ ( event ) => this.toggle( event ) }
					className="au-main-nav__overlay"></div>
			</div>
		);
	}
};

AUmainNavContent.propTypes = {
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	children: PropTypes.node,
	speed: PropTypes.number,
	onOpen: PropTypes.func,
	afterOpen: PropTypes.func,
	onClose: PropTypes.func,
	afterClose: PropTypes.func,
	className: PropTypes.string,
};


const AUmainNav = ({ dark, alt, className, ariaLabel, children, ...attributeOptions }) => (
	<nav
		className={
			'au-main-nav ' +
			`${ dark ? ' au-main-nav--dark' : '' }` +
			`${ alt ? ' au-main-nav--alt' : '' }` +
			`${ className ? ' ' + className : '' }`
		}
		aria-label = { ariaLabel }
		{ ...attributeOptions }
	>
		{ children }
	</nav>
);

AUmainNav.propTypes = {
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	ariaLabel: PropTypes.string,
	children: PropTypes.node.isRequired,
};

AUmainNav.defaultProps = {
	ariaLabel: 'main',
};

export default AUmainNav;
