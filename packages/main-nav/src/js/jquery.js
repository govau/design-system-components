/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * mainNav function
 *
 * Horizontal list of links to key areas on the website. Usually located in the header.
 *
 **************************************************************************************************************************************************************/



/**
 * The main nav jquery function to add attributes and event listeners
 *
 * Public functions are:
 */
$.fn.AUmainNav = function( callbacks ) {

	$elements = this;
	$callbacks = callbacks;

	var mainNavObject = {
		addListeners: function() {

			// Toggle the menu
			$( $elements )
				.not( '.js-au-main-nav-rendered' )
				.each( function( i, mainNav ) {
					$( mainNav ).find( '.au-main-nav__toggle--open, .au-main-nav__toggle--close, .au-main-nav__overlay' )
						.on( 'click', function() {
							event.preventDefault();

							// Get the speed
							var speed = $( this ).closest( '.au-main-nav__content' ).attr( 'data-speed' );

							// Run the open close toggle
							AU.mainNav.Toggle( this, speed, $callbacks );
						});

					$( mainNav ).addClass( 'js-au-main-nav-rendered' );
			});

			return this;
		},
	};

	mainNavObject
		.addListeners();

	return mainNavObject;
};
