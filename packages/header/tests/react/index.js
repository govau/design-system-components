import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import AUheader, { AUheaderBrand } from './header.js';


ReactDOM.render(
	<div>
		<h2>header default</h2>

		<AUheader className="au-grid">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<AUheaderBrand
							link="#"
							brandImage="http://placehold.it/256x80"
							brandImageAlt="Digital Transformation Agency"
						/>
					</div>
				</div>
			</div>
		</AUheader>

		<h2>header <code>alt</code> color</h2>

		<AUheader alt className="au-grid">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<AUheaderBrand
							link="#"
							brandImage="http://placehold.it/256x80"
							brandImageAlt="Digital Transformation Agency"
						/>
					</div>
				</div>
			</div>
		</AUheader>

		<h2>header <code>dark</code> color</h2>

		<AUheader dark className="au-grid">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<AUheaderBrand
							link="#"
							brandImage="http://placehold.it/256x80"
							brandImageAlt="Digital Transformation Agency"
						/>
					</div>
				</div>
			</div>
		</AUheader>

		<h2>header <code>dark</code> <code>alt</code> color</h2>

		<AUheader dark alt className="au-grid">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<AUheaderBrand
							link="#"
							brandImage="http://placehold.it/256x80"
							brandImageAlt="Digital Transformation Agency"
						/>
					</div>
				</div>
			</div>
		</AUheader>

		<hr />

		<h2>header with title and subline</h2>

		<AUheader dark alt className="au-grid">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<AUheaderBrand
							link="#"
							title="Page title"
							subline="Service sub-title"
						/>
					</div>
				</div>
			</div>
		</AUheader>

		<hr />

		<h2>header with title and subline</h2>

		<AUheader dark alt className="au-grid">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<AUheaderBrand
							link="#"
							brandImage="http://placehold.it/256x80"
							brandImageAlt="Digital Transformation Agency"
							title="Page title"
							subline="Service sub-title"
						/>
					</div>
				</div>
			</div>
		</AUheader>


		<hr />
		<h2>header with additional class</h2>

		<AUheader dark className="testing au-grid">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<AUheaderBrand
							title="Page title"
							subline="Service sub-title"
							link="#"
							brandImage="http://placehold.it/256x80"
							brandImageAlt="Digital Transformation Agency"
						/>
					</div>
				</div>
			</div>
		</AUheader>


		<hr />
		<h2>header with children</h2>

		<AUheader dark className="au-grid">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<AUheaderBrand link="#" title="Page title" subline="Service sub-title" />
					</div>
				</div>
			</div>
			<p>Some navigation maybe</p>
		</AUheader>


		<hr />
		<h2>header with different heading level</h2>

		<AUheader dark className="au-grid">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<AUheaderBrand level="5" link="#" title="Page title" subline="Service sub-title" />
					</div>
				</div>
			</div>
		</AUheader>


		<hr />
		<h2>header <code>--hero</code></h2>

		<AUheader hero dark className="au-grid">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<AUheaderBrand level="5" link="#" title="Page title" subline="Service sub-title" />
					</div>
				</div>
			</div>
		</AUheader>

		<hr />
		<h2>header with extra html inside title and subline <code>--hero</code></h2>

		<AUheader hero dark className="au-grid">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<AUheaderBrand
							link="#"
							title={ <Fragment>Page title <span className="testing">beta</span></Fragment> }
							subline={ <Fragment>Service sub-title <span className="testing">i am here as well</span></Fragment> }
						/>
					</div>
				</div>
			</div>
		</AUheader>

	</div>,

	document.getElementById('root'),
);
