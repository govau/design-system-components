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
 * @param  {object[]}   items - 
 * @param  {string}   	alignPagination - Alignment of pagination on page - can be one of 'Left', 'Right', 'Center' 
 * @param  {bool}		displayPreviousBtn - Display previous button or not	  
 * @param  {object} 	pageLimit      - Number of records to be shown per page 
 * @param  {bool}   	dark        - Dark variation of pagination
 *  @param {object}   	attributeOptions   - Default HTML attributes
 * @param  {bool}   	responsive  - Responsive variation, less pagination items show on smaller devices
 */

const AUPagination = ({ items, alignPagination, pageLimit,responsive , dark, className }) => {
	return (
<ul className={ ` au-link-list ${ className }`} { ...attributeOptions }>
		{
			items.map(
				( item, i ) => <AUPaginationItem  key={ i } >{ item }</AUPaginationItem>
			)
		}
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
		{children}
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
