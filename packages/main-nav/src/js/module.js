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
	 * Set the correct Aria roles for given element on the main-nav title and body
	 *
	 * @param  {object} element - The DOM element we want to set attributes for
	 * @param  {object} target  - The DOM element we want to set attributes for
	 * @param  {string} state   - The DOM element we want to set attributes for
	 */
	function setAriaRoles( element, target, state ) {
		if( state === 'closing' ) {
			target.setAttribute( 'aria-hidden', true );
			element.setAttribute( 'aria-expanded', false );
			element.setAttribute( 'aria-selected', false );
		}
		else {
			target.setAttribute( 'aria-hidden', false );
			element.setAttribute( 'aria-expanded', true );
			element.setAttribute( 'aria-selected', true );
		}
	}


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
	mainNav.Toggle = function( elements, speed ) {

		// stop event propagation
		try {
			window.event.cancelBubble = true;
			event.stopPropagation();
		}
		catch( error ) {}

		if( elements.length === undefined ) {
			elements = [ elements ];
		}

		for( var i = 0; i < elements.length; i++ ) {
			var element = elements[ i ];
			var targetId = element.getAttribute( 'aria-controls' );
			var target = document.getElementById( targetId );

			if( target == null ) {
				throw new Error(
					'AU.mainNav.Toggle cannot find the target to be toggled from inside aria-controls.\n' +
					'Make sure the first argument you give AU.mainNav.Toggle is the DOM element (a button or a link) that has an aria-controls attribute that points ' +
					'to a div that you want to toggle.'
				);
			}

			var state = element.getAttribute( 'aria-expanded' ) === 'true' ? 'closing' : 'opening';

			toggleClasses( element, state );
			toggleClasses( target, state );
			setAriaRoles( element, target, state );
		}

		return false;
	}


	AU.mainNav = mainNav;

}( AU ));


if( typeof module !== 'undefined' ) {
	module.exports = AU;
}
