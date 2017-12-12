import React    from 'react';
import ReactDOM from 'react-dom';

import { TextInput, Label, Hint } from './text-inputs.js';


ReactDOM.render(
	<div className="split-wrapper">
		<div className="split">
			<h2>Default</h2>
			<Label inputID="1" >Hello</Label>
			<TextInput id="1" />
			<Hint>A helpful hint</Hint>
			<hr />

			<h2>Block</h2>
			<Label inputID="2" >Hello</Label>
			<Hint>A helpful hint</Hint>
			<TextInput block id="2" defaultValue="abc" />
			<hr />

			<h2>Block Invalid</h2>
			<Label inputID="3" >Hello</Label>
			<TextInput id="3" block invalid>Hello</TextInput>
			<hr />

			<h2>Block Valid</h2>
			<Label inputID="4" >Hello</Label>
			<TextInput id="4" block valid />
			<hr />

			<h2>Disabled</h2>
			<Label inputID="5" >Hello</Label>
			<TextInput id="5" disabled />
			<hr />

			<h2>Textarea</h2>
			<Label inputID="6" >Hello</Label>
			<TextInput id="6" as="textarea" />
			<hr />

			<h2>Textarea Block</h2>
			<Label inputID="7" >Hello</Label>
			<TextInput id="7" block as="textarea">Hello</TextInput>
			<hr />

			<h2>Text area default value</h2>
			<Label inputID="8" >Hello</Label>
			<TextInput id="8" defaultValue="abc" disabled as="textarea" />
		</div>
		<div className="split split--dark">
			<h2>Default</h2>
			<Label inputID="1" >Hello</Label>
			<TextInput id="1" dark />
			<Hint>A helpful hint</Hint>
			<hr />

			<h2>Block</h2>
			<Label inputID="2" >Hello</Label>
			<Hint>A helpful hint</Hint>
			<TextInput id="2" defaultValue="abc" dark block  />
			<hr />

			<h2>Block Invalid</h2>
			<Label inputID="3" >Hello</Label>
			<TextInput id="3" dark block invalid>Hello</TextInput>
			<hr />

			<h2>Block Valid</h2>
			<Label inputID="4" >Hello</Label>
			<TextInput id="4" dark block valid />
			<hr />

			<h2>Disabled</h2>
			<Label inputID="5" >Hello</Label>
			<TextInput id="5" dark disabled />
			<hr />

			<h2>Textarea</h2>
			<Label inputID="6" >Hello</Label>
			<TextInput id="6" as="textarea" dark />
			<hr />

			<h2>Textarea Block</h2>
			<Label inputID="7" >Hello</Label>
			<TextInput id="7" as="textarea" dark block>Hello</TextInput>
			<hr />

			<h2>Text area default value</h2>
			<Label inputID="8" >Hello</Label>
			<TextInput as="textarea" id="8" defaultValue="abc" disabled dark block />
		</div>
	</div>,

	document.getElementById('root'),
);
