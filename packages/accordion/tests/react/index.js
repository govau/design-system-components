import React from 'react';
import ReactDOM from 'react-dom';

import Accordion from './react.js';


class App extends React.Component {
	// for an example on what a state change might look like we have to add a state
	constructor() {
		super();

		this.state = {
			accordion1: true,
			accordion2: false,
		};
	}

	// let’s change the state in the absence of bigger application code
	changeAccordion( item ) {
		this.setState({ [item]: !this.state[ item ] });
	}


	// let’s render some accordions
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

				<Accordion open={ this.state.accordion1 } header="State controlled accordion 1 open">
					Some content of the accordion <a href="#url">here</a>
				</Accordion>

				<Accordion open={ this.state.accordion2 } header="State controlled accordion 2 closed">
					Some content of the accordion <a href="#url">here</a>
				</Accordion>

				<button type="button" onClick={ () => { this.changeAccordion('accordion1') } }>Toggle accordion 1 via state</button>
				<button type="button" onClick={ () => { this.changeAccordion('accordion2') } }>Toggle accordion 2 via state</button>
			</div>
		)
	}
};


// render to page
ReactDOM.render(
	<App />,

	document.getElementById('root'),
);
