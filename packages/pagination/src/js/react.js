/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * pagination function
 *
 * Pagination allows large amounts of content to be seperated into multiple pages
 *
 **************************************************************************************************************************************************************/

/**
 * AUpagination
 * @param  {object[]}   items 				- items in pagination list
 * @param  {object} 	pageLimit      		- Number of records to be shown per page 
 *  @param {object} 	currentPage      	- 
 * @param  {object}   	attributeOptions   	- Default HTML attributes
 */

const AUPagination = ({ items, className }) => {
	return (
<ul className={ ` au-link-list ${ className }`} { ...attributeOptions }>
	<AUPaginationItem  key={ i } >Previous</AUPaginationItem>
		{
			items.map(
				( item, i ) => <AUPaginationItem  key={ i } >{ item }</AUPaginationItem>
			)
		}
	<AUPaginationItem  key={ i } >Next</AUPaginationItem>
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

AUtableRow.defaultProps = {
	className: ''
};

AUtableRow.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
}




export default AUPagination;
