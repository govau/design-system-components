import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import AUaccordion from './accordion.js';


// To manage an accordion with state just wrap it with a state
class AccordionWrapper extends React.Component {
	// for an example on what a state change might look like we have to add a state
	constructor() {
		super();

		this.state = {
			closed: false
		};
	}

	// let’s change the state in the absence of more complex application code
	changeAccordion() {
		this.setState({ closed: !this.state.closed });
	}

	render() {
		return (
			<Fragment>
				<AUaccordion
					header="State controlled accordion open"
					closed={ this.state.closed }
					onOpen={ () => { this.changeAccordion() }}
					onClose={ () => { this.changeAccordion() }}
				>
					Some content of the accordion <a href="#url">here</a>
				</AUaccordion>

				<button type="button" onClick={ () => { this.changeAccordion() }}>
					Toggle accordion via state
				</button>
			</Fragment>
		);
	}
}


// let’s render some accordions
class App extends React.Component {
	constructor( props ) {
		super( props );
	}


	render() {
		return (
			<div>
				<div className="split-wrapper">
					<div className="split">
						<h2>Default accordion</h2>
						<AUaccordion header="Open and close me">
							Some content of the accordion <a href="#url">here</a> :)
						</AUaccordion>


						<hr />
						<h2>Accordion with additional classes</h2>

						<AUaccordion header="Open and close me" className="testing">
							Some content of the accordion <a href="#url">here</a> :)
						</AUaccordion>


						<hr />
						<h2>Accordions with open/close props</h2>

						<AUaccordion header="Closed" closed>
							Some content of the accordion <a href="#url">here</a> :D
						</AUaccordion>

						<AUaccordion header="Open">
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
						<h2>Accordions stateful </h2>

						<AccordionWrapper/>
					</div>
					<div className="split split--dark">
						<h2>Default accordion <code>--dark</code></h2>
						<AUaccordion dark header="Open and close me">
							Some content of the accordion <a href="#url">here</a> :)
						</AUaccordion>


						<hr />
						<h2>Accordion with additional classes</h2>

						<AUaccordion dark header="Open and close me" className="testing">
							Some content of the accordion <a href="#url">here</a> :)
						</AUaccordion>


						<hr />
						<h2>Accordions with open/close props <code>--dark</code></h2>

						<AUaccordion dark closed header="Closed">
							Some content of the accordion <a href="#url">here</a> :D
						</AUaccordion>

						<AUaccordion dark header="Open">
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

						<hr />
						<h2>Accordion Group <code>--dark </code></h2>
						<ul className="au-accordion-group">
							<li>
								<AUaccordion dark open={ false } header="Accordion group 1">
									Here <a href="#url">is</a> some accordion content
								</AUaccordion>
							</li>
							<li>
								<AUaccordion dark open={ false } header="Accordion group 2">
									Here <a href="#url">is</a> some accordion content
								</AUaccordion>
							</li>
						</ul>
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
