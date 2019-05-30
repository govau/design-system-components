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


const AUCard = ({children, link, ...attributesOptions}) => {
	let CardContainer = 'div';

	if( link !== undefined ) {
		CardContainer = 'a';
		attributesOptions.href = link;
	}

	return (
		<CardContainer className="au-card">
			{children}
		</CardContainer>
	)
};

AUCard.propTypes = {
	dark: PropTypes.bool
};

AUCard.defaultProps = {};

export const AUcardInner = ({ children, ...attributesOptions }) => (
	<div className="au-card__inner" {...attributesOptions}>
		{children}
	</div>
);

export const AUcardImage = ({ src, ...attributesOptions }) => (
	<img className="au-card__image" src={ src } {...attributesOptions} />
)

export const AUcardDivider = ({ className, ...attributesOptions }) => (
	<hr className="au-card__divider" {...attributesOptions} />
)

export default AUCard;
