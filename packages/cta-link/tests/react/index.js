import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import AUctaLink from './cta-link.js';


ReactDOM.render(
	<div className="split-wrapper">
		<div className="split">
			<h2>cta-link</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit, iure sequi debitis optio porro unde maiores minus ipsum sit ut aut atque nesciunt
				doloremque voluptas doloribus blanditiis suscipit rem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti consectetur, sed saepe rem culpa
				quo inventore deserunt, dolore. Provident temporibus consequatur eius maxime assumenda possimus nostrum neque optio quos quisquam?
			</p>

			<AUctaLink link="#url" text="Sign up" />

			<hr />
			<h2>cta-link with additional class</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit, iure sequi debitis optio porro unde maiores minus ipsum sit ut aut atque nesciunt
				doloremque voluptas doloribus blanditiis suscipit rem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti consectetur, sed saepe rem culpa
				quo inventore deserunt, dolore. Provident temporibus consequatur eius maxime assumenda possimus nostrum neque optio quos quisquam?
			</p>

			<AUctaLink link="#url" text="Sign up" className="testing" />


			<hr />
			<h2>cta-link as button with onclick</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit, iure sequi debitis optio porro unde maiores minus ipsum sit ut aut atque nesciunt
				doloremque voluptas doloribus blanditiis suscipit rem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti consectetur, sed saepe rem culpa
				quo inventore deserunt, dolore. Provident temporibus consequatur eius maxime assumenda possimus nostrum neque optio quos quisquam?
			</p>

			<AUctaLink text="Log it" onClick={ () => console.log('This function will be called when the button is clicked') } />
		</div>
		<div className="split split--dark">
			<h2>cta-link</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit, iure sequi debitis optio porro unde maiores minus ipsum sit ut aut atque nesciunt
				doloremque voluptas doloribus blanditiis suscipit rem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti consectetur, sed saepe rem culpa
				quo inventore deserunt, dolore. Provident temporibus consequatur eius maxime assumenda possimus nostrum neque optio quos quisquam?
			</p>

			<AUctaLink dark link="#url" text="Sign up" />

			<hr />
			<h2>cta-link with additional class</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit, iure sequi debitis optio porro unde maiores minus ipsum sit ut aut atque nesciunt
				doloremque voluptas doloribus blanditiis suscipit rem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti consectetur, sed saepe rem culpa
				quo inventore deserunt, dolore. Provident temporibus consequatur eius maxime assumenda possimus nostrum neque optio quos quisquam?
			</p>

			<AUctaLink dark link="#url" text="Sign up" className="testing" />


			<hr />
			<h2>cta-link as button with onclick</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit, iure sequi debitis optio porro unde maiores minus ipsum sit ut aut atque nesciunt
				doloremque voluptas doloribus blanditiis suscipit rem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti consectetur, sed saepe rem culpa
				quo inventore deserunt, dolore. Provident temporibus consequatur eius maxime assumenda possimus nostrum neque optio quos quisquam?
			</p>

			<AUctaLink dark text="Log it" onClick={ () => console.log('This function will be called when the button is clicked') } />

			<hr />
			<h2>cta-link as with router</h2>
			<BrowserRouter>
				<Fragment>
					<AUctaLink linkComponent={ Link } link="one" dark text="Page one" />
					<AUctaLink linkComponent={ Link } link="two" dark text="Page two" />
					<br />
					<Route path="/tests/react/one" render={ () => ( <p>Route one</p> )} />
					<Route path="/tests/react/two" render={ () => ( <p>Route two</p> )} />
				</Fragment>
			</BrowserRouter>

		</div>
	</div>,

	document.getElementById('root'),
);
