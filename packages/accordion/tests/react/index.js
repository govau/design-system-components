import React from 'react';
import ReactDOM from 'react-dom';

import { Accordion } from './react.js';


class App extends React.Component {
	constructor() {
		super();

		this.state = {
			accordion1: 'true',
			accordion2: 'false',
		};
	}

	changeAccordion( item ) {
		const accordionState = this.state[ item ] === 'false' ? 'true' : 'false';

		this.setState({ [item]: accordionState });
	}

	render() {
		return (
			<div>
				<h2>Default accordion</h2>

				<Accordion header="Open and close me">
					Some content of the accordion <a href="#sdfsdf">here</a> :)
				</Accordion>

				<hr />
				<h2>Accordions with open/close props</h2>

				<Accordion open="false" header="Closed">
					Some content of the accordion <a href="#sdfsdf">here</a> :D
				</Accordion>

				<Accordion open="true" header="Open">
					Some content of the accordion <a href="#sdfsdf">here</a> 8)
				</Accordion>

				<hr />
				<h2>Accordions with custom functions</h2>

				<Accordion open="false" header="With custom function" onOpen={ () => { console.log('yay!'); } }>
					Some content of the accordion <a href="#sdfsdf">here</a>
				</Accordion>

				<hr />
				<h2>Accordions with custom functions and state</h2>

				<Accordion open={ this.state.accordion1 } header="State controlled accordion">
					Some content of the accordion <a href="#sdfsdf">here</a>
				</Accordion>

				<button type="button" onClick={ () => { this.changeAccordion('accordion1') } }>Toggle accordion via state</button>
			</div>
		)
	}
};



ReactDOM.render(
	<App />,

	document.getElementById('root'),
);
