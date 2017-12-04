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


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * All theme options
 *
 * @type {Object}
 */
const themes = {
	light: '',
	dark: 'au-accordion--dark',
};


let IDstart = 0;

class Accordion extends React.PureComponent {
	/**
	 * Constructor
	 * Create state and iterate over a unique ID
	 *
	 * @param  {object}  props - The props object
	 */
	constructor( props ) {
		super( props );

		this.toggle = this.toggle.bind( this );

		// Generate a unique ID and our css class
		IDstart ++;

		this.ID = `accordion${ IDstart }`;
		this.closeClass = this.props.open ? '' : 'au-accordion--closed';
	}


	/**
	 * Handle state if supplied
	 */
	componentWillReceiveProps( nextProps ) {
		const open = nextProps.open;

		if( open ) {
			AU.accordion.Open( this.accordionHeader );
		}
		else {
			AU.accordion.Close( this.accordionHeader );
		}
	}


	/**
	 * Toggle an accordion on click
	 *
	 * @param  {event object} event - The event object of the click
	 */
	toggle( event ) {
		event.preventDefault();

		AU.accordion.Toggle( this.accordionHeader, this.props.speed, {
			onOpen: this.props.onOpen,
			afterOpen: this.props.afterOpen,
			onClose: this.props.onClose,
			afterClose: this.props.afterClose,
		});
	}


	render() {
		return (
			<div className={ `au-accordion ${ this.props.theme ? themes[ this.props.theme ] : '' }` }>
				<a href={`#${ this.ID }`}
					className={`au-accordion__title js-au-accordion ${ this.closeClass }`}
					aria-controls={ this.ID }
					aria-expanded={ this.props.open }
					aria-selected={ this.props.open }
					role="tab"
					ref={ accordionHeader => { this.accordionHeader = accordionHeader } }
					onClick={ this.toggle }>
						{ this.props.header }
				</a>

				<div
					className={`au-accordion__body ${ this.closeClass }`}
					id={ this.ID }
					aria-hidden={ this.props.open ? 'false' : 'true' }>
					<div className="au-accordion__body-wrapper">

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
	theme: PropTypes.oneOf([ 'light', 'dark' ]),
	onOpen: PropTypes.func,
	afterOpen: PropTypes.func,
	onClose: PropTypes.func,
	afterClose: PropTypes.func,
};

Accordion.defaultProps = {
	open: false,
	theme: 'light',
};

export default Accordion;
