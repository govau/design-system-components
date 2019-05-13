@gov.au/table
============

> Used to display tabular data


## Contents

* [Install](#install)
* [Dependency graph](#dependency-graph)
* [Tests](#tests)
* [Release History](#release-history)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Install


```shell
yarn add @gov.au/table
```

```shell
npm install @gov.au/table
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
table
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://auds.service.gov.au/packages/table/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/design-system-components/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };

## Usage


* [React](#react)


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------

### React

Usage:

```jsx
<AUTable 
	caption="Population of Australian states and territories, December 2015"
	headers={[
						{title: "Location", width: '75'},
						{title: "Population", type: "numeric"},
						{title: "", render: ( data ) => (<button id="">Remove row</button>)}
					]}
	data = {[
					{location: "New South Wales", population: "7,670,700", remove: "remove"},
					{location: "Victoria",        population: "5,996,400"},
					{location: "Tasmania",        population: "514,400"}
				]}
/>


<table className="au-table">
	<AUtableHead>
		<AUtableRow>
			<AUtableHeader type="text" title="Location"/>
			<AUtableHeader type="numeric" title="Population"/>
			<AUtableHeader type="numeric" title="Change over previous year %"/>
		</AUtableRow>
	</AUtableHead>
	<AUtableBody>
		<AUtableRow>
			<AUtableCell data="New South Wales" type="text" />
			<AUtableCell data="7,670,700" type="numeric"/>
			<AUtableCell data="3.1%" type="numeric"/>
		</AUtableRow>
		<AUtableRow>
			<AUtableCell data="Victoria" type="text" />
			<AUtableCell data="5,996,400" type="numeric" className="bold-cell" />
			<AUtableCell data="2.5%" type="numeric"/>
		</AUtableRow>
	</AUtableBody>
</table>

```

All props:

```jsx
<AUTable
	caption="Population of Australian states and territories, December 2015"
	headers={[]}               {/* The table headers */}
	data = {[]}                {/* the table body data */}
	striped={true}             {/* Striped version of the table*/} />

//The below are the individual components that are contained inside a typical table.
// They should be wrappeed in a <table className="au-table"> element.

<AUtableBody 
className=""                 {/*An additional class, optional*/}
/>

<AUtableHead 
className=""                 {/*An additional class, optional*/}
/>

<AUtableHeader /
title="Population"           {/*The title of the column/header*/}
type="numeric"               {/*The type of the column data, 'numeric' for right align, 'text' for left aligned*/}
width="75"                   {/*Width of the header/column. Can be either 25, 33, 50 or 75*/}
className=""                 {/*An additional class, optional*/}
>

<AUtableCell 
data="7,950,500"             {/*The cell data*/}
type="numeric"               {/*The type of the column data, 'numeric' for right align, 'text' for left aligned*/}
className=""                 {/*An additional class, optional*/}
/>

<AUtableRow 
className=""                 {/*An additional class, optional*/}
/>

<AUtableCaption 
tableCaption="Dates and amounts"     {/*Title of the table*/}
className=""                         {/*An additional class, optional*/}
/>

// Table wrapper for responsive tables
<AUtableResponsiveWrapper /> 

/>
```
