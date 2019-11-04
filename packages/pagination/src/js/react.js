/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * pagination function
 *
 * Pagination allows large amounts of content to be separated into multiple pages.
 *
 **************************************************************************************************************************************************************/

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const LEFT_PAGE = '...';
const RIGHT_PAGE = '...';
const NEXT = 'Next';
const PREVIOUS = 'Previous';

//Helper method for creating array of numbers for pagination
const createPaginationarray = (first, last) => {
  let i = first;
  const PaginationItems = [];

  while (i <= last) {

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
	  const { totalResults, recordsPerPage, totalPaginationItems, className = '' , isDisabled} = props;
  
	  this.fetchPaginationItems = this.fetchPaginationItems.bind(this);
	  this.handleClick = this.handleClick.bind(this);
	  this.handleNextClick = this.handleClick.bind(this);
	  
	  this.recordsPerPage = typeof recordsPerPage === 'number' ? recordsPerPage : 10;
	  this.totalResults = typeof totalResults === 'number' ? totalResults : 0;

	  //calculate number of pagination items
	  this.totalPaginationItems = Math.ceil( this.totalResults / this.recordsPerPage );
	  this.state = { currentPage: 1 };
	}

	

	fetchPaginationItems() {
		const totalPaginationItems = this.totalPaginationItems;
		const currentPage = this.state.currentPage;
		const totalNumbers = 5;
    	const totalBlocks = 7;

    if (totalPaginationItems > totalBlocks) {

      const startPage = Math.max(2, currentPage - 2);
      const endPage = Math.min(totalPaginationItems - 1, currentPage + 2);
      let pages = createPaginationarray(startPage, endPage);
      const extraResultsLeft = startPage > 2;
      const extraResultsRight = (totalPaginationItems - endPage) > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
       
        case (extraResultsLeft && !extraResultsRight): {
          const extraPages = createPaginationarray(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        
        case (!extraResultsLeft && extraResultsRight): {
          const extraPages = createPaginationarray(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

       
        case (extraResultsLeft && extraResultsRight):
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPaginationItems];

    }

		return createPaginationarray(1, totalPaginationItems) ;
	  }

	 handleClick() {
		let listid = Number(event.target.id);
		const currentPage = listid;
        this.setState({
		  currentPage
		});
		
      }

	  handleNextClick() {
		let listid = Number(event.target.id);
		const currentPage = listid + 1;
        this.setState({
		  currentPage
		});
		
      }

	render() {

		if (!this.totalResults || this.totalPaginationItems === 1) return null;
	
		const { currentPage } = this.state;
		const items = this.fetchPaginationItems();
	
		return (
		
			<nav role="navigation" aria-label="Pagination Navigation" className={`au-pagination ` + `${className} `}>
			<ul className={ ` au-link-list au-link-list--inline ${ className } ` }>
			<AUPaginationItem className ={ `${currentPage === 1? 'disabled' : ''}`} onClick={ this.handleNextClick}>Next</AUPaginationItem>	
				{ items.map(( item, i ) => {
						
				  return (
					<AUPaginationItem  className ={ `${currentPage === item ? 'active' : ''}`} key={ i } onClick={ this.handleClick}  id={item}  >{ item }</AUPaginationItem>			
				  );
	
				}) }
			<AUPaginationItem>Previous</AUPaginationItem>	
		
			  </ul>
			</nav>
			
		);
	
	  }
	

  }
  
  AUPagination.propTypes = {
	totalResults: PropTypes.number.isRequired,
	recordsPerPage: PropTypes.number,
	onClick: PropTypes.func,
	onPageChanged: PropTypes.func
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
 * @param  {object}  onClick          - The onChange event handler
 */
export const AUPaginationItem = ( { children, className, label, ...attributeOptions } ) => {
	
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
			<a href="#0" className={`au-pagination__link ${ className }`}  { ...attributeOptions }  aria-label={label}>
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
