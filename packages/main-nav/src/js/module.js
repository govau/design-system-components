/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * Main nav function
 *
 * Horizontal list of links to key areas on the website. Usually located in the header.
 *
 **************************************************************************************************************************************************************/

var AU = AU || {};

( function( AU ) {

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// NAMESPACE MODULE
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	var mainNav = {};
	var mainNavEvents = {};
	var mainNavAnimating = false;


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// PRIVATE FUNCTIONS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	/**
	 * PRIVATE
	 * IE8 compatible function for replacing classes on a DOM node
	 *
	 * @param  {object} element      - The DOM element we want to toggle classes on
	 * @param  {object} state        - The current state of the animation on the element
	 * @param  {string} openingClass - The firstClass you want to toggle on the DOM node
	 * @param  {string} closingClass - The secondClass you want to toggle on the DOM node
	 */
	function toggleClasses( element, state, openingClass, closingClass ) {
		if( state === 'opening' || state === 'open' ) {
			var oldClass = openingClass || 'au-main-nav__content--closed';
			var newClass = closingClass || 'au-main-nav__content--open';
		}
		else {
			var oldClass = closingClass || 'au-main-nav__content--open';
			var newClass = openingClass || 'au-main-nav__content--closed';
		}

		removeClass( element, oldClass );
		addClass( element, newClass );
	}


	/**
	 * PRIVATE
	 * IE8 compatible function for removing a class
	 *
	 * @param  {object} element   - The DOM element we want to manipulate
	 * @param  {object} className - The name of the class to be removed
	 */
	function removeClass( element, className ) {
		if( element.classList ) {
			element.classList.remove( className );
		}
		else {
			element.className = element.className.replace( new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ' );
		}
	}


	/**
	 * PRIVATE
	 * IE8 compatible function for adding a class
	 *
	 * @param  {object} element   - The DOM element we want to manipulate
	 * @param  {object} className - The name of the class to be added
	 */
	function addClass( element, className ) {
		if( element.classList ) {
			element.classList.add( className );
		}
		else {
			element.className = element.className + ' ' + className;
		}
	}


	/**
	 * PRIVATE
	 * IE8 compatible function for adding an event
	 * https://stackoverflow.com/questions/10149963/adding-event-listener-cross-browser
	 *
	 * @param  {object} element    - The DOM element to add the listener
	 * @param  {object} event      - The event data
	 * @param  {object} rawHandler - The function to run when triggered
	 *
	 * @returns {object}           -  The token for removal of listener
	 */
	function addEvent( element, event, rawHandler ) {
		// Using local functions instead of anonymous for event handler
		function listenHandler( event ) {
				var handler = rawHandler.apply( this, arguments );
				if ( handler === false) {
					event.stopPropagation();
					event.preventDefault();
				}
				return( handler );
		}

		// Make sure attachHandler is also going to work
		function attachHandler() {
			var handler = rawHandler.call( element, window.event );
			if ( handler === false ) {
				window.event.returnValue = false;
				window.event.cancelBubble = true;
			}
			return( handler );
		}

		// Return the token and add the correct listener
		if ( element.addEventListener ) {
			element.addEventListener( event, listenHandler, false );
			return {
				element: element,
				handler: listenHandler,
				event: event
			};
		} else {
			element.attachEvent( 'on' + event, attachHandler );
			return {
				element: element,
				handler: attachHandler,
				event: event
			};
		}
	}


	/**
	 * PRIVATE
	 * IE8 compatible function for removing an event
	 *
	 * @param  {object} token - The token from the add listener function
	 */
	function removeEvent( token ) {
		if ( token.element.removeEventListener ) {
			token.element.removeEventListener( token.event, token.handler );
		} else {
			token.element.detachEvent( 'on' + token.event, token.handler );
		}
	}


	/**
	 * PRIVATE
	 * IE8 compatible function for getting elements style
	 *
	 * @param  {object} element  - element to check style
	 * @param  {object} property - property to return value
	 */
	function getStyle( element, property ) {
		return (
			typeof getComputedStyle !== 'undefined'
				? getComputedStyle( element, null)
				: element.currentStyle
		)[ property ]; // avoid getPropertyValue altogether
	}



//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// PUBLIC FUNCTIONS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	/**
	 * PUBLIC
	 */
	/**
	 * Toggle a mainNav element
	 *
	 * @param  {string}  element   - The toggle for the main nav
	 * @param  {integer} speed     - The speed in ms for the animation
	 * @param  {object}  callbacks - An object of four optional callbacks: { onOpen, afterOpen, onClose, afterClose }
	 *
	 */
	mainNav.Toggle = function( element, speed, callbacks ) {
		// Stop the main nav from being toggled if it is already being toggled
		if( mainNavAnimating ){
			return;
		}

		mainNavAnimating = true;

		// stop event propagation
		try {
			window.event.cancelBubble = true;
			event.stopPropagation();
		}
		catch( error ) {}


		// check this once
		if( typeof callbacks != 'object' ) {
			callbacks = {};
		}


		// Elements we modify
		var targetId        = element.getAttribute( 'aria-controls' );
		var target          = document.getElementById( targetId );
		var menu            = target.querySelector( '.au-main-nav__menu' );
		var overlay         = target.querySelector( '.au-main-nav__overlay' );
		var closeButton     = target.querySelector( '.au-main-nav__toggle--close' );
		var openButton      = target.querySelector( '.au-main-nav__toggle--open' );
		var focustrapTop    = target.querySelector( '.au-main-nav__focus-trap-top' );
		var focustrapBottom = target.querySelector( '.au-main-nav__focus-trap-bottom' );
		var focusContent    = menu.querySelectorAll( 'a, .au-main-nav__toggle' );
		var closed          = target.className.indexOf( 'au-main-nav__content--open' ) === -1;

		var menuWidth = menu.offsetWidth;
		var state = closed ? 'opening' : '';

		overlay.style.display = 'block';


		(function( target, speed ) {
			AU.animate.Toggle({
				element: menu,
				property: 'left',
				openSize: 0,
				closeSize: -1 * menuWidth,
				speed: speed || 250,
				prefunction: function(){
					// Set these values immediately for transitions
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
						focustrapTop.setAttribute( 'tabindex', 0 );
						focustrapBottom.setAttribute( 'tabindex', 0 );

						// Add event listeners
						mainNavEvents.focusTop = addEvent( focustrapTop, 'focus', function(){
							focusContent[ focusContent.length - 1 ].focus();
						});

						mainNavEvents.focusBottom = addEvent( focustrapBottom, 'focus', function(){
							focusContent[ 0 ].focus();
						});

						// Add key listener
						mainNavEvents.escKey = addEvent( document, 'keyup', function(){
							var event = event || window.event;
							var overlayOpen = getStyle( overlay, 'display' );

							// Check the menu is open and visible and the escape key is pressed
							if( event.keyCode === 27 && overlayOpen === 'block' ) {
								mainNav.Toggle( element, speed, callbacks );
							}
						});


						if( typeof callbacks.afterOpen === 'function' ) {
							callbacks.afterOpen();
						}
					}
					else {
						// Move the focus back to the menu button
						openButton.focus();

						// Remove the focus trap
						focustrapTop.removeAttribute( 'tabindex' );
						focustrapBottom.removeAttribute( 'tabindex' );


						// Remove the event listeners
						removeEvent( mainNavEvents.focusTop );
						removeEvent( mainNavEvents.focusBottom );


						// Remove the event listener for the keypress
						removeEvent( mainNavEvents.escKey );

						if( typeof callbacks.afterClose === 'function' ) {
							callbacks.afterClose();
						}
					}


					// Toggle classes
					toggleClasses( target, state );
					toggleClasses(
						document.body,
						state,
						'au-main-nav__scroll--unlocked',
						'au-main-nav__scroll--locked'
					);


					// Reset inline styles
					menu.style.display    = '';
					menu.style.left       = '';
					overlay.style.display = '';
					overlay.style.left    = '';
					overlay.style.opacity = '';

					mainNavAnimating = false;
				},
			});
		})( target, speed );
	}


	AU.mainNav = mainNav;

}( AU ));


if( typeof module !== 'undefined' ) {
	module.exports = AU;
}
