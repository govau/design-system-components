import React    from 'react';
import ReactDOM from 'react-dom';

import { AUtextInput, AUlabel, AUhint } from './text-inputs.js';


ReactDOM.render(
	<div className="split-wrapper">
		<div className="split">
			<h2>Default</h2>
			<AUlabel htmlFor="1">Hello</AUlabel>
			<AUtextInput id="1" />
			<AUhint>A helpful hint</AUhint>
			<hr />

			<h2>Block</h2>
			<AUlabel htmlFor="2" >Hello</AUlabel>
			<AUhint>A helpful hint</AUhint>
			<AUtextInput id="2" defaultValue="abc" block />
			<hr />

			<h2>Block Invalid</h2>
			<AUlabel htmlFor="3" >Hello</AUlabel>
			<AUtextInput id="3" defaultValue="abc" block invalid />
			<hr />

			<h2>Block Valid</h2>
			<AUlabel htmlFor="4" >Hello</AUlabel>
			<AUtextInput id="4" block valid />
			<hr />

			<h2>Disabled</h2>
			<AUlabel htmlFor="5" >Hello</AUlabel>
			<AUtextInput id="5" disabled />
			<hr />

			<h2>Textarea</h2>
			<AUlabel htmlFor="6" >Hello</AUlabel>
			<AUtextInput id="6" as="textarea" />
			<hr />

			<h2>Textarea Block</h2>
			<AUlabel htmlFor="7" >Hello</AUlabel>
			<AUtextInput id="7" defaultValue="abc" as="textarea" block />
			<hr />

			<h2>Textarea default value disabled</h2>
			<AUlabel htmlFor="8" >Hello</AUlabel>
			<AUtextInput id="8" defaultValue="abc" as="textarea" disabled />
		</div>
		<div className="split split--dark">
			<h2>Default</h2>
			<AUlabel htmlFor="1d" >Hello</AUlabel>
			<AUtextInput id="1d" dark />
			<AUhint>A helpful hint</AUhint>
			<hr />

			<h2>Block</h2>
			<AUlabel htmlFor="2d" >Hello</AUlabel>
			<AUhint>A helpful hint</AUhint>
			<AUtextInput id="2d" defaultValue="abc" dark block />
			<hr />

			<h2>Block Invalid</h2>
			<AUlabel htmlFor="3d" >Hello</AUlabel>
			<AUtextInput id="3d" defaultValue="abc" dark block invalid />
			<hr />

			<h2>Block Valid</h2>
			<AUlabel htmlFor="4d" >Hello</AUlabel>
			<AUtextInput id="4d" dark block valid />
			<hr />

			<h2>Disabled</h2>
			<AUlabel htmlFor="5d" >Hello</AUlabel>
			<AUtextInput id="5d" dark disabled />
			<hr />

			<h2>Textarea</h2>
			<AUlabel htmlFor="6d" >Hello</AUlabel>
			<AUtextInput id="6d" as="textarea" dark />
			<hr />

			<h2>Textarea Block</h2>
			<AUlabel htmlFor="7d" >Hello</AUlabel>
			<AUtextInput id="7d" as="textarea" defaultValue="abc" dark block />
			<hr />

			<h2>Textarea default value disabled</h2>
			<AUlabel htmlFor="8d" >Hello</AUlabel>
			<AUtextInput as="textarea" id="8d" defaultValue="abc" disabled dark />
		</div>
	</div>,

	document.getElementById('root'),
);
