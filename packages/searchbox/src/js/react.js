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


/**
 * AUsearchBox
 *
 * @param  {string} label       - Text on label
 * @param  {string} btnText     - Text on button
 * @param  {string} btnType     - Button type
 * @param  {string} id          - Id of text input, required
 * @param  {bool}   dark        - Dark variation of search box
 * @param  {bool}   responsive  - Responsive variation, text turns to icon on smaller devices
 * @param  {bool}   icon        - Icon only, hides text on button
 * @param  {func}   onClick     - Click handler for the button
 *
 */
const AUsearchbox = ({ label, btnText, dark, btnType, responsive, id, icon, wrapper, className, onClick, ...attributeOptions}) => {

	let Wrapper = wrapper;

	if ( Wrapper === 'form' ) {
		attributeOptions.role = "search";
	}

	return(
		<Wrapper className={`au-search ` +
								`${dark ? 'au-search--dark' : ''} ` +
								`${icon ? 'au-search--icon' : ''} ` +
								`${responsive ? 'au-search--responsive' : ''} ` +
								`${className}`} {...attributeOptions}>
			{ label && <label htmlFor={id } className="au-search__label">{label}</label> }
			<AUtextInput dark={dark} id={id} />
			<div className="au-search__btn">
				<AUbutton
					onClick={onClick}
					dark={dark}
					type={btnType}
					>
						<span className="au-search__submit-btn-text">{btnText}</span>
				</AUbutton>
			</div>
		</Wrapper>
)
};

AUsearchbox.propTypes = {
	label: PropTypes.string,
	btnText: PropTypes.string,
	btnType: PropTypes.oneOf( ['submit', 'reset', 'button'] ),
	id: PropTypes.string.isRequired,
	dark: PropTypes.bool,
	icon: PropTypes.bool,
	responsive: PropTypes.bool,
	onClick: PropTypes.func,
	wrapper: PropTypes.oneOf([ 'div', 'form' ])
};

AUsearchbox.defaultProps = {
	className: '',
	btnText: 'Search',
	btnType: 'submit',
	wrapper: 'form'
};

export default AUsearchbox;
