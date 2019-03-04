import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import AUpageAlert from './page-alerts.js';


ReactDOM.render(
	<div>
		<div className="split-wrapper">
			<div className="split">
				<h2><code>--info</code> variant</h2>

				<AUpageAlert as='info'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
				</AUpageAlert>


				<hr />
				<h2><code>--info</code> variant with additional classes</h2>

				<AUpageAlert as='info' className='testing'>
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

				<AUpageAlert dark as='info'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
				</AUpageAlert>


				<hr />
				<h2><code>--info</code> variant with additional classes</h2>

				<AUpageAlert as='info' className='testing'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
				</AUpageAlert>


				<hr />
				<h2><code>--success</code> variant</h2>

				<AUpageAlert dark as='success'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
				</AUpageAlert>


				<hr />
				<h2><code>--warning</code> variant</h2>

				<AUpageAlert dark as='warning'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
				</AUpageAlert>


				<hr />
				<h2><code>--error</code> variant</h2>

				<AUpageAlert dark as='error'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
				</AUpageAlert>
			</div>
		</div>
		<div className="split-wrapper">
			<div className="split split--alt">
				<h2><code>--info</code> variant</h2>

				<AUpageAlert alt as='info'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
				</AUpageAlert>


				<hr />
				<h2><code>--success</code> variant</h2>

				<AUpageAlert alt as='success'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
				</AUpageAlert>


				<hr />
				<h2><code>--warning</code> variant</h2>

				<AUpageAlert alt as='warning'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
				</AUpageAlert>


				<hr />
				<h2><code>--error</code> variant</h2>

				<AUpageAlert alt as='error'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
				</AUpageAlert>
			</div>
			<div className="split split--alt split--dark">
				<h2><code>--info</code> variant</h2>

				<AUpageAlert alt dark as='info'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
				</AUpageAlert>


				<hr />
				<h2><code>--success</code> variant</h2>

				<AUpageAlert alt dark as='success'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
				</AUpageAlert>


				<hr />
				<h2><code>--warning</code> variant</h2>

				<AUpageAlert alt dark as='warning'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
				</AUpageAlert>


				<hr />
				<h2><code>--error</code> variant</h2>

				<AUpageAlert alt dark as='error'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate ratione iste blanditiis, asperiores, recusandae, sed natus voluptate.
				</AUpageAlert>
			</div>
		</div>
	</div>,

	document.getElementById('root'),
);
