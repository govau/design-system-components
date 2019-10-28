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

class AUPagination extends React.Component {

	/**
	 * Constructor
	 * @param  {object}  props - The props object
	 */

	constructor( props ) {
	  super( props );
	  const { totalRecords, recordsPerPage, pageNeighbours, totalPaginationItems, className = '', children, ...attributeOptions } = props;
  
	  this.recordsPerPage = typeof recordsPerPage === 'number' ? recordsPerPage : 10;
	  this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;
  
	  // pageNeighbours can be: 0, 1 or 2
	  this.pageNeighbours = typeof pageNeighbours === 'number'
		? Math.max(0, Math.min(pageNeighbours, 2))
		: 0;
  
	  this.totalPaginationItems = Math.ceil( this.totalRecords / this.pageLimit );
  
	  this.state = { currentPage: 1 };
	}
  
  }
  
  AUPagination.propTypes = {
	totalRecords: PropTypes.number.isRequired,
	pageLimit: PropTypes.number,
	pageNeighbours: PropTypes.number,
	onPageChanged: PropTypes.func
  };

  AUPagination.defaultProps = {
	
};

export default AUPagination;
