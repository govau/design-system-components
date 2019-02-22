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
 * All status options, can be overwritten
 *
 * @type {Object}
 */
const StatusText = {
	doing: 'Doing',
	todo: 'To do',
	done: 'Done',
};


/**
 * An item inside the AUprogressIndicator component
 *
 * @param  {string}   link             - The link URL, If no link is passed we render a button instead of a link tag, optional
 * @param  {string}  linkComponent     - The component used for the link
 * @param  {string}   text             - The text of this item
 * @param  {string}   status           - The status of this item
 * @param  {string}   statusText       - The status text of this item, optional
 * @param  {string}   className        - An additional class, optional
 * @param  {object}   li               - An additional object to be spread into the wrapping element, optional
 * @param  {object}   attributeOptions - Any other attribute options
 */
export const AUprogressIndicatorItem = ({ link, linkComponent, text, status, statusText, className = '', li = {}, ...attributeOptions }) => {
	const LinkComponent = linkComponent;

	if( link ){
		// If we are using a normal link
		if( LinkComponent === 'a' ) {
			attributeOptions.href = link;
		}
		// If we are using a link component
		else if( typeof LinkComponent === 'function' ) {
			attributeOptions.to = link;
		}
	}

	return(
		<li { ...li }>
		{
			link
				?
					<LinkComponent className={`au-progress-indicator__link au-progress-indicator__link--${ status } ${ className }`} { ...attributeOptions }>
						<span className="au-progress-indicator__status">{ statusText ? statusText : StatusText[ status ] }</span>
						{ text }
					</LinkComponent>
				:
					<button className={`au-progress-indicator__link au-progress-indicator__link--${ status } ${ className }`} { ...attributeOptions }>
						<span className="au-progress-indicator__status">{ statusText ? statusText : StatusText[ status ] }</span>
						{ text }
					</button>
		}
	</li>
	)
};

AUprogressIndicatorItem.propTypes = {
	/**
	 * The link URL, If no link is passed we render a button instead of a link tag.
	 */
	link: PropTypes.string,
	/**
	 * The text of this item.
	 */
	text: PropTypes.string.isRequired,
	/**
	 * The status of this item.
	 */
	status: PropTypes.PropTypes.oneOf([ 'doing', 'todo', 'done' ]).isRequired,
	/**
	 * The status text of this item.
	 */
	statusText: PropTypes.string,
	/**
	 * An additional object to be spread into the wrapping element.
	 */
	li: PropTypes.object,
	/**
	 * The component used for the link, optional.
	 */
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
};


AUprogressIndicatorItem.defaultProps = {
	linkComponent: 'a',
	status: 'doing',
	text: 'Case Studies'
};


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
