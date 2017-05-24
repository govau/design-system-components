/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * buttons function
 *
 * Buttons signal action. Use them to move the user through the service.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


/**
 * The primary button
 *
 * @param  {string}  text     - The text of the button
 * @param  {boolean} disabled - The disabled option
 * @param  {boolean} block    - The block option
 */
export const ButtonPrimary = ({ text, type, disabled, block }) => (
	<button type={ type } className={ `uikit-btn${ block ? ' uikit-btn--block' : '' }` } disabled={ disabled }>{ text }</button>
);

ButtonPrimary.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string,
	disabled: PropTypes.bool,
	block: PropTypes.bool,
};

ButtonPrimary.defaultProps = {
	type: 'button',
};


/**
 * The secondary button
 *
 * @param  {string}  text     - The text of the button
 * @param  {boolean} disabled - The disabled option
 * @param  {boolean} block    - The block option
 */
export const ButtonSecondary = ({ text, type, disabled, block }) => (
	<button type={ type } className={ `uikit-btn uikit-btn--secondary${ block ? ' uikit-btn--block' : '' }` } disabled={ disabled }>{ text }</button>
);

ButtonSecondary.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string,
	disabled: PropTypes.bool,
	block: PropTypes.bool,
};

ButtonSecondary.defaultProps = {
	type: 'button',
};


/**
 * The tertiary button
 *
 * @param  {string}  text     - The text of the button
 * @param  {boolean} disabled - The disabled option
 * @param  {boolean} block    - The block option
 */
export const ButtonTertiary = ({ text, type, disabled, block }) => (
	<button type={ type } className={ `uikit-btn uikit-btn--tertiary${ block ? ' uikit-btn--block' : '' }` } disabled={ disabled }>{ text }</button>
);

ButtonTertiary.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string,
	disabled: PropTypes.bool,
	block: PropTypes.bool,
};

ButtonTertiary.defaultProps = {
	type: 'button',
};
