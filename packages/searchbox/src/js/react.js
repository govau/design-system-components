/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * searchbox function
 *
 *
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';

// ES5 dependency: import AUtextInput from '@gov.au/text-inputs';
// ES6 dependency: import AUtextInput from './text-inputs';

// ES5 dependency: import AUbutton from '@gov.au/buttons';
// ES6 dependency: import AUbutton from './buttons';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]



const AUsearchbox = ({ label, btnText, dark, responsive, id, icon, className, onClick, ...attributeOptions}) => (
<div className={`au-search ` +
						`${dark ? 'au-search--dark' : ''} ` +
						`${icon ? 'au-search--icon' : ''} ` +
						`${responsive ? 'au-search--responsive' : ''} ` +
						`${className}`} {...attributeOptions}>
	{ label && <label htmlFor={id } className="au-search__label">{label}</label> }
	<AUtextInput dark={dark} id={id} />
	<div className="au-search__btn">
		<AUbutton
			onClick={onClick}
			dark={dark}>
				<span className="au-search__submit-btn-text">{btnText}</span>
		</AUbutton>
	</div>
</div>
);

AUsearchbox.propTypes = {
	dark: PropTypes.bool,
};

AUsearchbox.defaultProps = {
	className: ''
};

export default AUsearchbox;
