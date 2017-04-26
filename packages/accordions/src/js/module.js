/***************************************************************************************************************************************************************
 *
 * Accordion function
 *
 * A component to allow users to show or hide page elements.
 *
 **************************************************************************************************************************************************************/

var UIKIT = UIKIT || {};

( function( UIKIT ) {

	var accordionHeaders = []; // the array of accordion headers
	var accordionBodies = [];  // the array of accordion bodies

	var accordionHeaders = document.getElementsByClassName('js-uikit-accordion__title');
	var accordionBodies = document.getElementsByClassName('js-uikit-accordion__body');

	for( var i = 0; i < accordionHeaders.length; i++ ) {
		var accordionHeader = accordionHeaders[ i ];
		var accordionBody = accordionBodies[ i ];

		// set aria-expanded = false on acordion header
		accordionHeader.setAttribute('aria-expanded', false);
		accordionHeader.setAttribute('aria-controls', 'uikit-accordion-'+i);
		accordionBody.setAttribute('aria-hidden', true);
		accordionBody.setAttribute('id', 'uikit-accordion-'+i);

	}

}( UIKIT ));
