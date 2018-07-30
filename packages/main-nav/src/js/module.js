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
	 * @param  {object} target       - The DOM element we want to toggle classes on
	 * @param  {object} state        - The current state of the animation on the element
	 * @param  {string} openingClass - The firstClass you want to toggle on the DOM node
	 * @param  {string} closingClass - The secondClass you want to toggle on the DOM node
	 */
	function toggleClasses( element, state, openingClass, closingClass ) {
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
	 * Open a mainNav element
	 *
	 * @param  {string}  element  - The toggle for the main nav
	 * @param  {integer} speed    - The speed in ms for the animation
	 *
	 */
	mainNav.Open = function( element, speed ) {
		// stop event propagation
		try {
			window.event.cancelBubble = true;
			event.stopPropagation();
		}
		catch( error ) {}

		var targetId = element.getAttribute('aria-controls');
		var target   = document.getElementById( targetId );
		var targetContent = target.querySelector( '.au-main-nav__content' );
		var targetOverlay = target.querySelector( '.au-main-nav__overlay' );

		targetContent.style.display = 'block';
		targetOverlay.style.left    = 0;
		targetOverlay.style.opacity = 1;

		(function( target, overlay, speed ) {
			AU.animate.Run({
				element: targetContent,
				property: 'left',
				endSize: 0,
				speed: speed || 300,
				callback: function() {
					toggleClasses( target, 'open' );
					toggleClasses( document.documentElement, 'closing', 'js-au-main-nav__scroll--unlocked', 'js-au-main-nav__scroll--locked' );
					targetContent.style.display = '';
					targetContent.style.left    = '';
					targetOverlay.style.display = '';
					targetOverlay.style.left    = '';
				},
			});
		})( target, targetOverlay, speed );
	}


	/**
	 * Close a mainNav element
	 *
	 * @param  {string}  elements - The DOM node/s to toggle
	 * @param  {integer} speed    - The speed in ms for the animation
	 *
	 */
	mainNav.Close = function( element, speed ) {
		// stop event propagation
		try {
			window.event.cancelBubble = true;
			event.stopPropagation();
		}
		catch( error ) {}

		var targetId      = element.getAttribute('aria-controls');
		var target        = document.getElementById( targetId );
		var targetContent = target.querySelector( '.au-main-nav__content' );
		var targetOverlay = target.querySelector( '.au-main-nav__overlay' );

		targetOverlay.style.opacity = '0';

		(function( target, speed ) {
			AU.animate.Run({
				element: targetContent,
				property: 'left',
				endSize: -300,
				speed: speed || 300,
				callback: function() {
					toggleClasses( document.documentElement, 'closing', 'js-au-main-nav__scroll--unlocked', 'js-au-main-nav__scroll--locked' );
					toggleClasses( target, 'close' );
					targetContent.style.display = '';
					targetContent.style.left    = '';
					targetOverlay.style.opacity = '';
				},
			});
		})( target, speed );
	}


	AU.mainNav = mainNav;

}( AU ));


if( typeof module !== 'undefined' ) {
	module.exports = AU;
}
