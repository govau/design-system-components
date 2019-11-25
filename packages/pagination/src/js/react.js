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

// ES5 dependency: import AUlinkList from '@gov.au/link-list';
// ES6 dependency: import AUlinkList from './link-list';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]

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
	  const { totalResults, recordsPerPage } = props;

	  this.fetchPaginationItems = this.fetchPaginationItems.bind(this);
	  this.handleClick = this.handleClick.bind(this);
	  this.handlePreviousClick = this.handlePreviousClick.bind(this);
	  this.handleNextClick = this.handleNextClick.bind(this);
	  this.handleLeftElipses = this.handleLeftElipses.bind(this);
	  this.handleRightElipses = this.handleRightElipses.bind(this);


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
	const startPage = Math.max(2, currentPage - 2);
	const endPage = Math.min(totalPaginationItems - 1, currentPage + 2);
	let results = createPaginationarray(startPage, endPage);
	const extraItemsLeft = startPage > 2;
	const extraItemsRight = (totalPaginationItems - endPage) > 1;
	const spillOffset = totalNumbers - (results.length + 1);

	if (extraItemsLeft && !extraItemsRight) {
		const extraItemsRight = createPaginationarray(startPage - spillOffset, startPage - 1);
		results = [LEFT_ELLIPSIS, ...extraItemsRight, ...results];
		
	}

	else if (!extraItemsLeft && extraItemsRight) {
		const extraItemsRight = createPaginationarray(endPage + 1, endPage + spillOffset);
		results = [...results, ...extraItemsRight, RIGHT_ELLIPSIS];
		
	}

	else if(extraItemsLeft && extraItemsRight) {
		results = [LEFT_ELLIPSIS, ...results, RIGHT_ELLIPSIS];
		
	}
	

      return [1, ...results, totalPaginationItems];

  
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

			<AUPaginationControls className={`${ currentPage === 1? 'disabled' : '' } `} onClick={ this.handlePreviousClick }text="Previous" />
				
				{ items.map(( item, i ) => {

					if ( item === LEFT_ELLIPSIS ) return (
							<AUPaginationQuickJumper key={ i } onClick={ this.handleLeftElipses }/>
					  	);

					  if ( item === RIGHT_ELLIPSIS ) return (
							<AUPaginationQuickJumper key={ i } onClick={ this.handleRightElipses }/>
					  	);

					return (
							<AUPaginationItem key={ i } className ={ `${currentPage === item ? 'active' : ''}`} onClick={ this.handleClick } key={ i } id={ item }  >{ item }</AUPaginationItem>
						);			


				}) }

					<AUPaginationControls className={`${currentPage === lastItem ? 'disabled' : ''} `} onClick={ this.handleNextClick } text="Next" />
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
export const AUPaginationItem = ( { children, className, label, current, ...attributeOptions } ) => {

	label = "Page " + children;

	if( className.includes('active') ){
		current = true;
	}


	return <li className={ `au-pagination__item ${ className }` }>
			<a href="#" className={ `au-pagination__link ${ className }` }  { ...attributeOptions }  aria-label={ label } aria-current={ current }>
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
	current: false
};


export const AUPaginationQuickJumper = ( { children, className, label, ...attributeOptions } ) => {

	// set aria label attribute

		if ( children === 'Left' ){
				label = "go to previous page";
			}

		else if(children === 'Right'){
				label = "go to next page";
			}

	return <li className="au-pagination__item">
				<a className={ `au-pagination__link ${ className }` }  href="#" aria-label={ label } { ...attributeOptions }>
				<span className={ `au-pagination__link__quick-jumper ${ className }` } aria-hidden="true">...</span>
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

	return <li className={ `au-pagination__control ${ className }` }>
				<a href="#" className={ `au-pagination__link ${ className }` } aria-label={ label } aria-disabled={ disabled } 		{ ...attributeOptions } text={ text }>
					{ text } 
				</a>
			</li>
};

AUPaginationQuickJumper.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	label: PropTypes.string,
	disabled: PropTypes.bool

}

AUPaginationQuickJumper.defaultProps = {
	className: '',
	label: '',
	disabled: false
};

export default AUPagination;
