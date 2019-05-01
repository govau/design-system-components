/***************************************************************************************************************************************************************
 *
 * progress-indicator item function
 *
 * Indicator of progress through a multitude of pages mostly used for forms.
 *
 **************************************************************************************************************************************************************/


import React from 'react';
import PropTypes from 'prop-types';


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
	link: PropTypes.string,
	text: PropTypes.string.isRequired,
	status: PropTypes.PropTypes.oneOf([ 'doing', 'todo', 'done' ]).isRequired,
	statusText: PropTypes.string,
	li: PropTypes.object,
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
};


AUprogressIndicatorItem.defaultProps = {
	linkComponent: 'a',
};
