/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * Accordion function
 *
 * A component to allow users to show or hide page elements.
 *
 **************************************************************************************************************************************************************/


/**
 * The accordion jquery function to add attributes and event listeners
 *
 * Public functions are:
 * $('.js-uikit-accordion-wrapper').uikitAccordion().isOpen()
 * $('.js-uikit-accordion-wrapper').uikitAccordion().setA11y()
 * $('.js-uikit-accordion-wrapper').uikitAccordion().addListeners()
 */
$.fn.uikitAccordion = function() {
	var $elements = this;

	return {
		/**
		 * Check an accordion for its state
		 *
		 * @return {Boolean} - true = open; false = closed
		 */
		isOpen: function() {
			return !$elements.children('.js-uikit-accordion').hasClass('uikit-accordion--closed');
		},


		/**
		 * Adding the correct aria and role attributes
		 */
		setA11y: function() {
			$elements.each( function( i, accordion ) { //render multiple elements
				var $accordion = $( accordion );
				var _isOpen = $accordion.uikitAccordion().isOpen();
				var $controls = $accordion.children('.js-uikit-accordion');
				var $body = $accordion.children('.js-uikit-accordion-body');

				if( _isOpen ) {
					$controls
						.attr( 'aria-controls', $controls.attr( 'href' ).substr( 1 ) )
						.attr( 'aria-expanded', 'true' )
						.attr( 'aria-selected', 'true' )
						.attr( 'role', 'tab' );

					$body
						.attr( 'aria-hidden', 'false' );
				}
				else {
					$controls
						.attr( 'aria-controls', $controls.attr( 'href' ).substr( 1 ) )
						.attr( 'aria-expanded', 'false' )
						.attr( 'aria-selected', 'false' )
						.attr( 'role', 'tab' );

					$body
						.attr( 'aria-hidden', 'true' );
				}
			});

			return this;
		},


		addListeners: function() {
			$elements
				.not('.js-uikit-accordion-rendered') // making sure we only add the event listeners once
				.each( function( i, accordion ) {

					$( accordion )
						.on('click', function( event ) {
							event.preventDefault();

							UIKIT.accordion.Toggle( $( accordion ).children('.js-uikit-accordion')[ 0 ] );
						})
						.addClass('js-uikit-accordion-rendered'); // marking as processed
			});

			return this;
		},
	};
};
