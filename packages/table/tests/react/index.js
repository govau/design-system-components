import React from 'react';
import ReactDOM from 'react-dom';
import AUbutton from '../../../buttons/src/js/react.js';
import AUtags from '../../../tags/src/js/react.js';


import AUtable from './table.js';

const simpleData = [
	{location: "New South Wales", population: "7,670,700"},
	{location: "Victoria",        population: "5,996,400"},
	{location: "Tasmania",        population: "514,400"}
];

const simpleHeaders = [{title: "Location"}, {title: "Population"}];

const complexData = [
	{location: "New South Wales",              population: "7,670,700", changeYear: "3.1%", changeDecade: "12.9%" },
	{location: "Victoria",                     population: "5,996,400", changeYear: "2.5%", changeDecade: "9.3%"},
	{location: "Queensland",                   population: "4,808,800", changeYear: "1.7%", changeDecade: "13.3%"},
	{location: "Western Australia",            population: "2,603,900", changeYear: "2.3%", changeDecade: "11.6%"},
	{location: "South Australia",              population: "1,702,800", changeYear: "2.0%", changeDecade: "6.8%"},
	{location: "Tasmania",                     population: "517,400",   changeYear: "4%",   changeDecade: "5.3%"},
	{location: "Nothern Territory",            population: "244,400",   changeYear: "1.2%", changeDecade: "4.5%"},
	{location: "Australian Capital Territory", population: "393,000",   changeYear: "2.4%", changeDecade: "9.6%"},

];

const complexHeaders = [
	{title: "Location"},
	{title: "Population"},
	{title: "Change over previous year %"},
	{title: "Change over previous decade %"},
];

const dataRemoveButton = [
	{location: "New South Wales", population: "7,670,700", remove: "remove"},
	{location: "Victoria",        population: "5,996,400", remove: "remove"},
	{location: "Tasmania",        population: "514,400",   remove: "remove"}
];

const headersRemoveButton = [
	{title: "Location", },
	{title: "Population"},
	{title: "", render: (text) => (<AUbutton>{text}</AUbutton>)}
];

const dataWithTags = [
	{location: "New South Wales", population: "7,670,700", tags: [{link: '#', text: "Sydney"}, {link: '#', text: "Opera House"}]},
	{location: "Victoria",        population: "5,996,400", tags: [{link: '#', text: "Melbourne"}, {link: '#', text: "Rialto Tower"}]},
	{location: "Tasmania",        population: "514,400",   tags: [{link: '#', text: "Hobart"}, {link: '#', text: "Cradle Mountain"}]}
];

const headersWithTags = [
	{title: "Location", },
	{title: "Population"},
	{title: "Tags", render: (tags) => (<AUtags tags={tags}/>)}
];


ReactDOM.render(
	<div>
		<h2>Simple Table</h2>

		<AUtable
		headers={simpleHeaders}
		headerContentTypes={["text", "numeric"]}
		data={simpleData}
		/>
		<br/>
		<br/>
		<hr/>

		<h2>Simple table with defined widths</h2>

		<AUtable
		headers={simpleHeaders}
		headerContentTypes={["text", "numeric"]}
		data={simpleData}
		/>


	<h2>Complex table with stripes</h2>
		<AUtable
		striped={true}
		headers={complexHeaders}
		headerContentTypes={["text", "numeric", "numeric", "numeric"]}
		data={complexData}
		/>

		<br/>
		<br/>
		<hr/>
		<h2>Table with custom cell rendering</h2>

		<AUtable
		headers={headersRemoveButton}
		headerContentTypes={["text", "numeric", "numeric"]}
		data={dataRemoveButton}
		/>


		<br/>
		<br/>
		<hr/>
		<h2>Table with complex custom cell rendering</h2>

		<AUtable
		headers={headersWithTags}
		headerContentTypes={["text", "numeric", "text"]}
		data={dataWithTags}
		/>

	</div>,

	document.getElementById('root'),
);
