/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * card function
 *
 * A container for all types of content
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


const AUCard = () => (
	<div className="au-card">
		<strong>Yay!</strong>
	</div>
);

AUCard.propTypes = {
	dark: PropTypes.bool
};

AUCard.defaultProps = {};

export default AUCard;
