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
 * @param  {object} 	pageLimit      		- Number of records to be shown per page 
 *  @param {object} 	currentPage      	- 
 * @param  {object}   	attributeOptions   	- Default HTML attributes
 */

const AUPagination = ({ items, className, ...attributeOptions}) => {
	return (
<ul className={ ` au-link-list au-link-list--inline ${ className }`} { ...attributeOptions }>
	<AUPaginationItem>Previous</AUPaginationItem>
		{
			items.map(
				( item, i ) => <AUPaginationItem  key={ i } >{ item }</AUPaginationItem>
			)
		}
	<AUPaginationItem>Next</AUPaginationItem>
	</ul>
	)
};

AUPagination.propTypes = {
	dark: PropTypes.bool
};

AUPagination.defaultProps = {};

/**
 * The pagination item component
 * @param {string} className        - An additional class, optional
 * @param {object} attributeOptions - Default HTML attributes
 */
export const AUPaginationItem = ( { children, className,...attributeOptions } ) => {
	return <li className={` ${ className }`} { ...attributeOptions }>
				<a>
					{children}
				</a>
			</li>
};

export default AUPagination;
