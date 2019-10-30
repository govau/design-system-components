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

const LEFT_PAGE = '...';
const RIGHT_PAGE = '...';
const NEXT = 'Next';
const PREVIOUS = 'Previous';

//Helper method for creating array of numbers for pagination
const createPaginationarray = (from, to) => {
  let i = from;
  const PaginationItems = [];

  while (i <= to) {
    PaginationItems.push(i);
    i += 1;
  }

  return PaginationItems;
}



class AUPagination extends React.Component {

	/**
	 * Constructor
	 * @param  {object}  props - The props object
	 */

	constructor( props ) {
	  super( props );
	  const { totalResults, recordsPerPage, totalPaginationItems, className = ''} = props;
  
	  this.fetchPaginationItems = this. fetchPaginationItems.bind(this);

	  this.recordsPerPage = typeof recordsPerPage === 'number' ? recordsPerPage : 10;
	  this.totalResults = typeof totalResults === 'number' ? totalResults : 0;

	  //calculate number of pagination items
	  this.totalPaginationItems = Math.ceil( this.totalResults / this.recordsPerPage );
	  this.state = { currentPage: 1 };
	}

	fetchPaginationItems() {

		const totalPaginationItems = this.totalPaginationItems;
		const currentPage = this.state.currentPage;

		const startPage = Math.max(2, currentPage);
		const endPage = Math.min(totalPaginationItems - 1, currentPage);
  
		let pages = (startPage, endPage);
		
		return createPaginationarray(1, totalPaginationItems) ;
	
	  }

	render() {

		if (!this.totalResults || this.totalPaginationItems === 1) return null;
	
		const { currentPage } = this.state;
		const items = this.fetchPaginationItems();
	
		return (
		 
			<nav role="navigation" aria-label="Pagination Navigation" className={`au-pagination ` + `${className} `}>
			<ul className={ ` au-link-list au-link-list--inline ${ className } ` }>
			<AUPaginationItem className={` ${currentPage === 1 ? 'disabled' : ''} `}>Next</AUPaginationItem>	
				{ items.map(( item, i ) => {
						
				  return (
					<AUPaginationItem key={ i }>{ item }</AUPaginationItem>			
				  );
	
				}) }
			<AUPaginationItem className={` ${currentPage === totalPaginationItems ? 'disabled' : ''} `}>Previous</AUPaginationItem>	
	
			  </ul>
			</nav>
			
		);
	
	  }
	

  }
  
  AUPagination.propTypes = {
	totalResults: PropTypes.number.isRequired,
	recordsPerPage: PropTypes.number,
	 onChanged: PropTypes.func
  };

  AUPagination.defaultProps = {
	recordsPerPage: 10,
	totalResults: 0,
	className: ''

};

/**
 * The pagination item component
 * @param { string } className        - An additional class, optional
 * @param { object } attributeOptions - Default HTML attributes
 * @param { string } label			  - aria-label for pagination items
 * @param { bool } 	 disabled		  - aria-label for pagination items
 * @param  {object}  onClick          - The onChange event handler
 */
export const AUPaginationItem = ( { children, className, label, onClick, ...attributeOptions } ) => {
	
	// set aria label attribute
	if ( children === 'Previous' ) {
		label = "go to previous page";
		 
	}
	else if (children === 'Next') {

		label = "go to next page";

	}
	else {
		label = "Page " + children;
	}
	

	return <li className={`au-pagination__item ${ className }`}>
			<a href="#0" className={`au-pagination__link ${ className }`}  aria-label={label}>
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
