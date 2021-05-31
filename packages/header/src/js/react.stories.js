import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Link } from 'react-router-dom';

import AUheader, { AUheaderBrand } from './react';
import '../../tests/site/style.css';

export default {
    title: 'Design System/Header',
    component: AUheader,
};

export const Default = () => (
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
);

export const AltColor = () => (
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
)

export const DarkColor = () => (
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
)

export const DarkAltColor = (args) => (
	<AUheader {...args} className="au-grid">
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
)

DarkAltColor.args = {
    alt: true,
    dark: true
}
DarkAltColor.parameters = {
    design: {
       type: 'figma',
       url: 'https://www.figma.com/file/NCZ1dta51b1Ckx9xpFd4My/Modal-Dialog-WIP?node-id=1043%3A1782'
    }
 }

export const TitleAndSubTitle = () => (
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
)

export const TitleAndSubTitleImage = () => (
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
)

export const AdditionalClass = () => (
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
)

export const WithChildren = () => (
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
)

export const DifferentHeadingLevel = () => (
	<AUheader dark className="au-grid">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<AUheaderBrand level="5" link="#" title="Page title" subline="Service sub-title" />
					</div>
				</div>
			</div>
		</AUheader>
)

export const Hero = () => (
	<AUheader hero dark className="au-grid">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<AUheaderBrand level="5" link="#" title="Page title" subline="Service sub-title" />
					</div>
				</div>
			</div>
		</AUheader>
)

export const ExtraHtml = () => (
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
)

export const NoLink = () => (
	<AUheader className="au-grid">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<AUheaderBrand
							title="Page title"
							subline="Service sub-title"
							brandImage="http://placehold.it/256x80"
							brandImageAlt="Digital Transformation Agency"
						/>
					</div>
				</div>
			</div>
		</AUheader>
)
// const Template = (args) => <AUheader {...args} />

// export const Default = Template.bind({});
// Default.Component = DefaultHeader;
