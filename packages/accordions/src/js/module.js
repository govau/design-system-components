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
			// replaceClass( 'uikit-accordion__body--open', 'uikit-accordion__body--closed', target )
			// replaceClass( 'uikit-accordion__title--open', 'uikit-accordion__title--closed', element )
			element.setAttribute( 'aria-expanded', false );
		}
		else {
			target.setAttribute('aria-hidden', false);
			// replaceClass( 'uikit-accordion__body--closed', 'uikit-accordion__body--open', target )
			// replaceClass( 'uikit-accordion__title--closed', 'uikit-accordion__title--open', element )
			element.setAttribute('aria-expanded', true);
		}

	}

	/**
	 * PRIVATE
	 * IE8 compatible function for replacing classes on a DOM node
	 *
	 * @param  {string} oldClass  - The existing class on the DOM node
	 * @param  {object} newClass  - The new class to add to the DOM node
	 * @param  {object} element   - The DOM element we want to change classes on
	 *
	 * @return {object}           - something
	 */
	function replaceClass( oldClass, newClass, element ) {

		if( element.classList ) {
			element.classList.remove( oldClass );
			element.classList.add( newClass );
		}
		else {
			element.className = element.className.replace( new RegExp("(^|\\b)" + oldClass.split(" ").join("|") + "(\\b|$)", "gi"), " " );
			element.className += " " + newClass;
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
		console.log(element);

		//setToggleClasses( element, target );

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

	UIKIT.accordion = accordion;

}( UIKIT ));
