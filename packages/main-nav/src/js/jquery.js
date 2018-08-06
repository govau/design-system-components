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

			// Open the menu
			$('.au-main-nav__toggle--menu').on('click', function() {
				var selector = $( this ).closest('.au-main-nav')[ 0 ];
				var speed = $( this ).attr('data-speed');

				AU.mainNav.Open( selector, speed );
			});

			// Close the menu
			$('.au-main-nav__toggle--close, .au-main-nav__overlay').on('click', function() {
				var selector = $( this ).closest('.au-main-nav')[ 0 ];
				var speed = $( this ).attr('data-speed');

				AU.mainNav.Close( selector, speed );
			}).addClass('js-au-accordion-rendered');

			return this;
		},
	};

	mainNavObject
		.addListeners();

	return mainNavObject;
};
