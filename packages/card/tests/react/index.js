import React from 'react';
import ReactDOM from 'react-dom';

import AUcard, { AUcardInner, AUcardDivider, AUcardHeader, AUcardTitle, AUcardLink, AUcardFooter } from './card.js';

ReactDOM.render(
	<div>
	<div className="row">
		<div className="col-md-4">

			<h2>Basic card</h2><br/>
			<AUcard>
				A basic card
			</AUcard>
			<br/><br/>

			<h2>Basic card with shadow</h2><br/>
			<AUcard shadow={true}>
				<AUcardInner>
				<AUcardTitle level="2">Card title</AUcardTitle>
					A basic card
				</AUcardInner>
			</AUcard>
			<br/><br/>


			<h2>Basic card with shadow</h2><br/>
			<AUcard shadow={true}>
				<AUcardInner>
				<AUcardTitle level="2">Card title</AUcardTitle>
					A basic card
				</AUcardInner>
			</AUcard>
			<br/><br/>


			<h2>Basic card with shadow</h2><br/>
			<AUcard shadow={true}>
				<AUcardHeader>Card title</AUcardHeader>
				<AUcardInner>
					A basic card
				</AUcardInner>
			</AUcard>
			<br/><br/>

			<h2>Basic card with shadow alt header</h2><br/>
			<AUcard shadow={true}>
				<AUcardHeader alt>Card title</AUcardHeader>
				<AUcardInner>
					A basic card
				</AUcardInner>
			</AUcard>
			<br/><br/>


			<h2>Basic card with dark alt header</h2><br/>
			<AUcard shadow={true}>
				<AUcardHeader dark>Card title</AUcardHeader>
				<AUcardInner>
					A basic card
				</AUcardInner>
			</AUcard>
			<br/><br/>

			<h2>Basic card with header and heading</h2><br/>
			<AUcard shadow={true}>
				<AUcardHeader level="2" dark>Card feature title</AUcardHeader>
				<AUcardInner>
					A basic card
				</AUcardInner>
			</AUcard>
			<br/><br/>

			<h2>Basic card dark</h2><br/>
			<AUcard dark alt>
				<AUcardInner>
					<AUcardTitle level="2">Card title</AUcardTitle>
					A basic card
				</AUcardInner>
			</AUcard>
			<br/><br/>

			<h2>Basic card alt</h2><br/>
			<AUcard alt>
				<AUcardInner>
					<AUcardTitle level="2">Card title</AUcardTitle>
					A basic card
				</AUcardInner>
			</AUcard>
			<br/><br/>

			<h2>Basic card with centered content</h2><br/>
			<AUcard centred={true}>
			<img className="au-responsive-media-img" src="http://placehold.it/1200x500" alt=""/>
				Image Caption

			</AUcard>
			<br/><br/>

			<h2>Card with heading and inner container</h2>
			<AUcard>
				<AUcardInner>
					<AUcardTitle level="2">Card title</AUcardTitle>
					<AUcardDivider />
					<p>Additional content</p>
				</AUcardInner>
			</AUcard>
			<br/><br/>

		<h2>Card with image</h2>
			<AUcard>
				<AUcardInner>
					<img className="au-responsive-media-img" src="http://placehold.it/1200x500" alt=""/>
					Image caption
				</AUcardInner>
			</AUcard>

			<br/><br/>

			<h2>Card with full width image</h2>
			<AUcard>
				<img className="au-responsive-media-img" src="http://placehold.it/1200x500" alt=""/>
					<AUcardInner>
						<span>Image caption or description</span>
					</AUcardInner>
			</AUcard>

			<br/><br/>

			<h2>Card with full width image and footer</h2>
			<AUcard className="au-body" shadow={true} centred={false} >
				<img className="au-responsive-media-img" src="http://placehold.it/1200x500" />
					<AUcardInner>
						<span>Image caption or description</span>
					</AUcardInner>
					<AUcardFooter>
						<a href="#">Call to action</a>
					</AUcardFooter>
			</AUcard>

			<br/><br/>

			<h2>Card with alt footer</h2>
			<AUcard className="au-body" shadow={true} centred={false} >
					<AUcardInner>
						<span>Image caption or description</span>
					</AUcardInner>
					<AUcardFooter alt>
						<a href="#">Call to action</a>
					</AUcardFooter>
			</AUcard>

		</div>


		<div className="col-md-4 col-md-offset-2">

		<h2>Card with image and wrappingLink</h2>
		<AUcard className="au-body" clickable>
			<img className="au-responsive-media-img" src="http://placehold.it/1200x500" />
			<AUcardInner>
			<AUcardTitle level="2">
				<AUcardLink link="#" text="Some link" />
			</AUcardTitle>
				<span> Additional text</span>
			</AUcardInner>
		</AUcard>
		<br/><br/>

		<h2>Card wrapped around an anchor tag</h2>
		<AUcard shadow link="#">
			<img className="au-responsive-media-img" src="http://placehold.it/1200x500" />
			<AUcardInner>
				<h3 className="au-card__title">Title of article</h3>
			</AUcardInner>
		</AUcard>
		</div>
	</div>

	<div className="row">
		<h2>Card List example</h2>
			<ul className="au-card-list au-card-list--matchheight">
				<li className="col-sm-3 col-xs-6">
					<AUcard clickable className="au-body">
						<img className="au-responsive-media-img" src="http://placehold.it/1200x500" />
							<AUcardInner>
									<AUcardTitle level="3"><AUcardLink link="#" text="Card title" /></AUcardTitle>
									<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eligendi!</span>
							</AUcardInner>
					</AUcard>
				</li>
				<li className="col-sm-3 col-xs-6">
					<AUcard clickable className="au-body">
						<img className="au-responsive-media-img" src="http://placehold.it/1200x500" />
							<AUcardInner>
									<AUcardTitle level="3"><AUcardLink link="#" text="Card title" /></AUcardTitle>
									<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eligendi!</span>
							</AUcardInner>
					</AUcard>
				</li>
				<li className="col-sm-3 col-xs-6">
					<AUcard clickable className="au-body">
						<img className="au-responsive-media-img" src="http://placehold.it/1200x500" />
							<AUcardInner>
									<AUcardTitle level="3"><AUcardLink link="#" text="Card title" /></AUcardTitle>
									<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eligendi!</span>
							</AUcardInner>
					</AUcard>
				</li>
				<li className="col-sm-3 col-xs-6">
					<AUcard clickable className="au-body">
						<img className="au-responsive-media-img" src="http://placehold.it/1200x500" />
							<AUcardInner>
									<AUcardTitle level="3"><AUcardLink link="#" text="Card title" /></AUcardTitle>
									<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eligendi!</span>
							</AUcardInner>
					</AUcard>
				</li>
				<li className="col-sm-3 col-xs-6">
					<AUcard clickable className="au-body">
						<img className="au-responsive-media-img" src="http://placehold.it/1200x500" />
							<AUcardInner>
									<AUcardTitle level="3"><AUcardLink link="#" text="Card title" /></AUcardTitle>
									<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eligendi!</span>
							</AUcardInner>
					</AUcard>
				</li>
				<li className="col-sm-3 col-xs-6">
					<AUcard clickable className="au-body">
						<img className="au-responsive-media-img" src="http://placehold.it/1200x500" />
							<AUcardInner>
									<AUcardTitle level="3"><AUcardLink link="#" text="Card title" /></AUcardTitle>
									<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eligendi!</span>
							</AUcardInner>
					</AUcard>
				</li>
				<li className="col-sm-3 col-xs-6">
					<AUcard clickable className="au-body">
						<img className="au-responsive-media-img" src="http://placehold.it/1200x500" />
							<AUcardInner>
									<AUcardTitle level="3"><AUcardLink link="#" text="Card title" /></AUcardTitle>
									<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eligendi!</span>
							</AUcardInner>
					</AUcard>
				</li>
				<li className="col-sm-3 col-xs-6">
					<AUcard clickable className="au-body">
						<img className="au-responsive-media-img" src="http://placehold.it/1200x500" />
							<AUcardInner>
									<AUcardTitle level="3"><AUcardLink link="#" text="Card title" /></AUcardTitle>
									<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eligendi!</span>
							</AUcardInner>
					</AUcard>
				</li>
			</ul>
	</div>
	</div>,

	document.getElementById('root'),
);
