/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * sideNav function
 *
 * A vertical list of links for site navigation typically placed next to the body content.
 *
 **************************************************************************************************************************************************************/

/**
 * The side-nav jquery function to toggle aria roles based on display
 */
$.fn.AUsideNav = function() {

	/**
	 * Toggle the aria roles of the navigation
	 */
	function ToggleAriaRoles( elements ) {

		// Iterate through the navigations
		$.each( elements, function( index, element ){
			// Check if the content is displayed
			var elementDisplay = $( element ).css( 'display' );

			// Change the aria role to reflect the content
			if( elementDisplay === 'none' ) {
				$( element ).attr( "aria-hidden", "true" );
			}
			else {
				$( element ).attr( "aria-hidden", "false" );
			}
		});
	};


	var sideNavContent = $( '.au-side-nav__content' );
	var sideNavResizing = false;


	ToggleAriaRoles( sideNavContent ); // Run on page load


	// Run PageResize function on resize
	$( window ).on( 'resize', function(){
		// Cancel if we are already resizing
		if( sideNavResizing ){
			return;
		}

		sideNavResizing = true;
		$( function(){
			ToggleAriaRoles( sideNavContent ); // Toggle the aria roles
			sideNavResizing = false;           // Get ready for next resize
		}).delay( 250 );
	});
};


// Run the sidenav functions
$.fn.AUsideNav();
