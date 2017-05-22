/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * Accordion function
 *
 * A component to allow users to show or hide page elements.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


let IDstart = 0;

class Accordion extends React.PureComponent {
	/**
	 * Constructor
	 *
	 * @param  {object}  props  - The props object
	 */
	constructor( props ) {
		super( props );

		this.toggle = this.toggle.bind( this );

		// Generate a unique ID and our css class
		IDstart ++;

		this.ID = `accordion${ IDstart }`;
		this.closeClass = this.props.open ? '' : 'uikit-accordion--closed';
	}


	/**
	 * Handle state if supplied
	 */
	componentWillReceiveProps( nextProps ) {
		const open = nextProps.open;

		if( open ) {
			UIKIT.accordion.Open( this.accordionHeader );
		}
		else {
			UIKIT.accordion.Close( this.accordionHeader );
		}
	}


	/**
	 * Toggle an accordion on click
	 *
	 * @param  {event object} event - The event object of the click
	 */
	toggle( event ) {
		event.preventDefault();

		UIKIT.accordion.Toggle( this.accordionHeader, this.props.speed, {
			onOpen: this.props.onOpen,
			afterOpen: this.props.afterOpen,
			onClose: this.props.onClose,
			afterClose: this.props.afterClose,
		});
	}


	render() {
		return (
			<div className="uikit-accordion">
				<a href={`#${ this.ID }`}
					className={`uikit-accordion__title js-uikit-accordion ${ this.closeClass }`}
					aria-controls={ this.ID }
					aria-expanded={ this.props.open ? 'true' : 'false' }
					aria-selected={ this.props.open ? 'true' : 'false' }
					role="tab"
					ref={ accordionHeader => { this.accordionHeader = accordionHeader } }
					onClick={ this.toggle }>
						{ this.props.header }
				</a>

				<div
					className={`uikit-accordion__body ${ this.closeClass }`}
					id={ this.ID }
					aria-hidden={ this.props.open ? 'false' : 'true' }>
					<div className="uikit-accordion__body-wrapper">

						{ this.props.children }

					</div>
				</div>
			</div>
		);
	}
};


/**
 * propTypes definition
 *
 * @type {Object}
 */
Accordion.propTypes = {
	children: PropTypes.node.isRequired,
	header: PropTypes.string.isRequired,
	open: PropTypes.bool,
	speed: PropTypes.number,
};

Accordion.defaultProps = {
	open: true,
};


export default Accordion;
