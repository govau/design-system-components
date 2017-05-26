import React from 'react';
import ReactDOM from 'react-dom';

import CTALink from './cta-link.js';


ReactDOM.render(
	<div>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit, iure sequi debitis optio porro unde maiores minus ipsum sit ut aut atque nesciunt
			doloremque voluptas doloribus blanditiis suscipit rem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti consectetur, sed saepe rem culpa
			quo inventore deserunt, dolore. Provident temporibus consequatur eius maxime assumenda possimus nostrum neque optio quos quisquam?
		</p>

		<CTALink href="#url" text="Sign up" />
	</div>,

	document.getElementById('root'),
);
