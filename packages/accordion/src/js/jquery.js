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
 * $('.js-au-accordion-wrapper').AUaccordion().isOpen()
 * $('.js-au-accordion-wrapper').AUaccordion().setA11y()
 * $('.js-au-accordion-wrapper').AUaccordion().addListeners()
 */
$.fn.AUaccordion = function( callbacks ) {
	var $elements = this;

	var accordionObject = {
		/**
		 * Check an accordion for its state
		 *
		 * @return {Boolean} - true = open; false = closed
		 */
		isOpen: function() {
			return !$elements.children('.js-au-accordion').hasClass('au-accordion--closed');
		},


		/**
		 * Adding the correct aria and role attributes
		 */
		setA11y: function() {
			$elements.each( function( i, accordion ) { //render multiple elements
				var $accordion = $( accordion );
				var _isOpen = accordionObject.isOpen();
				var $controls = $accordion.children('.js-au-accordion');

				if( _isOpen ) {
					$controls
						.attr( 'aria-controls', $controls.attr( 'href' ).substr( 1 ) )
						.attr( 'aria-expanded', 'true' )
						.attr( 'aria-selected', 'true' )
						.attr( 'role', 'tab' );
				}
				else {
					$controls
						.attr( 'aria-controls', $controls.attr( 'href' ).substr( 1 ) )
						.attr( 'aria-expanded', 'false' )
						.attr( 'aria-selected', 'false' )
						.attr( 'role', 'tab' );
				}
			});

			return this;
		},


		addListeners: function() {
			// open all
			$('.js-au-openall').not('.js-au-accordion-rendered').on('click', function() {
				var selector = $( this ).attr('data-selector');
				var speed = $( this ).attr('data-speed');

				AU.accordion.Open( $( selector ), speed );
			}).addClass('js-au-accordion-rendered');

			// close all
			$('.js-au-closeall').not('.js-au-accordion-rendered').on('click', function() {
				var selector = $( this ).attr('data-selector');
				var speed = $( this ).attr('data-speed');

				AU.accordion.Close( $( selector ), speed );
			}).addClass('js-au-accordion-rendered');

			// toggle all
			$('.js-au-toggleall').not('.js-au-accordion-rendered').on('click', function() {
				var selector = $( this ).attr('data-selector');
				var speed = $( this ).attr('data-speed');

				AU.accordion.Toggle( $( selector ), speed );
			}).addClass('js-au-accordion-rendered');

			// each accordion event handlers
			$elements
				.not('.js-au-accordion-rendered') // making sure we only add the event listeners once
				.each( function( i, accordion ) {
					var speed = $( accordion ).attr('data-speed');

					$( accordion )
						.children('.js-au-accordion')
						.on('click', function( event ) {
							event.preventDefault();

							AU.accordion.Toggle( $( accordion ).children('.js-au-accordion')[ 0 ], speed, callbacks );
						})
						.addClass('js-au-accordion-rendered'); // marking as processed
			});

			return this;
		},
	};


	// adding everything to the DOM
	accordionObject
		.setA11y()
		.addListeners();


	// exposing the public API
	return accordionObject;
};
