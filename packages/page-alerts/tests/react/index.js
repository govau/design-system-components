import React from 'react';
import ReactDOM from 'react-dom';

import AUpageAlert from './page-alerts.js';


ReactDOM.render(
	<div className="split-wrapper">
		<div className="split">
			<h2><code>--info</code> variant</h2>

			<AUpageAlert as='info'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
			</AUpageAlert>


			<hr />
			<h2><code>--success</code> variant</h2>

			<AUpageAlert as='success'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
			</AUpageAlert>


			<hr />
			<h2><code>--warning</code> variant</h2>

			<AUpageAlert as='warning'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
			</AUpageAlert>


			<hr />
			<h2><code>--error</code> variant</h2>

			<AUpageAlert as='error'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
			</AUpageAlert>
		</div>
		<div className="split split--dark">
			<h2><code>--info</code> variant</h2>

			<AUpageAlert as='info'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
			</AUpageAlert>


			<hr />
			<h2><code>--success</code> variant</h2>

			<AUpageAlert as='success'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
			</AUpageAlert>


			<hr />
			<h2><code>--warning</code> variant</h2>

			<AUpageAlert as='warning'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
			</AUpageAlert>


			<hr />
			<h2><code>--error</code> variant</h2>

			<AUpageAlert as='error'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
			</AUpageAlert>
		</div>
	</div>,

	document.getElementById('root'),
);
