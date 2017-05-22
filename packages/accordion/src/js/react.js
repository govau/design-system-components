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
	 * Handle state if supplied
	 */
	componentWillReceiveProps( nextProps ) {
		const open = nextProps.open;

		console.log(this);

		if( open ) {
			UIKIT.accordion.Open( this.accordionHeader );
		}
		else {
			UIKIT.accordion.Close( this.accordionHeader );
		}
	}


	/**
	 * Generate unique ID and our css class
	 */
	componentWillMount() {
		IDstart ++;

		this.ID = `accordion${ IDstart }`;
		this.closeClass = this.props.open ? '' : 'uikit-accordion--closed';
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
			<section className="uikit-accordion">
				<a href={`"#${ this.ID }"`}
					className={`uikit-accordion__title js-uikit-accordion ${ this.closeClass }`}
					aria-controls={ this.ID }
					aria-expanded={ this.props.open ? 'true' : 'false' }
					aria-selected={ this.props.open ? 'true' : 'false' }
					role="tab"
					ref={ accordionHeader => { this.accordionHeader = accordionHeader } }
					onClick={ event => this.toggle( event ) }>
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
			</section>
		);
	}
};


/**
 * PropTypes type checking
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
