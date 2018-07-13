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
	 * Debounce function to run a function after it has stopped being called for a certain amount of time
	 */
	function Debounce( runThisFunction, wait, immediate ) {
		var timeout;

		return function() {
			var context = this;
			var args    = arguments;

			var later = function() {
				timeout = null;
				if (!immediate) runThisFunction.apply( context, args );
			};

			var callNow = immediate && !timeout;

			clearTimeout( timeout );
			timeout = setTimeout( later, wait );

			if ( callNow ) {
				runThisFunction.apply( context, args );
			};
		};
	};


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


	var sideNavContent = document.querySelectorAll( '.au-side-nav__content' );


	// Run on page load
	ToggleAriaRoles( sideNavContent );


	// Run PageResize function on resize
	window.onresize = function() {
		Debounce( ToggleAriaRoles( sideNavContent ), 250 );
	}

	AU.sideNav = sideNav;

}( AU ));


if( typeof module !== 'undefined' ) {
	module.exports = AU;
}
