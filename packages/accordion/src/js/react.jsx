/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * Accordion function
 *
 * A component to allow users to show or hide page elements.
 *
 **************************************************************************************************************************************************************/

import React from "react"

const Accordion = () => (
	<div className="accordion">
		<h1>I'm an accordion</h1>
	</div>
)

export default Accordion

// import "accodrdion.scss"
//
// export const Accordion = () => (
//
//
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
//
// 		<div class="uikit-accordion__body" id="accordion-default" aria-hidden="false">
// 			<div class="uikit-accordion__body-wrapper">
//
// 				Here <a href="#url">is</a> some accordion content
//
// 			</div>
// 		</div>
// 	</section>
// )
//
//
//
//
// import Accordion from '../';
//
//
// const withOtherStuff = Component => {
// 	return ({toggle, ...rest}) => {
// 		const otherStuffToggle = () => {
// 			console.log('dskjfjdshf');
// 			toggle();
// 		};
//   	return <Component toggle={otherStuffToggle} {...rest} />
// 	}
// }
//
//
// const withToggle = Component => {
//
// 	let activePaneId = 1;
//
//
// 	return ({toggle, ...rest}) => {
// 		const otherStuffToggle = () => {
// 			console.log('dskjfjdshf');
// 			toggle();
// 		};
//   	return <Component toggle={otherStuffToggle} {...rest} />
// 	}
// }
//
// const MyAccordion = withToggle(Accordion);
//
// return <MyAccordion />
//
//
//
//
//
// const HorizAccordion = ({onOpenPane, isOpen}) => {
// 	return (
// 		<div>
// 			<div onClick={onOpenPane}>
// 			</div>
// 		</div>
// 	)
// }
// export  withAccordion(HorizAccordion);
//
// const VertAccordion = ({onOpenPane, isOpen}) => {
// 	return (
// 		<div>
// 			<div onClick={onOpenPane}>
// 			</div>
// 		</div>
// 	)
// }
//
//
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
