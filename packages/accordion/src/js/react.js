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

export class Accordion extends React.PureComponent {
	componentWillReceiveProps( nextProps ) {
		const open = nextProps.open;

		if( open === 'true' ) {
			UIKIT.accordion.Open( this.accordionHeader );
		}
		else {
			UIKIT.accordion.Close( this.accordionHeader );
		}
	}

	componentWillMount() {
		IDstart ++;
		this.ID = `accordion${ IDstart }`;
		this.closeClass = this.props.open === 'false' ? 'uikit-accordion--closed' : '';
	}

	toggle( event ) {
		event.preventDefault();

		if( typeof this.props.onOpen === 'function' ) {
			this.props.onOpen();
		}

		UIKIT.accordion.Toggle( this.accordionHeader );
	}

	render() {
		return (
			<section className="uikit-accordion">
				<a href={`"#${ this.ID }"`}
					className={`uikit-accordion__title js-uikit-accordion ${ this.closeClass }`}
					aria-controls={ this.ID }
					aria-expanded={ this.props.open === 'false' ? 'false' : 'true' }
					aria-selected={ this.props.open === 'false' ? 'false' : 'true' }
					role="tab"
					ref={ accordionHeader => { this.accordionHeader = accordionHeader } }
					onClick={ event => this.toggle( event ) }>
						{ this.props.header }
				</a>

				<div
					className={`uikit-accordion__body ${ this.closeClass }`}
					id={ this.ID }
					aria-hidden={ this.props.open === 'false' ? 'true' : 'false' }>
					<div className="uikit-accordion__body-wrapper">

						{ this.props.children }

					</div>
				</div>
			</section>
		);
	}
};

Accordion.propTypes = {
	children: PropTypes.node.isRequired,
	header: PropTypes.string.isRequired,
};

Accordion.defaultProps = {
	open: 'true',
};
