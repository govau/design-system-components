import React from 'react';
import ReactDOM from 'react-dom';

import Accordion from './react.js';


// To manage an accordion with state just wrap it with a state
class AccodionWrapper extends React.Component {
	// for an example on what a state change might look like we have to add a state
	constructor() {
		super();

		this.state = {
			accordionOpen: true,
		};
	}

	// let’s change the state in the absence of bigger application code
	changeAccordion( item ) {
		this.setState({ [item]: !this.state[ item ] });
	}

	render() {
		return (
			<div>
				<Accordion open={ this.state.accordionOpen } header="State controlled accordion open">
					Some content of the accordion <a href="#url">here</a>
				</Accordion>

				<button type="button" onClick={ () => { this.changeAccordion('accordionOpen') } }>Toggle accordion via state</button>
			</div>
		);
	}
}


// let’s render some accordions
class App extends React.Component {
	render() {
		return (
			<div>
				<h2>Default accordion</h2>

				<Accordion header="Open and close me">
					Some content of the accordion <a href="#url">here</a> :)
				</Accordion>


				<hr />
				<h2>Accordions with open/close props</h2>

				<Accordion open={ false } header="Closed">
					Some content of the accordion <a href="#url">here</a> :D
				</Accordion>

				<Accordion open={ true } header="Open">
					Some content of the accordion <a href="#url">here</a> 8)
				</Accordion>


				<hr />
				<h2>Accordions slow</h2>

				<Accordion header="Slow accordion" speed={ 1000 }>
					Some content of the accordion <a href="#url">here</a> :D
				</Accordion>


				<hr />
				<h2>Accordions with custom functions</h2>

				<Accordion open={ false } header="With custom function"
					onOpen={ () => { console.log('This function will run when the accordion opens'); } }
					afterOpen={ () => { console.log('This function will run after the accordion has opened'); } }
					onClose={ () => { console.log('This function will run when the accordion closes'); } }
					afterClose={ () => { console.log('This function will run after the accordion has closed'); } }
				>
					Some content of the accordion <a href="#url">here</a>
				</Accordion>


				<hr />
				<h2>Accordions statefull</h2>

				<AccodionWrapper/>
			</div>
		);
	}
};


// render to page
ReactDOM.render(
	<App />,

	document.getElementById('root'),
);
