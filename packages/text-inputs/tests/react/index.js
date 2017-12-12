import React    from 'react';
import ReactDOM from 'react-dom';

import { TextInput, Label, Hint } from './text-inputs.js';


ReactDOM.render(
	<div className="split-wrapper">
		<div className="split">
			<h2>Default</h2>
			<Label htmlFor="1">Hello</Label>
			<TextInput id="1" />
			<Hint>A helpful hint</Hint>
			<hr />

			<h2>Block</h2>
			<Label htmlFor="2" >Hello</Label>
			<Hint>A helpful hint</Hint>
			<TextInput id="2" defaultValue="abc" block />
			<hr />

			<h2>Block Invalid</h2>
			<Label htmlFor="3" >Hello</Label>
			<TextInput id="3" defaultValue="abc" block invalid />
			<hr />

			<h2>Block Valid</h2>
			<Label htmlFor="4" >Hello</Label>
			<TextInput id="4" block valid />
			<hr />

			<h2>Disabled</h2>
			<Label htmlFor="5" >Hello</Label>
			<TextInput id="5" disabled />
			<hr />

			<h2>Textarea</h2>
			<Label htmlFor="6" >Hello</Label>
			<TextInput id="6" as="textarea" />
			<hr />

			<h2>Textarea Block</h2>
			<Label htmlFor="7" >Hello</Label>
			<TextInput id="7" defaultValue="abc" as="textarea" block />
			<hr />

			<h2>Textarea default value disabled</h2>
			<Label htmlFor="8" >Hello</Label>
			<TextInput id="8" defaultValue="abc" as="textarea" disabled />
		</div>
		<div className="split split--dark">
			<h2>Default</h2>
			<Label htmlFor="1d" >Hello</Label>
			<TextInput id="1d" dark />
			<Hint>A helpful hint</Hint>
			<hr />

			<h2>Block</h2>
			<Label htmlFor="2d" >Hello</Label>
			<Hint>A helpful hint</Hint>
			<TextInput id="2d" defaultValue="abc" dark block />
			<hr />

			<h2>Block Invalid</h2>
			<Label htmlFor="3d" >Hello</Label>
			<TextInput id="3d" defaultValue="abc" dark block invalid />
			<hr />

			<h2>Block Valid</h2>
			<Label htmlFor="4d" >Hello</Label>
			<TextInput id="4d" dark block valid />
			<hr />

			<h2>Disabled</h2>
			<Label htmlFor="5d" >Hello</Label>
			<TextInput id="5d" dark disabled />
			<hr />

			<h2>Textarea</h2>
			<Label htmlFor="6d" >Hello</Label>
			<TextInput id="6d" as="textarea" dark />
			<hr />

			<h2>Textarea Block</h2>
			<Label htmlFor="7d" >Hello</Label>
			<TextInput id="7d" as="textarea" defaultValue="abc" dark block />
			<hr />

			<h2>Textarea default value disabled</h2>
			<Label htmlFor="8d" >Hello</Label>
			<TextInput as="textarea" id="8d" defaultValue="abc" disabled dark />
		</div>
	</div>,

	document.getElementById('root'),
);
