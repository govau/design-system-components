import React    from 'react';
import ReactDOM from 'react-dom';

import AUtextInput from './text-inputs.js';


ReactDOM.render(
	<div className="split-wrapper">
		<div className="split">
			<h2>Default</h2>
			<label htmlFor="1">Hello</label>
			<AUtextInput id="1" />
			<hr />

			<h2>Block</h2>
			<label htmlFor="2" >Hello</label>
			<AUtextInput id="2" defaultValue="abc" block />
			<hr />

			<h2>Block Invalid</h2>
			<label htmlFor="3" >Hello</label>
			<AUtextInput id="3" defaultValue="abc" block invalid />
			<hr />

			<h2>Block Valid</h2>
			<label htmlFor="4" >Hello</label>
			<AUtextInput id="4" block valid />
			<hr />

			<h2>Disabled</h2>
			<label htmlFor="5" >Hello</label>
			<AUtextInput id="5" disabled />
			<hr />

			<h2>Textarea</h2>
			<label htmlFor="6" >Hello</label>
			<AUtextInput id="6" as="textarea" />
			<hr />

			<h2>Textarea Block</h2>
			<label htmlFor="7" >Hello</label>
			<AUtextInput id="7" defaultValue="abc" as="textarea" block />
			<hr />

			<h2>Textarea default value disabled</h2>
			<label htmlFor="8" >Hello</label>
			<AUtextInput id="8" defaultValue="abc" as="textarea" disabled />
		</div>
		<div className="split split--dark">
			<h2>Default</h2>
			<label htmlFor="1d" >Hello</label>
			<AUtextInput id="1d" dark />
			<hr />

			<h2>Block</h2>
			<label htmlFor="2d" >Hello</label>
			<AUtextInput id="2d" defaultValue="abc" dark block />
			<hr />

			<h2>Block Invalid</h2>
			<label htmlFor="3d" >Hello</label>
			<AUtextInput id="3d" defaultValue="abc" dark block invalid />
			<hr />

			<h2>Block Valid</h2>
			<label htmlFor="4d" >Hello</label>
			<AUtextInput id="4d" dark block valid />
			<hr />

			<h2>Disabled</h2>
			<label htmlFor="5d" >Hello</label>
			<AUtextInput id="5d" dark disabled />
			<hr />

			<h2>Textarea</h2>
			<label htmlFor="6d" >Hello</label>
			<AUtextInput id="6d" as="textarea" dark />
			<hr />

			<h2>Textarea Block</h2>
			<label htmlFor="7d" >Hello</label>
			<AUtextInput id="7d" as="textarea" defaultValue="abc" dark block />
			<hr />

			<h2>Textarea default value disabled</h2>
			<label htmlFor="8d" >Hello</label>
			<AUtextInput as="textarea" id="8d" defaultValue="abc" disabled dark />
		</div>
	</div>,

	document.getElementById('root'),
);
