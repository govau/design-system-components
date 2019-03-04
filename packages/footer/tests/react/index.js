import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import AUfooter, { AUfooterNav, AUfooterEnd } from './footer.js';


ReactDOM.render(
	<div>
		<h2>footer</h2>

		<AUfooter>
			<AUfooterNav>
				au-footer__navigation
			</AUfooterNav>
			<AUfooterEnd>
				au-footer__end
			</AUfooterEnd>
		</AUfooter>

		<h2>footer with additional class</h2>

		<AUfooter alt className="testing">
			<AUfooterNav alt className="testing">
				au-footer__navigation
			</AUfooterNav>
			<AUfooterEnd alt className="testing">
				au-footer__end
			</AUfooterEnd>
		</AUfooter>

		<h2>footer <code>--alt</code></h2>

		<AUfooter alt>
			<AUfooterNav>
				au-footer__navigation
			</AUfooterNav>
			<AUfooterEnd>
				au-footer__end
			</AUfooterEnd>
		</AUfooter>

		<h2>footer <code>--dark</code></h2>

		<AUfooter dark>
			<AUfooterNav>
				au-footer__navigation
			</AUfooterNav>
			<AUfooterEnd>
				au-footer__end
			</AUfooterEnd>
		</AUfooter>

		<h2>footer <code>--dark</code> <code>--alt</code></h2>

		<AUfooter dark alt>
			<AUfooterNav>
				au-footer__navigation
			</AUfooterNav>
			<AUfooterEnd>
				au-footer__end
			</AUfooterEnd>
		</AUfooter>


		<hr />
		<h2>footer with paragraph test and body</h2>

		<div className="au-body">
			<AUfooter>
				<AUfooterNav>
					<p>au-footer__navigation</p>
					<p>au-footer__navigation</p>
					<p>au-footer__navigation</p>
				</AUfooterNav>
				<AUfooterEnd>
					<p>au-footer__end</p>
					<p>au-footer__end</p>
				</AUfooterEnd>
			</AUfooter>
		</div>


		<hr />
		<h2>footer navigation only</h2>

		<AUfooter>
			<AUfooterNav>
				au-footer__navigation
			</AUfooterNav>
		</AUfooter>


		<hr />
		<h2>footer end only</h2>

		<AUfooter>
			<AUfooterEnd>
				au-footer__end
			</AUfooterEnd>
		</AUfooter>


		<hr />
		<h2>footer with grid, link-list, responsive-embeds and headings</h2>

		<div className="au-grid au-body">
			<AUfooter>
				<div className="container">
					<AUfooterNav>
						<div className="row">
							<div className="col-md-3 col-sm-6">
								<h3 className="au-display-lg">Section</h3>
								<ul className="au-link-list">
									<li><a href="#">Link 1</a></li>
									<li><a href="#">Link 2</a></li>
									<li><a href="#">Link 3</a></li>
								</ul>
							</div>

							<div className="col-md-3 col-sm-6">
								<h3 className="au-display-lg">Section</h3>
								<ul className="au-link-list">
									<li><a href="#">Link 1</a></li>
									<li><a href="#">Link 2</a></li>
									<li><a href="#">Link 3</a></li>
								</ul>
							</div>

							<div className="col-md-3 col-sm-6">
								<h3 className="au-display-lg">Section</h3>
								<ul className="au-link-list">
									<li><a href="#">Link 1</a></li>
									<li><a href="#">Link 2</a></li>
									<li><a href="#">Link 3</a></li>
								</ul>
							</div>

							<div className="col-md-3 col-sm-6">
								<h3 className="au-display-lg">Section</h3>
								<ul className="au-link-list">
									<li><a href="#">Link 1</a></li>
									<li><a href="#">Link 2</a></li>
									<li><a href="#">Link 3</a></li>
								</ul>
							</div>
						</div>
					</AUfooterNav>

					<AUfooterEnd>
						<div className="row">
							<div className="col-sm-12">
								<p>Footer text</p>

								<img className="au-responsive-media-img" src="http://placehold.it/157x80" alt="Commonwealth Coat of Arms crest logo" />

								<p><small>&copy; Commonwealth of Australia, <a href="https://github.com/govau/design-system-components/blob/master/LICENSE.md" rel="external license">MIT licensed</a></small></p>
							</div>
						</div>
					</AUfooterEnd>
				</div>
			</AUfooter>
		</div>

		<hr />
		<h2>footer with grid, link-list, responsive-embeds and headings <code>--dark</code></h2>

		<div className="au-grid au-body au-body--dark">
			<AUfooter dark>
				<div className="container">
					<AUfooterNav>
						<div className="row">
							<div className="col-md-3 col-sm-6">
								<h3 className="au-display-lg">Section</h3>
								<ul className="au-link-list">
									<li><a href="#">Link 1</a></li>
									<li><a href="#">Link 2</a></li>
									<li><a href="#">Link 3</a></li>
								</ul>
							</div>

							<div className="col-md-3 col-sm-6">
								<h3 className="au-display-lg">Section</h3>
								<ul className="au-link-list">
									<li><a href="#">Link 1</a></li>
									<li><a href="#">Link 2</a></li>
									<li><a href="#">Link 3</a></li>
								</ul>
							</div>

							<div className="col-md-3 col-sm-6">
								<h3 className="au-display-lg">Section</h3>
								<ul className="au-link-list">
									<li><a href="#">Link 1</a></li>
									<li><a href="#">Link 2</a></li>
									<li><a href="#">Link 3</a></li>
								</ul>
							</div>

							<div className="col-md-3 col-sm-6">
								<h3 className="au-display-lg">Section</h3>
								<ul className="au-link-list">
									<li><a href="#">Link 1</a></li>
									<li><a href="#">Link 2</a></li>
									<li><a href="#">Link 3</a></li>
								</ul>
							</div>
						</div>
					</AUfooterNav>

					<div className="row">
						<div className="col-sm-12">
							<AUfooterEnd>
								<p>Footer text</p>

								<img className="au-responsive-media-img" src="http://placehold.it/157x80" alt="Commonwealth Coat of Arms crest logo" />

								<p><small>&copy; Commonwealth of Australia, <a href="https://github.com/govau/design-system-components/blob/master/LICENSE.md" rel="external license">MIT licensed</a></small></p>
							</AUfooterEnd>
						</div>
					</div>
				</div>
			</AUfooter>
		</div>
	</div>,

	document.getElementById('root'),
);
