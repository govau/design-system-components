import React from 'react';
import ReactDOM from 'react-dom';

import PageAlert from './react.js';

ReactDOM.render(
	<div>
		<h2>No variant</h2>

		<PageAlert>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
		</PageAlert>


		<hr />
		<h2><code>--info</code> variant</h2>

		<PageAlert variant="info">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
		</PageAlert>


		<hr />
		<h2><code>--success</code> variant</h2>

		<PageAlert variant="success">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
		</PageAlert>


		<hr />
		<h2><code>--warning</code> variant</h2>

		<PageAlert variant="warning">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
		</PageAlert>


		<hr />
		<h2><code>--error</code> variant</h2>

		<PageAlert variant="error">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
		</PageAlert>

	</div>,

	document.getElementById('root'),
);
