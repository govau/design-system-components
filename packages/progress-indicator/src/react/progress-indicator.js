/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * progress-indicator function
 *
 * Indicator of progress through a multitude of pages mostly used for forms.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * DEFAULT
 * The progress-indicator component
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {array}   items            - All items for this progress indicator
 * @param  {string}  className        - An additional class, optional
 * @param  {string}  linkComponent    - The component used for the link
 * @param  {object}  attributeOptions - Any other attribute options
 */
const AUprogressIndicator = ({ dark, linkComponent, items, className = '', ...attributeOptions }) => (
	<ul className={ `au-progress-indicator${ dark ? ' au-progress-indicator--dark' : '' } ${ className }` } { ...attributeOptions }>
		{
			items.map(
				( item, i ) => <AUprogressIndicatorItem linkComponent={ linkComponent } key={ i } { ...item } />
			)
		}
	</ul>
);

AUprogressIndicator.propTypes = {
	dark: PropTypes.bool,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.string.isRequired,
			status: PropTypes.PropTypes.oneOf([ 'doing', 'todo', 'done' ]).isRequired,
			statusText: PropTypes.string,
			li: PropTypes.object,
		})
	).isRequired,
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
};

AUprogressIndicator.defaultProps = {
	linkComponent: 'a',
};

export default AUprogressIndicator;
