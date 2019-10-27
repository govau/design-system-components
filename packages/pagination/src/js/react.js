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


const AUPagination = () => (
	<div className="au-pagination">
		<strong>Yay!</strong>
	</div>
);

AUPagination.propTypes = {
	dark: PropTypes.bool
};

AUPagination.defaultProps = {};

export default AUPagination;
