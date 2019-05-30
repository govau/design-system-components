import React from 'react';
import ReactDOM from 'react-dom';

import AUCard, { AUcardInner, AUcardImage, AUcardDivider } from './card.js';

ReactDOM.render(
	<div className="split-wrapper">
		<div className="split">
			<AUCard>
				hello
			</AUCard>
			<br/><br/>

			<AUCard>
				<h1>Some Heading</h1>
				<AUcardDivider />
				<p>Additional content</p>
			</AUCard>
			<br/><br/>

			<AUCard className="bla" link="hello">
				<AUcardInner>
					Bla
				</AUcardInner>
			</AUCard>

			<br/><br/>

			<AUCard className="bla">
				<AUcardInner>
					<AUcardImage src="http://placehold.it/1200x500" />
					Bla
				</AUcardInner>
			</AUCard>

			<br/><br/>

			<AUCard className="bla">
				<AUcardImage src="http://placehold.it/1200x500" />
					<AUcardInner>
						Bla
					</AUcardInner>
			</AUCard>

		</div>
	</div>,

	document.getElementById('root'),
);
