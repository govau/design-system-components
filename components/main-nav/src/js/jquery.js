/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * Main nav function
 *
 * Horizontal list of links to key areas on the website. Usually located in the header.
 *
 **************************************************************************************************************************************************************/



/**
 * The main nav jquery function to add attributes and event listeners
 *
 * Public functions are:
 * $('.js-au-main-nav').AUmainNav().addListeners()
 */
$.fn.AUmainNav = function( callbacks ) {

	$elements = this;

	var mainNavObject = {
		addListeners: function() {

			// each main navigation event handlers
			$elements
				.not('.js-au-main-nav-rendered') // making sure we only add the event listeners once
				.each( function( i, mainNav ) {
					var speed = $( mainNav ).attr('data-speed');

					$( mainNav ).addClass('js-au-main-nav-rendered'); // marking as processed

					$( mainNav )
						.find( '.au-main-nav__toggle--open, .au-main-nav__toggle--close, .au-main-nav__overlay' )
						.on( 'click', function( event ) {
							event.preventDefault();

							return AU.mainNav.Toggle( $( this )[ 0 ], speed, callbacks );
						})
				});

			return this;
		},
	};

	mainNavObject
		.addListeners();

	return mainNavObject;
};
