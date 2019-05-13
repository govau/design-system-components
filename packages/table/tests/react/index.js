import React from 'react';
import ReactDOM from 'react-dom';
import AUtags from '../../../tags/src/js/react.js';


import AUtable, {AUtableResponsiveWrapper, AUtableCaption, AUtableCell, AUtableHead, AUtableHeader, AUtableBody, AUtableRow} from './table.js';

const renderVicTags = () => (<AUtags tags={[{link: '#', text: "Melbourne"}, {link: '#', text: "Rialto Tower"}]} />)
const renderNSWTags = () => (<AUtags tags={[{link: '#', text: "Sydney"}, {link: '#', text: "Opera House"}]} />)


const simpleData = [
	{population: "7,670,700",     location: "New South Wales"},
	{location: "Victoria",        population: "5,996,400"},
	{location: "Tasmania",        population: "514,400"}
];

const simpleHeaders = [
	{title: "Location",   key: "location"},
	{title: "Population", key: "population", type: 'numeric'}
];
const simpleHeadersWidths = [{title: "Location", width: "50", key: "location" }, {title: "Population", width: "50", type: 'numeric', key: "population"}];


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
	{title: "Location",                     key: "location"},
	{title: "Population",                   key: "population",    type: 'numeric',},
	{title: "Change over previous year %",  key: "changeYear",    type: 'numeric',},
	{title: "Change over previous decade %", key: "changeDecade", type: 'numeric',},
];

//data for table with a remove button
const dataRemoveButton = [
	{location: "New South Wales", population: "7,670,700"},
	{location: "Victoria",        population: "5,996,400"},
	{location: "Tasmania",        population: "514,400"}
];

const headersRemoveButton = [
	{title: "Location",    key: "location" },
	{title: "Population",  key: "population", type: 'numeric',},
	{title: "", render: (text) => (<a href="javascript:;">Remove</a>), type: 'numeric'}
];

//data for table with a rags
const dataWithTags = [
	{
		location: "New South Wales",
		population: "7,670,700",
		tags: [{link: '#', text: "Sydney"}, {link: '#', text: "Opera House"}]
	},
	{
		location: "Victoria",
		tags: [{link: '#', text: "Melbourne"}, {link: '#', text: "Rialto Tower"}],
		population: "5,996,400",
	},
	{
		location: "Tasmania",
		tags: [{link: '#', text: "Hobart"}, {link: '#', text: "Cradle Mountain"}],
		population: "514,400",
	}
];

const headersWithTags = [
	{title: "Location",   width: '50', key: "location"},
	{title: "Population", width: '25', key: "population", type: 'numeric'},
	{title: "Tags",       width: '25', render: ( tags ) => (<AUtags tags={tags}/>), key: 'tags'}
];

//data for table with a custom classes and change order
const dataCustomClasses = [
	{population: "7,670,700",     location: "New South Wales"},
	{population: "5,996,400",     location: "Victoria",        },
	{location: "Tasmania",        population: "514,400"}
];

const headersCustomClasses = [
	{title: "Location",   key: "location"},
	{title: "Population", key: "population", type: 'numeric', render: ( data ) => (
		<span className={`${data.length > "8" ? 'bold-cell': ''}`}>{ data }</span>
	)},
];

const dataUsingRecord = [
	{name: "Bob",     age: "50"},
	{name: "Katrina", age: "45"}
];

const headerUsingRecord = [
	{title: "Name", key: "name"},
	{title: "Age",  key: "age"},
	{title: "Actions", render: ( data, record ) => (
		<span><a href="#">Remove {record.name}</a> | <a href="#"> Update {record.name}</a></span>
		)}
];


ReactDOM.render(
	<div>
		<h3>Simple Table</h3>

		<AUtable
			caption="Population of Australian states and territories, December 2015"
			headers={simpleHeaders}
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
			data={dataCustomClasses}
		/>

		<br/>
		<br/>
		<br />
		<br />
		<h3>Responsive Table in a wrapper</h3>

		<AUtableResponsiveWrapper>
			<AUtable
				caption="Population of Australian states and territories, December 2015"
				striped={true}
				headers={complexHeaders}
				data={complexData}
			/>
		</AUtableResponsiveWrapper>

		<br/>
		<br/>
		<br />
		<br />
		<h3>Table using individual components</h3>

	<table className="au-table">
		<AUtableHead>
			<AUtableRow>
				<AUtableHeader type="text" title="Location"/>
				<AUtableHeader type="numeric" title="Population"/>
				<AUtableHeader type="numeric" title="Change over previous year %"/>
				<AUtableHeader title="tags" />
			</AUtableRow>
		</AUtableHead>
		<AUtableBody>
			<AUtableRow>
				<AUtableCell data="New South Wales" type="text" />
				<AUtableCell data="7,670,700" type="numeric"/>
				<AUtableCell data="3.1%" type="numeric"/>
				<AUtableCell render={renderNSWTags()} />
			</AUtableRow>
			<AUtableRow>
				<AUtableCell data="Victoria" type="text" />
				<AUtableCell data="5,996,400" type="numeric" className="bold-cell" />
				<AUtableCell data="2.5%" type="numeric"/>
				<AUtableCell render={renderVicTags()} />
			</AUtableRow>
		</AUtableBody>
	</table>

	<br/>
	<br/>
	<br />
	<br />
	<h3>Table using data from the row</h3>
	<AUtable
		headers={headerUsingRecord}
		data={dataUsingRecord}
	/>

	</div>
	,

	document.getElementById('root'),
);
