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
import { Link } from "react-router-dom";

// ES5 dependency: import AUlinkList from '@gov.au/link-list';
// ES6 dependency: import AUlinkList from './link-list';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]

const LEFT_ELLIPSIS = 'Left';
const RIGHT_ELLIPSIS = 'Right';

// Helper method for creating array of numbers 
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
	  const { totalResults, recordsPerPage} = props;

	  this.fetchPaginationItems = this.fetchPaginationItems.bind(this);
	  this.setPaging = this.setPaging.bind(this);
	  this.handleClick = this.handleClick.bind(this);
	  this.handlePreviousClick = this.handlePreviousClick.bind(this);
	  this.handleNextClick = this.handleNextClick.bind(this);
	  this.handleLeftElipses = this.handleLeftElipses.bind(this);
	  this.handleRightElipses = this.handleRightElipses.bind(this);

	  this.recordsPerPage = typeof recordsPerPage === 'number' ? recordsPerPage : 10;
	  this.totalResults = typeof totalResults === 'number' ? totalResults : 0;

	  // calculate number of pagination items
	  this.totalPaginationItems = Math.ceil( this.totalResults / this.recordsPerPage );
	  this.state = { currentPage: 1 };

	}

	componentDidMount() {
		this.setPaging(1);
	  }

	// function to handle display of elipsis and pagination items - first and last items in the array are always visible
	fetchPaginationItems() {
	const totalPaginationItems = this.totalPaginationItems;
	const currentPage = this.state.currentPage;
	const totalNumbers = 5; // number of items to show in pagination before displaying elipsis to either the right or left-hand side of the pagination - i.e. [1], [2], [3] , [4] [...], [10]
	const startPage = Math.max( 2, currentPage - 2 );
	const endPage = Math.min( totalPaginationItems - 1, currentPage + 2 );
	let results = createPaginationarray( startPage, endPage );
	const extraItemsLeft = startPage > 2; // items hidden to the left of the pagination 
	const extraItemsRight = ( totalPaginationItems - endPage ) > 1; // items hidden to the right of the pagination 
	const spillOffset = totalNumbers - ( results.length + 1) ; // total number of pages hidden to either the left or right of pagination

	if ( extraItemsLeft && !extraItemsRight ) {
		// example output [1] [...], [7], [8], [9], [10]
		const extraItemsRight = createPaginationarray( startPage - spillOffset, startPage - 1 );
		results = [ LEFT_ELLIPSIS, ...extraItemsRight, ...results ];
		
	}

	else if ( !extraItemsLeft && extraItemsRight ) {
		// example output [1], [2], [3], [4], [...], [10]
		const extraItemsRight = createPaginationarray( endPage + 1, endPage + spillOffset );
		results = [ ...results, ...extraItemsRight, RIGHT_ELLIPSIS ];
		
	}

	else if(extraItemsLeft && extraItemsRight) {
		// example output [1], [...], [3], [4], [5], [6], [7], [...], [10]
		results = [ LEFT_ELLIPSIS, ...results, RIGHT_ELLIPSIS ];
		
	}
	
      return [ 1, ...results, totalPaginationItems ];
  
	  }

	setPaging( pageItem ){
	
	const currentPage =  pageItem;
		
		const Paginationdata = {
			currentPage,
			totalResults: this.totalResults,
			recordsPerPage: this.recordsPerPage,
			totalPaginationItems: this.totalPaginationItems 
		};

		this.setState({
			currentPage
		}, this.props.onChange( Paginationdata ));
	  
	}

	 handleClick( pageItem ) {
		this.setPaging( pageItem );
	  }

	  handleNextClick() {
		const currentPage = this.state.currentPage + 1;
		this.setPaging( currentPage );
	  }

	  handlePreviousClick() {
		const currentPage = this.state.currentPage - 1;
        this.setPaging( currentPage );
	  }

	  handleLeftElipses() {
		const currentPage = this.state.currentPage - 4;
        this.setPaging( currentPage );
      }

	  handleRightElipses() {
		const currentPage = this.state.currentPage + 4;
		this.setPaging( currentPage );
      }

	render() {

		if (!this.totalResults || this.totalPaginationItems === 1) return null;

		const { currentPage } = this.state;
		const items = this.fetchPaginationItems();
		const lastItem = this.totalPaginationItems;
		

		return (
			<div>
				<nav role="navigation" aria-label="Pagination Navigation" className={ `au-pagination ${ this.props.left ? 'au-pagination-left' : '' } ${ this.props.right ? 'au-pagination-right' : '' } ${ this.props.center ? 'au-pagination-center' : '' }` }>
					<ul className={ ` au-link-list au-link-list--inline ` }>
						<AUPaginationControls className={ `${ currentPage === 1? 'disabled' : '' } `} onClick={ this.handlePreviousClick } text="Previous" />
							
							{ items.map(( item, i ) => {

								if ( item === LEFT_ELLIPSIS ) return (
										<AUPaginationQuickJumper key={ i }  onClick={ this.handleLeftElipses }/>
									);
									console.log(this.state.currentPage - 4);
								if ( item === RIGHT_ELLIPSIS ) return (
									
										<AUPaginationQuickJumper key={ i }  onClick={ this.handleRightElipses }/>
									);
								return (
										<AUPaginationItem  key={ i }  className ={ `${ currentPage === item ? 'active' : '' }`} onClick={ () => this.handleClick( item ) } key={ i } id={ item }  >{ item }</AUPaginationItem>
									);			


							}) }

						<AUPaginationControls className={ `${ currentPage === lastItem ? 'disabled' : '' } `} onClick={ this.handleNextClick } text="Next" />
					</ul>
				</nav>
			</div>	
		);

	  }


  }

  AUPagination.propTypes = {
	totalResults: PropTypes.number.isRequired,
	recordsPerPage: PropTypes.number,
	onChange: PropTypes.func.isRequired,
	left: PropTypes.bool,
	right: PropTypes.bool,
	center: PropTypes.bool
  };

  AUPagination.defaultProps = {
	recordsPerPage: 10,
	totalResults: 0,
	className: '',
	left: false,
	right:false,
	center: true

};

/**
 * The pagination item component
 * @param { string } className        - An additional class, optional
 * @param { object } attributeOptions - Default HTML attributes
 * @param { string } label			  - aria-label for pagination items
 */

export const AUPaginationItem = ( { children, LinkComponent, className, label, current, link, ...attributeOptions } ) => {

	return <li className={ `au-pagination-item ${ className }` }>
			<a  className={ `au-pagination-link ${ className }` }  { ...attributeOptions }  aria-label={ label } aria-current={ current }>
				{ children }
			</a>
			</li>
};

AUPaginationItem.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	label: PropTypes.string,
	current: PropTypes.bool
}

AUPaginationItem.defaultProps = {
	className: '',
	label: '',
	current: false,
	LinkComponent: 'a'
};


export const AUPaginationQuickJumper = ( { children, className, label, ...attributeOptions } ) => {

	// set aria-label attribute
		if ( children === 'Left' ){
				label = "go to previous page";
			}

		else if(children === 'Right'){
				label = "go to next page";
			}

	return <li className="au-pagination-item">
				<a className={ `au-pagination-link ${ className }` } aria-label={ label } { ...attributeOptions }>
				<span className={ `au-pagination-link--quick-jumper ${ className }` } aria-hidden="true">...</span>
				</a>
  			</li>
};

AUPaginationQuickJumper.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	label: PropTypes.string
}

AUPaginationQuickJumper.defaultProps = {
	className: '',
	label: ''
};

export const AUPaginationControls = ( { text, className, label, disabled, ...attributeOptions } ) => {

	// set aria-label attribute
		if ( text === 'Previous' ){
				label = "Go to previous page";
			}

		else if( text === 'Next' ){
				label = "Go to next page";
			}

	// set aria-disabled attribute
		if( className.includes('disabled') ){
			disabled = true;
		}

	return <li className={ `au-pagination-control ${ className }` }>
				<a className={ `au-pagination-link au-pagination-controls-link ${ className }` } aria-label={ label } aria-disabled={ disabled } 		{ ...attributeOptions } text={ text }>
					{ text } 
				</a>
			</li>
};

AUPaginationControls.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	label: PropTypes.string,
	disabled: PropTypes.bool

}

AUPaginationControls.defaultProps = {
	className: '',
	label: '',
	disabled: false
};

export default AUPagination;
