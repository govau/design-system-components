import React from 'react';
import ReactDOM from 'react-dom';

import Footer, { FooterNav, FooterEnd } from './footer.js';


ReactDOM.render(
	<div>
		<h2>footer</h2>

		<Footer>
			<FooterNav>
				uikit-footer__navigation
			</FooterNav>
			<FooterEnd>
				uikit-footer__end
			</FooterEnd>
		</Footer>


		<hr />
		<h2>footer with paragraph test and body</h2>

		<div className="uikit-body">
			<Footer>
				<FooterNav>
					<p>uikit-footer__navigation</p>
					<p>uikit-footer__navigation</p>
					<p>uikit-footer__navigation</p>
				</FooterNav>
				<FooterEnd>
					<p>uikit-footer__end</p>
					<p>uikit-footer__end</p>
				</FooterEnd>
			</Footer>
		</div>


		<hr />
		<h2>footer navigation only</h2>

		<Footer>
			<FooterNav>
				uikit-footer__navigation
			</FooterNav>
		</Footer>


		<hr />
		<h2>footer end only</h2>

		<Footer>
			<FooterEnd>
				uikit-footer__end
			</FooterEnd>
		</Footer>


		<hr />
		<h2>footer with grid, link-list, responsive-embeds and headings</h2>

		<div className="uikit-grid uikit-body">
			<Footer>
				<FooterNav>
					<div className="row">
						<div className="col-md-3 col-sm-6">
							<h3 className="uikit-display-1">Section</h3>
							<ul className="uikit-link-list">
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>

						<div className="col-md-3 col-sm-6">
							<h3 className="uikit-display-1">Section</h3>
							<ul className="uikit-link-list">
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>

						<div className="col-md-3 col-sm-6">
							<h3 className="uikit-display-1">Section</h3>
							<ul className="uikit-link-list">
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>

						<div className="col-md-3 col-sm-6">
							<h3 className="uikit-display-1">Section</h3>
							<ul className="uikit-link-list">
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
				</FooterNav>

				<FooterEnd>
					<div className="row">
						<div className="col-sm-12">
							<p>Footer text</p>

							<img className="uikit-responsive-media-img" src="http://placehold.it/157x80" alt="Commonwealth Coat of Arms crest logo" />

							<p><small>&copy; Commonwealth of Australia, <a href="https://github.com/govau/uikit/blob/master/LICENSE.md" rel="external license">MIT licensed</a></small></p>
						</div>
					</div>
				</FooterEnd>
			</Footer>
		</div>

	</div>,

	document.getElementById('root'),
);
