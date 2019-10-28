/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * pagination function
 *
 * Pagination allows large amounts of content to be separated into multiple pages.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


/**
 * AUpagination
 * @param  {object[]}   items 				- items in pagination list
 * @param {object} 	currentPage      	- 
 * @param  {object}   	attributeOptions   	- Default HTML attributes
 */

const AUPagination = ({ items, className, ...attributeOptions}) => {

	return (
			<nav role="navigation" aria-label="Pagination Navigation" className={`au-pagination ` + `${className}`} {...attributeOptions}>
				<ul className={ ` au-link-list au-link-list--inline ${ className }`} { ...attributeOptions }>
					<AUPaginationItem>Previous</AUPaginationItem>
						{
							items.map(
								( item, i ) => <AUPaginationItem  key={ i } >{ item }</AUPaginationItem>
							)
						}
					<AUPaginationItem>Next</AUPaginationItem>
					</ul>
			</nav>
	)
};

AUPagination.propTypes = {
	dark: PropTypes.bool,
	className: PropTypes.string
};

AUPagination.defaultProps = {
	className: ''

};

/**
 * The pagination item component
 * @param {string} className        - An additional class, optional
 * @param {object} attributeOptions - Default HTML attributes
 * @param {string} label			- aria-label for pagination items
 */
export const AUPaginationItem = ( { children, className, label, ...attributeOptions } ) => {
	
	if ( children === 'Previous' ) {
		label = "go to previous page";
		 
	}
	else if (children === 'Next') {

		label = "go to next page";

	}
	else {
		label = "Page " + children;
	}
	

	return <li className={`au-pagination__item ${ className }`} { ...attributeOptions }>
				<a href="#0" className={`au-pagination__link ${ className }`} aria-label={ label }>
					{children}
				</a>
			</li>
};

AUPaginationItem.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
}

AUPaginationItem.defaultProps = {
	className: ''
};

export default AUPagination;
