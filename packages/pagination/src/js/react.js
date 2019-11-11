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

const LEFT_ELLIPSIS = 'Left';
const RIGHT_ELLIPSIS = 'Right';


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
	  const { totalResults, recordsPerPage, className = ''} = props;
  
	  this.fetchPaginationItems = this.fetchPaginationItems.bind(this);
	  this.handleClick = this.handleClick.bind(this);
	  this.handlePreviousClick = this.handlePreviousClick.bind(this);
	  this.handleNextClick = this.handleNextClick.bind(this);
	  this.handleLeftElipses = this.handleLeftElipses.bind(this);
	  this.handleRightElipses = this.handleRightElipses.bind(this);

	  
	  this.recordsPerPage = typeof recordsPerPage === 'number' ? recordsPerPage : 10;
	  this.totalResults = typeof totalResults === 'number' ? totalResults : 0;
	  this.className = "";
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
      let results = createPaginationarray(startPage, endPage);
      const extraItemsLeft = startPage > 2;
      const extraItemsRight = (totalPaginationItems - endPage) > 1;
      const spillOffset = totalNumbers - (results.length + 1);

      switch (true) {
       
        case (extraItemsLeft && !extraItemsRight): {
          const extraItemsRight = createPaginationarray(startPage - spillOffset, startPage - 1);
          results = [LEFT_ELLIPSIS, ...extraItemsRight, ...results];
          break;
        }

        
        case (!extraItemsLeft && extraItemsRight): {
          const extraItemsRight = createPaginationarray(endPage + 1, endPage + spillOffset);
          results = [...results, ...extraItemsRight, RIGHT_ELLIPSIS];
          break;
        }

       
        case (extraItemsLeft && extraItemsRight):
        default: {
			results = [LEFT_ELLIPSIS, ...results, RIGHT_ELLIPSIS];
          break;
        }
      }

      return [1, ...results, totalPaginationItems];

    }

		return createPaginationarray(1, totalPaginationItems) ;
	  }

	 handleClick() {

		let itemId = Number(event.target.id);
		const currentPage = itemId;
        this.setState({
		  currentPage
		});
		
	  }
	  
	  handleNextClick() {
	
		const currentPage = this.state.currentPage + 1;
        this.setState({
		  currentPage
		});
	  }
	  
	  handlePreviousClick() {
	
		const currentPage = this.state.currentPage - 1;
        this.setState({
		  currentPage
		});
	  }

	  handleLeftElipses() {
	
		const currentPage = this.state.currentPage - 4;
        this.setState({
		  currentPage
		});
		
      }

	  handleRightElipses() {
		
		const currentPage = this.state.currentPage + 4;
		console.log(currentPage + "CURRENT");
        this.setState({
			
		  currentPage
		});
		
      }

	render() {

		if (!this.totalResults || this.totalPaginationItems === 1) return null;
	
		const { currentPage } = this.state;
		const items = this.fetchPaginationItems();
		const lastItem = this.totalPaginationItems;
		return (
		
			<nav role="navigation" aria-label="Pagination Navigation" className={`au-pagination `}>
			<ul className={ ` au-link-list au-link-list--inline` }>
				<li className={`au-pagination__control`}>
					<a href="#0" className={`au-pagination__link ${currentPage === 1? 'disabled' : ''}`} onClick={ this.handlePreviousClick }>
					Previous
					</a>
				</li>
				{ items.map(( item, i ) => {
						
					if ( item === LEFT_ELLIPSIS ) return (
						<li key={item} className="au-pagination__item">
						  <a className="au-pagination__link" href="#" aria-label="Show next 5 pages" onClick={ this.handleLeftElipses }>
						  <span className={ `au-pagination__link__ellipsis `} aria-hidden="true">...</span>
						  </a>
						</li>
					  	);
		
					  if ( item === RIGHT_ELLIPSIS ) return (
						<li key={item} className="au-pagination__item">
						  <a className="au-pagination__link " href="#" aria-label="Show next 5 pages" onClick={ this.handleRightElipses }>
						  <span className={ `au-pagination__link__ellipsis`} aria-hidden="true">...</span>
						  </a>
						</li>
					  	);
					
					return (
						<AUPaginationItem className ={ `${currentPage === item ? 'active' : ''}`} onClick={ this.handleClick } key={ i } id={item}  >{ item }</AUPaginationItem>
						);			
				
	
				}) }

					<li className={`au-pagination__control`}>
						<a href="#" className={`au-pagination__link ${currentPage === lastItem ? 'disabled' : ''} `} onClick={ this.handleNextClick }>
							Next
						</a>
					</li>
			  </ul>
			</nav>
			
		);
	
	  }
	

  }
  
  AUPagination.propTypes = {
	totalResults: PropTypes.number.isRequired,
	recordsPerPage: PropTypes.number,
	onClick: PropTypes.func,
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
	switch(true){
		case ( children === 'Previous' ):
			 {
				label = "go to previous page";
				break;			 
			}
			case (children === 'Next'):
			 {
				label = "go to next page";
				break;			 
			}
				default: label = "Page " + children;
				break;			 
			
	}

	if(className.includes('active')){
		label = "Page " + children + ",curent page";
	}

	return <li className={`au-pagination__item ${ className }`}>
			<a href="#" className={`au-pagination__link ${ className }`}  { ...attributeOptions }  aria-label={label}>
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
