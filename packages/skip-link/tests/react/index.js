import React from 'react';
import ReactDOM from 'react-dom';

import AUskipLink from './skip-link.js';


ReactDOM.render(
	<div>
		<AUskipLink links={[
			{
				link: '#nav',
				text: 'Skip to navigation',
			},
			{
				link: '#content',
				text: 'Skip to content',
			},
			{
				link: '#content',
				text: 'Skip link with onClick',
				onClick: () => console.log('This function is called when the last skip link is clicked'),
			},
		]} />

		<AUskipLink className="testing" links={[
			{
				link: '#nav',
				text: 'Skip to navigation',
			},
			{
				link: '#content',
				text: 'Skip to content',
				className: 'testing',
			},
			{
				link: '#content',
				text: 'Skip link with onClick',
				onClick: () => console.log('This function is called when the last skip link is clicked'),
			},
		]} />

		<a className="test-link" href="../">&larr; back to the module index</a>

		<h1>Test: skip-link</h1>

		<p>This test file is unique in that the feature being tested is placed outside the <code>body</code> tag and is visually hidden by default.</p>
		<p>
			To test the skip-to main navigation and content links use the <kbd>Tab</kbd> key commencing from the address bar of your browser to key to the skip links.
		</p>
		<p>
			Following the main content link should take the user to <code>/#nav</code> while following the main content link the user should be taken to
			<code>/#content</code>.
		</p>
		<header>
			<h2>Navigation</h2>

			<nav id="nav" role="main navigation" tabIndex="0">
				<ul>
					<li><a href="#">A navigation link</a></li>
					<li><a href="#">Another navigation link</a></li>
				</ul>
			</nav>
		</header>

		<main id="content" role="main" tabIndex="0">
			<p>This is paragraph inside the main content space (a <code>main</code> element).</p>
		</main>
	</div>,

	document.getElementById('root'),
);
