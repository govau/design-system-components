import React from 'react';
import ReactDOM from 'react-dom';

import AUcard, { AUcardInner, AUcardImage, AUcardDivider, AUcardLink } from './card.js';

ReactDOM.render(
	<div className="row">
		<div className="col-md-4">

			<h2>Basic card</h2><br/>
			<AUcard>
				A basic card
			</AUcard>
			<br/><br/>

			<h2>Card with heading and inner container</h2>
			<AUcard>
				<AUcardInner>
					<h3>Some Heading</h3>
					<AUcardDivider />
					<p>Additional content</p>
				</AUcardInner>
			</AUcard>
			<br/><br/>

		<h2>Card with image</h2>
			<AUcard>
				<AUcardInner>
					<AUcardImage src="http://placehold.it/1200x500" />
					Bla
				</AUcardInner>
			</AUcard>

			<br/><br/>

			<h2>Card with full width image</h2>
			<AUcard className="bla">
				<AUcardImage src="http://placehold.it/1200x500" />
					<AUcardInner>
						<span>Image caption or description</span>
					</AUcardInner>
			</AUcard>

			<br/><br/>
		</div>


		<div className="col-md-4 col-md-offset-2">

		<h2>Card with image and wrappingLink</h2>
		<AUcard className="bla">
			<AUcardImage src="http://placehold.it/1200x500" />
				<AUcardInner>
						<h3 className="au-card__title"><AUcardLink link="#" text="Some link" /></h3>
				</AUcardInner>
		</AUcard>
		<br/><br/>

		<AUcard link="#">
		<AUcardImage src="http://placehold.it/1200x500" />
			<AUcardInner>
					<h3 className="au-card__title"><AUcardLink link="#" text="Some link" /></h3>
			</AUcardInner>
		</AUcard>
		</div>
	</div>,

	document.getElementById('root'),
);
