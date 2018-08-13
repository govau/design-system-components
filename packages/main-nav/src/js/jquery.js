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
$.fn.AUmainNav = function() {
	var $elements = this;

	var mainNavObject = {
		addListeners: function() {

			// Toggle the menu
			$( '.au-main-nav__toggle--open, .au-main-nav__toggle--close, .au-main-nav__overlay' ).on('click', function() {
				var speed = $( this ).attr('data-speed');

				AU.mainNav.Toggle( this, speed );
			});

			return this;
		},
	};

	mainNavObject
		.addListeners();

	return mainNavObject;
};
