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

// const Accordion = () => (
// 	<div className="accordion">
// 		<h1>I&rsquo;m an accordion</h1>
// 	</div>
// );




// export default Accordion;






// import "accodrdion.scss"

// export const Accordion = () => (


// 	<section class="uikit-accordion">
// 		<a href="#accordion-default"
// 			class="uikit-accordion__title js-uikit-accordion"
// 			aria-controls="accordion-default"
// 			aria-expanded="true"
// 			aria-selected="true"
// 			role="tab"
// 			onclick={props.toggle}>
// 				Accordion title
// 		</a>

// 		<div class="uikit-accordion__body" id="accordion-default" aria-hidden="false">
// 			<div class="uikit-accordion__body-wrapper">

// 				Here <a href="#url">is</a> some accordion content

// 			</div>
// 		</div>
// 	</section>
// )




// import Accordion from '../';


// const withOtherStuff = Component => {
// 	return ({toggle, ...rest}) => {
// 		const otherStuffToggle = () => {
// 			console.log('dskjfjdshf');
// 			toggle();
// 		};
//   	return <Component toggle={otherStuffToggle} {...rest} />
// 	}
// }


// const withToggle = Component => {

// 	let activePaneId = 1;


// 	return ({toggle, ...rest}) => {
// 		const otherStuffToggle = () => {
// 			console.log('dskjfjdshf');
// 			toggle();
// 		};
//   	return <Component toggle={otherStuffToggle} {...rest} />
// 	}
// }

// const MyAccordion = withToggle(Accordion);

// return <MyAccordion />





// const HorizAccordion = ({onOpenPane, isOpen}) => {
// 	return (
// 		<div>
// 			<div onClick={onOpenPane}>
// 			</div>
// 		</div>
// 	)
// }
// export  withAccordion(HorizAccordion);

// const VertAccordion = ({onOpenPane, isOpen}) => {
// 	return (
// 		<div>
// 			<div onClick={onOpenPane}>
// 			</div>
// 		</div>
// 	)
// }


// const withAccordion = Component => {
// 	return class extends React.Component {
// 		constructor(props) {
// 			super(props)
// 			this.state = {
// 				open: false,
// 			}
// 		}
// 		openPane() {
// 			this.setState({open, !this.state.open});
// 		}
// 		render() {
// 			return <Component onOpenPane={this.openPane.bind(this)} isOpen={this.state.open} />
// 		}
// 	}
// }

let IDstart = 0;

export class Accordion extends React.PureComponent {
	componentWillReceiveProps( nextProps ) {
		const open = nextProps.open;

		if( open ) {
			UIKIT.accordion.Open( this.accordionHeader );
		}
		else {
			UIKIT.accordion.Close( this.accordionHeader );
		}
	}

	componentWillMount() {
		IDstart ++;
		this.ID = IDstart;
	}

	toggle( event ) {
		event.preventDefault();

		if( typeof this.props.onOpen === 'function' ) {
			this.props.onOpen();
		}

		UIKIT.accordion.Toggle( this.accordionHeader );
	}

	render() {
		const ID = `accordion${ this.ID }`;
		const closeClass = this.props.open === 'false' ? 'uikit-accordion--closed' : '';

		return (
			<section className="uikit-accordion">
				<a href={`"#${ ID }"`}
					className={`uikit-accordion__title js-uikit-accordion ${ closeClass }`}
					aria-controls={ ID }
					aria-expanded={ this.props.open === 'false' ? 'false' : 'true' }
					aria-selected={ this.props.open === 'false' ? 'false' : 'true' }
					role="tab"
					ref={ accordionHeader => { this.accordionHeader = accordionHeader } }
					onClick={ event => this.toggle( event ) }>
						{ this.props.header }
				</a>

				<div
					className={`uikit-accordion__body ${ closeClass }`}
					id={ ID }
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
};

// Accordion.propTypes = {
// 	children: PropTypes.node.isRequired,
// 	description: PropTypes.string.isRequired,
// };



// <Accordian open={this.state.open} onClick={() => this.setState({open: !this.state.open})} header="sdhfgkjdshb">
// 	sdf;dsjhfkjdsahbf lksdfjhg
// </Accordian>


// <Accordian header="sdhfgkjdshb">
// 	sdf;dsjhfkjdsahbf lksdfjhg
// </Accordian>
