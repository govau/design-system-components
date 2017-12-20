import React from 'react';
import ReactDOM from 'react-dom';

import AUaccordion from './accordion.js';


// To manage an accordion with state just wrap it with a state
class AccodionWrapper extends React.Component {
	// for an example on what a state change might look like we have to add a state
	constructor() {
		super();

		this.state = {
			accordionOpen: true,
		};
	}

	// let’s change the state in the absence of more complex application code
	changeAccordion( item ) {
		this.setState({ [item]: !this.state[ item ] });
	}

	render() {
		return (
			<div>
				<AUaccordion open={ this.state.accordionOpen } header="State controlled accordion open">
					Some content of the accordion <a href="#url">here</a>
				</AUaccordion>

				<button type="button" onClick={ () => { this.changeAccordion('accordionOpen') } }>Toggle accordion via state</button>
			</div>
		);
	}
}


// let’s render some accordions
class App extends React.Component {
	constructor( props ) {
		super( props );

		this.openAll = this.openAll.bind( this );
		this.closeAll = this.closeAll.bind( this );
		this.toggleAll = this.toggleAll.bind( this );
	}

	// you should manage this via state not via these vanilla functions!
	openAll() {
		console.log( AUaccordion );
		AUaccordion.accordionOpen( document.querySelectorAll('.js-au-accordion') );
	}

	closeAll() {
		// AUaccordion.accordionClose( document.querySelectorAll('.js-au-accordion') )
	}

	toggleAll() {
		// AUaccordion.accordionToggle( document.querySelectorAll('.js-au-accordion') )
	}


	render() {
		return (
			<div>
				<button onClick={ this.openAll }>Open all</button>
				<button onClick={ this.closeAll }>Close all</button>
				<button onClick={ this.toggleAll }>Toggle all</button>

				<hr />

				<div className="split-wrapper">
					<div className="split">
						<h2>Default accordion</h2>
						<AUaccordion header="Open and close me">
							Some content of the accordion <a href="#url">here</a> :)
						</AUaccordion>


						<hr />
						<h2>Accordions with open/close props</h2>

						<AUaccordion header="Closed">
							Some content of the accordion <a href="#url">here</a> :D
						</AUaccordion>

						<AUaccordion open header="Open">
							Some content of the accordion <a href="#url">here</a> 8)
						</AUaccordion>


						<hr />
						<h2>Accordions slow</h2>

						<AUaccordion header="Slow accordion" speed={ 1000 }>
							Some content of the accordion <a href="#url">here</a> :D
						</AUaccordion>


						<hr />
						<h2>Accordions with custom functions</h2>

						<AUaccordion header="With custom function"
							onOpen={ () => { console.log('This function will run when the accordion opens'); } }
							afterOpen={ () => { console.log('This function will run after the accordion has opened'); } }
							onClose={ () => { console.log('This function will run when the accordion closes'); } }
							afterClose={ () => { console.log('This function will run after the accordion has closed'); } }
						>
							Some content of the accordion <a href="#url">here</a>
						</AUaccordion>


						<hr />
						<h2>Accordions statefull </h2>

						<AccodionWrapper/>
					</div>
					<div className="split split--dark">
						<h2>Default accordion <code>--dark</code></h2>
						<AUaccordion dark header="Open and close me">
							Some content of the accordion <a href="#url">here</a> :)
						</AUaccordion>


						<hr />
						<h2>Accordions with open/close props <code>--dark</code></h2>

						<AUaccordion dark header="Closed">
							Some content of the accordion <a href="#url">here</a> :D
						</AUaccordion>

						<AUaccordion dark open header="Open">
							Some content of the accordion <a href="#url">here</a> 8)
						</AUaccordion>


						<hr />
						<h2>Accordions slow <code>--dark</code></h2>

						<AUaccordion dark header="Slow accordion" speed={ 1000 }>
							Some content of the accordion <a href="#url">here</a> :D
						</AUaccordion>


						<hr />
						<h2>Accordions with custom functions <code>--dark</code></h2>

						<AUaccordion dark header="With custom function"
							onOpen={ () => { console.log('This function will run when the accordion opens'); } }
							afterOpen={ () => { console.log('This function will run after the accordion has opened'); } }
							onClose={ () => { console.log('This function will run when the accordion closes'); } }
							afterClose={ () => { console.log('This function will run after the accordion has closed'); } }
						>
							Some content of the accordion <a href="#url">here</a>
						</AUaccordion>
					</div>
				</div>
			</div>
		);
	}
};


// render to page
ReactDOM.render(
	<App />,

	document.getElementById('root'),
);
