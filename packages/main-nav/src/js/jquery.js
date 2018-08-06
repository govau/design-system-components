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
			console.log( 'hello' );

			$('.au-main-nav__toggle--open').on('click', function() {
				var selector = $( this ).closest('.au-main-nav');
				console.log( selector );
				var speed = $( this ).attr('data-speed');

				AU.mainNav.Open( $( selector ), speed );
			});

			// close all
			$('.au-main-nav__toggle--close').not('.js-au-accordion-rendered').on('click', function() {
				var selector = $( this ).closest('.au-main-nav');
				console.log( selector );
				var speed = $( this ).attr('data-speed');

				AU.mainNav.Close( $( selector ), speed );
			}).addClass('js-au-accordion-rendered');

			return this;
		},
	};

	mainNavObject
		.addListeners();

	return mainNavObject;
};
