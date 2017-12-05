import React from 'react';
import ReactDOM from 'react-dom';

import Footer, { FooterNav, FooterEnd } from './footer.js';


ReactDOM.render(
	<div>
		<h2>footer</h2>

		<Footer>
			<FooterNav>
				au-footer__navigation
			</FooterNav>
			<FooterEnd>
				au-footer__end
			</FooterEnd>
		</Footer>

		<h2>footer <code>--alt</code></h2>

		<Footer alt>
			<FooterNav>
				au-footer__navigation
			</FooterNav>
			<FooterEnd>
				au-footer__end
			</FooterEnd>
		</Footer>

		<h2>footer <code>--dark</code></h2>

		<Footer dark>
			<FooterNav>
				au-footer__navigation
			</FooterNav>
			<FooterEnd>
				au-footer__end
			</FooterEnd>
		</Footer>

		<h2>footer <code>--dark</code> <code>--alt</code></h2>

		<Footer dark alt>
			<FooterNav>
				au-footer__navigation
			</FooterNav>
			<FooterEnd>
				au-footer__end
			</FooterEnd>
		</Footer>


		<hr />
		<h2>footer with paragraph test and body</h2>

		<div className="au-body">
			<Footer>
				<FooterNav>
					<p>au-footer__navigation</p>
					<p>au-footer__navigation</p>
					<p>au-footer__navigation</p>
				</FooterNav>
				<FooterEnd>
					<p>au-footer__end</p>
					<p>au-footer__end</p>
				</FooterEnd>
			</Footer>
		</div>


		<hr />
		<h2>footer navigation only</h2>

		<Footer>
			<FooterNav>
				au-footer__navigation
			</FooterNav>
		</Footer>


		<hr />
		<h2>footer end only</h2>

		<Footer>
			<FooterEnd>
				au-footer__end
			</FooterEnd>
		</Footer>


		<hr />
		<h2>footer with grid, link-list, responsive-embeds and headings</h2>

		<div className="au-grid au-body">
			<Footer>
				<div className="container">
					<FooterNav>
						<div className="row">
							<div className="col-md-3 col-sm-6">
								<h3 className="au-display-1">Section</h3>
								<ul className="au-link-list">
									<li><a href="#">Link 1</a></li>
									<li><a href="#">Link 2</a></li>
									<li><a href="#">Link 3</a></li>
								</ul>
							</div>

							<div className="col-md-3 col-sm-6">
								<h3 className="au-display-1">Section</h3>
								<ul className="au-link-list">
									<li><a href="#">Link 1</a></li>
									<li><a href="#">Link 2</a></li>
									<li><a href="#">Link 3</a></li>
								</ul>
							</div>

							<div className="col-md-3 col-sm-6">
								<h3 className="au-display-1">Section</h3>
								<ul className="au-link-list">
									<li><a href="#">Link 1</a></li>
									<li><a href="#">Link 2</a></li>
									<li><a href="#">Link 3</a></li>
								</ul>
							</div>

							<div className="col-md-3 col-sm-6">
								<h3 className="au-display-1">Section</h3>
								<ul className="au-link-list">
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

								<img className="au-responsive-media-img" src="http://placehold.it/157x80" alt="Commonwealth Coat of Arms crest logo" />

								<p><small>&copy; Commonwealth of Australia, <a href="https://github.com/govau/uikit/blob/master/LICENSE.md" rel="external license">MIT licensed</a></small></p>
							</div>
						</div>
					</FooterEnd>
				</div>
			</Footer>
		</div>

		<hr />
		<h2>footer with grid, link-list, responsive-embeds and headings <code>--dark</code></h2>

		<div className="au-grid au-body au-body--dark">
			<Footer dark>
				<div className="container">
					<FooterNav>
						<div className="row">
							<div className="col-md-3 col-sm-6">
								<h3 className="au-display-1">Section</h3>
								<ul className="au-link-list">
									<li><a href="#">Link 1</a></li>
									<li><a href="#">Link 2</a></li>
									<li><a href="#">Link 3</a></li>
								</ul>
							</div>

							<div className="col-md-3 col-sm-6">
								<h3 className="au-display-1">Section</h3>
								<ul className="au-link-list">
									<li><a href="#">Link 1</a></li>
									<li><a href="#">Link 2</a></li>
									<li><a href="#">Link 3</a></li>
								</ul>
							</div>

							<div className="col-md-3 col-sm-6">
								<h3 className="au-display-1">Section</h3>
								<ul className="au-link-list">
									<li><a href="#">Link 1</a></li>
									<li><a href="#">Link 2</a></li>
									<li><a href="#">Link 3</a></li>
								</ul>
							</div>

							<div className="col-md-3 col-sm-6">
								<h3 className="au-display-1">Section</h3>
								<ul className="au-link-list">
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

								<img className="au-responsive-media-img" src="http://placehold.it/157x80" alt="Commonwealth Coat of Arms crest logo" />

								<p><small>&copy; Commonwealth of Australia, <a href="https://github.com/govau/uikit/blob/master/LICENSE.md" rel="external license">MIT licensed</a></small></p>
							</div>
						</div>
					</FooterEnd>
				</div>
			</Footer>
		</div>
	</div>,

	document.getElementById('root'),
);
