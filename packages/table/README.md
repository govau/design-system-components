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
						{title: "Location"},
						{title: "Population"}
					]}
	headerContentTypes={["text", "numeric"]}
	data = {[
					{location: "New South Wales", population: "7,670,700"},
					{location: "Victoria",        population: "5,996,400"},
					{location: "Tasmania",        population: "514,400"}
				]}
/>
```

All props:

```jsx
<AUTable
	caption="Population of Australian states and territories, December 2015"
	headers={[]}               {/* A dark variation of the component */}
	headerContentTypes={[]}    {/* A dark variation of the component */}
	data = {[]}                {/* A dark variation of the component */}
	striped =                  {/* Striped version of the table*/}
```
