import React from 'react';
import ReactDOM from 'react-dom';

import AUctalink from './cta-link.js';


ReactDOM.render(
	<div className="split-wrapper">
		<div className="split">
			<h2>cta-link</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit, iure sequi debitis optio porro unde maiores minus ipsum sit ut aut atque nesciunt
				doloremque voluptas doloribus blanditiis suscipit rem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti consectetur, sed saepe rem culpa
				quo inventore deserunt, dolore. Provident temporibus consequatur eius maxime assumenda possimus nostrum neque optio quos quisquam?
			</p>

			<AUctalink link="#url" text="Sign up" />


			<hr />
			<h2>cta-link as button with onclick</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit, iure sequi debitis optio porro unde maiores minus ipsum sit ut aut atque nesciunt
				doloremque voluptas doloribus blanditiis suscipit rem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti consectetur, sed saepe rem culpa
				quo inventore deserunt, dolore. Provident temporibus consequatur eius maxime assumenda possimus nostrum neque optio quos quisquam?
			</p>

			<AUctalink text="Next" onClick={ () => console.log('This function will be called when the button is clicked') } />
		</div>
		<div className="split split--dark">
			<h2>cta-link</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit, iure sequi debitis optio porro unde maiores minus ipsum sit ut aut atque nesciunt
				doloremque voluptas doloribus blanditiis suscipit rem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti consectetur, sed saepe rem culpa
				quo inventore deserunt, dolore. Provident temporibus consequatur eius maxime assumenda possimus nostrum neque optio quos quisquam?
			</p>

			<AUctalink dark link="#url" text="Sign up" />


			<hr />
			<h2>cta-link as button with onclick</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit, iure sequi debitis optio porro unde maiores minus ipsum sit ut aut atque nesciunt
				doloremque voluptas doloribus blanditiis suscipit rem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti consectetur, sed saepe rem culpa
				quo inventore deserunt, dolore. Provident temporibus consequatur eius maxime assumenda possimus nostrum neque optio quos quisquam?
			</p>

			<AUctalink dark text="Next" onClick={ () => console.log('This function will be called when the button is clicked') } />
		</div>
	</div>,

	document.getElementById('root'),
);
