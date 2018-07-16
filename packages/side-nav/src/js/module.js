/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * sideNav function
 *
 * A vertical list of links for site navigation typically placed next to the body content.
 *
 **************************************************************************************************************************************************************/

var AU = AU || {};


// This is necessary to use accordion javascript
( function( AU ) {

	//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	// NAMESPACE MODULE
	//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	var sideNav = {}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// PRIVATE FUNCTIONS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	/**
	 * PRIVATE
	 * Get the style of the element
	 */
	function GetStyle( element, property ) {
		return (
			typeof getComputedStyle !== 'undefined'
				? getComputedStyle( element, null )
				: element.currentStyle
		)[ property ]; // avoid getPropertyValue altogether
	}


	/**
	 * PRIVATE
	 * Toggle the aria-hidden based on if the menu is visible
	 */
	function ToggleAriaRoles( elements ) {
		for( var i = 0; i < elements.length; i++ ){
			var elementDisplay = GetStyle( elements[ i ], 'display' );

			if( elementDisplay === 'none' ) {
				elements[ i ].setAttribute( "aria-hidden", "true" );
			}
			else {
				elements[ i ].setAttribute( "aria-hidden", "false" );
			}
		}
	};


	var sideNavResizing = false;
	var sideNavContent = document.querySelectorAll( '.au-side-nav__content' );


	// Run on page load
	ToggleAriaRoles( sideNavContent );


	// On resize
	window.onresize = function() {
		// If we are already resizing don't toggle aria roles
		if( sideNavResizing ){
			return;
		}

		sideNavResizing = true; // We are resizing

		// Debounce the toggle functionality
		setTimeout( function(){
			ToggleAriaRoles( sideNavContent ); // Toggle the aria roles
			sideNavResizing = false;           // Get ready for next resize
		}, 250 );
	};


	AU.sideNav = sideNav;

}( AU ));


if( typeof module !== 'undefined' ) {
	module.exports = AU;
}
