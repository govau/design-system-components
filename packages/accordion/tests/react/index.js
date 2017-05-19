import React from 'react';
import ReactDOM from 'react-dom';

import { Accordion } from './react.js';

ReactDOM.render(
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
		<h2>Accordions with custom open function</h2>

		<Accordion open="false" header="With custom function" onOpen={ () => { console.log('yay!'); } }>
			Some content of the accordion <a href="#sdfsdf">here</a>
		</Accordion>
	</div>,

	document.getElementById('root'),
);
