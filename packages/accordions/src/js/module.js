/***************************************************************************************************************************************************************
 *
 * Accordion function
 *
 * A component to allow users to show or hide page elements.
 *
 **************************************************************************************************************************************************************/

var UIKIT = UIKIT || {};

( function( UIKIT ) {

	var accordion = {}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// PRIVATE FUNCTIONS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	/**
	 * PRIVATE
	 * Set the correct Aria roles for given element
	 *
	 * @param  {object} element  - The DOM element we want to set attributes for
	 *
	 * @return {object}          - something
	 */
	function setAriaRoles( element, target ) {

		// we toggle the aria tags on the accordion title and body
		var targetHeight = UIKIT.animate.GetCSSPropertyBecauseIE( target, 'height' );

		if( targetHeight === '0px' ) {
			target.setAttribute( 'aria-hidden', true );
			element.setAttribute( 'aria-expanded', false );
		}
		else {
			target.setAttribute('aria-hidden', false);
			element.setAttribute('aria-expanded', true);
		}

	}


	/**
	 * PRIVATE
	 * IE8 compatible function for replacing classes on a DOM node
	 *
	 * @param  {string} firstClass   - The firstClass you want to toggle on the DOM node
	 * @param  {object} secondClass  - The secondClass you want to toggle on the DOM node
	 * @param  {object} element      - The DOM element we want to toggle classes on
	 * @param  {object} state        - The current state of the animation on the element
	 *
	 */
	function toggleClasses( element, state ) {

		var openingClass = 'uikit-accordion__title--open';
		var closingClass = 'uikit-accordion__title--close';

		if( state === 'opening' ) {

			if( element.classList ) {
				element.classList.remove( closingClass );
				element.classList.add( openingClass );
			}
			else {
				element.className = element.className.replace( new RegExp("(^|\\b)" + openingClass.split(" ").join("|") + "(\\b|$)", "gi"), " " );
				element.className += " " + closingClass;
			}

		}
		else if( state === 'closing' ) {

			if( element.classList ) {
				element.classList.remove( openingClass );
				element.classList.add( closingClass );
			}
			else {
				element.className = element.className.replace( new RegExp("(^|\\b)" + closingClass.split(" ").join("|") + "(\\b|$)", "gi"), " " );
				element.className += " " + openingClass;
			}

		}
		else {
			throw new Error('Cannot determine state for "toggleClasses" function in UIKIT.accordion')
		}

	}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// PUBLIC FUNCTIONS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	/**
	 * Toggle an accordion element
	 *
	 * @param  {string} id      - The id of the element to toggle
	 * @param  {integer} speed  - The speed in ms for the animation
	 *
	 */
	accordion.Toggle = function( element, id , speed ) {

		var target = document.getElementById( id );

		toggleClasses( element, state );

		UIKIT.animate.Toggle({
			element: target,
			property: 'height',
			speed: speed || 250,
			callback: function() {
				setAriaRoles( element, target );
			}
		});

		return false;

	}


	/**
	 * Open a group of accordion elements
	 *
	 * @param  {object} elements - The elements to open
	 * @param  {string} id       - The id of the element to toggle
	 * @param  {integer} speed   - The speed in ms for the animation
	 *
	 */
	accordion.OpenAll = function( elements, id, speed ) {

		// errors if open attribute is removed on any <details>. open must stay on? add property open?
		// toggle open='' i reckon

		for( var i = 0; i < elements.length; i++ ) {

			var element = elements[ i ];
			var targetId = element.getAttribute('aria-controls')
			var target = document.getElementById( targetId );

			toggleClasses( element, state );

			UIKIT.animate.Run({
				element: target,
				property: 'height',
				endSize: 'auto',
				callback: function() {
					target.setAttribute( 'aria-hidden', false );
					element.setAttribute( 'aria-expanded', true );
				}
			})

		}

		return false;

	}


	/**
	 * Close a group of accordion elements
	 *
	 * @param  {object} elements - The elements to close
	 * @param  {string} id       - The id of the element to toggle
	 * @param  {integer} speed   - The speed in ms for the animation
	 *
	 */
	accordion.CloseAll = function( elements, id , speed ) {

		for( var i = 0; i < elements.length; i++ ) {

			var element = elements[ i ];
			var targetId = element.getAttribute('aria-controls')
			var target = document.getElementById( targetId );

			toggleClasses( element, state );

			UIKIT.animate.Run({
				element: target,
				property: 'height',
				endSize: 0,
				callback: function() {
					target.setAttribute( 'aria-hidden', true );
					element.setAttribute( 'aria-expanded', false );
				}
			})

		}

		return false;

	}


	UIKIT.accordion = accordion;

}( UIKIT ));
