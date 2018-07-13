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
	function ToggleAriaRoles( element ) {
		var elementDisplay = GetStyle( element, 'display' );

		if( elementDisplay === 'none' ) {
			element.setAttribute( "aria-hidden", "true" );
		}
		else {
			element.setAttribute( "aria-hidden", "false" );
		}
	};


	// Run on page load
	ToggleAriaRoles();


	// Run PageResize function on resize
	window.onresize = function() {
		Debounce( ToggleAriaRoles(), 250 );
	}

	AU.sideNav = sideNav;

}( AU ));


if( typeof module !== 'undefined' ) {
	module.exports = AU;
}
