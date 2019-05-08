import React from 'react';
import ReactDOM from 'react-dom';
import AUtags from '../../../tags/src/js/react.js';


import AUtable, {AUTableWrapper} from './table.js';

const simpleData = [
	{location: "New South Wales", population: "7,670,700"},
	{location: "Victoria",        population: "5,996,400"},
	{location: "Tasmania",        population: "514,400"}
];

const simpleHeaders = [{title: "Location"}, {title: "Population"}];
const simpleHeadersWidths = [{title: "Location", width: "50" }, {title: "Population", width: "50"}];


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
	{title: "", render: (text) => (<a href="javascript:;">{text}</a>)}
];

const dataWithTags = [
	{
		location: "New South Wales",
		population: "7,670,700",
		tags: [{link: '#', text: "Sydney"}, {link: '#', text: "Opera House"}]
	},
	{
		location: "Victoria",
		population: "5,996,400",
		tags: [{link: '#', text: "Melbourne"}, {link: '#', text: "Rialto Tower"}]},
	{
		location: "Tasmania",
		population: "514,400",
		tags: [{link: '#', text: "Hobart"}, {link: '#', text: "Cradle Mountain"}]}
];

const headersWithTags = [
	{title: "Location", },
	{title: "Population"},
	{title: "Tags", render: ( tags ) => (<AUtags tags={tags}/>)}
];

const dataCustomClasses = [
	{location: "New South Wales", population: "7,670,700"},
	{location: "Victoria",        population: "5,996,400"},
	{location: "Tasmania",        population: "514,400"}
];

const headersCustomClasses = [
	{title: "Location"},
	{title: "Population", render: ( data ) => (<span className={`${data.length > "8" ? 'bold-cell': ''}`}>{ data }</span>)},
];


ReactDOM.render(
	<div>
		<h3>Simple Table</h3>

		<AUtable
			caption="Population of Australian states and territories, December 2015"
			headers={simpleHeaders}
			headerContentTypes={["text", "numeric"]}
			data={simpleData}
		/>

		<br/>
		<br/>
		<br />
		<br />

		<h3>Simple table with defined widths</h3>

		<AUtable
			caption="Population of Australian states and territories, December 2015"
			headers={simpleHeadersWidths}
			headerContentTypes={["text", "numeric"]}
			data={simpleData}
		/>

		<br/>
		<br/>
		<br />
		<br />


	<h3>Complex table with stripes</h3>
		<AUtable
			caption="Population of Australian states and territories, December 2015"
			striped={true}
			headers={complexHeaders}
			headerContentTypes={["text", "numeric", "numeric", "numeric"]}
			data={complexData}
		/>

		<br/>
		<br/>
		<br />
		<br />
		<h3>Table with custom cell rendering</h3>

		<AUtable
			caption="Population of Australian states and territories, December 2015"
			headers={headersRemoveButton}
			headerContentTypes={["text", "numeric", "numeric"]}
			data={dataRemoveButton}
		/>


		<br/>
		<br/>
		<br />
		<br />
		<h3>Table with complex custom cell rendering</h3>

		<AUtable
			caption="Population of Australian states and territories, December 2015"
			headers={headersWithTags}
			headerContentTypes={["text", "numeric", "text"]}
			data={dataWithTags}
		/>


		<br/>
		<br/>
		<br />
		<br />
		<h3>Table with custom classes on data cells (ONLY render populations that are in the millions)</h3>


		<AUtable
			caption="Population of Australian states and territories, December 2015"
			headers={headersCustomClasses}
			headerContentTypes={["text", "numeric"]}
			data={dataCustomClasses}
		/>

		<br/>
		<br/>
		<br />
		<br />
		<h3>Responsive Table in a wrapper</h3>

		<AUTableWrapper>
			<AUtable
				caption="Population of Australian states and territories, December 2015"
				striped={true}
				headers={complexHeaders}
				headerContentTypes={["text", "numeric", "numeric", "numeric"]}
				data={complexData}
			/>
		</AUTableWrapper>

	</div>,

	document.getElementById('root'),
);
