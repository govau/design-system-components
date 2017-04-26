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
	 * @param  {object} element  - The DOM element we want to set Aria roles for
	 *
	 * @return {object}          - something
	 */
	function setAriaRoles( element ) {
		element.setAttribute('aria-hidden', false);
		console.log(element);
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

		UIKIT.animate.Toggle({
			element: target,
			property: 'height',
			speed: speed || 250,
			callback: function() {
				setAriaRoles( element );
				setAriaRoles( target );
			}
		});

		return false;

	}

	UIKIT.accordion = accordion;

}( UIKIT ));




// for( var i = 0; i < accordionHeaders.length; i++ ) {
// 	var accordionHeader = accordionHeaders[ i ];
// 	var accordionBody = accordionBodies[ i ];
//
// 	// set aria-expanded = false on acordion header
// 	accordionHeader.setAttribute('aria-expanded', false);
// 	accordionBody.setAttribute('aria-hidden', true);
//
// 	accordionHeader.addEventListener('click', function(){
//
// 		// console.log( accordionHeader );
// 		// console.log( 'uikit-accordion-'+i );
// 		// console.log(accordionHeader);
// 		// UIKIT.animate.Toggle({
// 		// 	element: accordionHeader,
// 		// 	property: 'height',
// 		// 	speed: 250,
// 		// })
//
// 	})
// }
