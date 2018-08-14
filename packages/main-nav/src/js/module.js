/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * mainNav function
 *
 * Horizontal list of links to key areas on the website. Usually located in the header.
 *
 **************************************************************************************************************************************************************/

var AU = AU || {};

( function( AU ) {

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// NAMESPACE MODULE
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	var mainNav = {}



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
			element.className = element.className.replace( new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " " );
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
			element.className = element.className + " " + className;
		}
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
	 * @param  {string}  element  - The toggle for the main nav
	 * @param  {integer} speed    - The speed in ms for the animation
	 *
	 */
	mainNav.Toggle = function( element, speed ) {
		// stop event propagation
		try {
			window.event.cancelBubble = true;
			event.stopPropagation();
		}
		catch( error ) {}


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

		var closed          = !target.classList.contains( 'au-main-nav__content--open' );
		var state           = closed ? 'opening' : '';


		// Set these values immediately for transitions
		if( closed ) {
			menu.style.display    = 'block';
			overlay.style.display = 'block';
			overlay.style.left    = 0;
			overlay.style.opacity = 1;
		}
		else {
			overlay.style.opacity = '0';
		}


		(function( target, speed ) {
			AU.animate.Run({
				element: menu,
				property: 'left',
				endSize: closed ? 0 : -300,
				speed: speed || 250,
				callback: function() {

					if ( closed ){

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
							var overlayOpen = window.getComputedStyle( overlay ).getPropertyValue( 'display' );

							// Check the menu is open and visible and the escape key is pressed
							if( event.keyCode === 27 && overlayOpen === 'block' ) {
								mainNav.Toggle( element );
							}
						});
					}
					else {
						// Move the focus back to the menu button
						openButton.focus();

						// Remove the focus trap
						focustrapTop.removeAttribute( "tabindex" );
						focustrapBottom.removeAttribute( "tabindex" );


						// Remove the event listeners
						focustrapTop.removeEventListener( 'focus', auFocusTrapListener );
						focustrapBottom.removeEventListener( 'focus', auFocusTrapListener );


						// Remove the event listener for the keypress
						document.removeEventListener( 'keyup', auKeyListener );
					}

					// Toggle classes
					toggleClasses( target, state );
					toggleClasses(
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
				},
			});
		})( target, speed );
	}


	AU.mainNav = mainNav;

}( AU ));


if( typeof module !== 'undefined' ) {
	module.exports = AU;
}
