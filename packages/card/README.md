@gov.au/card
============

> A container for all types of content


## Contents

* [Install](#install)
* [Dependency graph](#dependency-graph)
* [Tests](#tests)
* [Release History](#release-history)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Install


```shell
yarn add @gov.au/card
```

```shell
npm install @gov.au/card
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
card
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://auds.service.gov.au/packages/card/tests/site/


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
	<AUcard className="au-body">
		<AUcardImage src="http://placehold.it/1200x500" />
			<AUcardInner>
				<span>Image caption or description</span>
			<AUcardFooter>
				<a href="#">Call to action</a>
			</AUcardFooter>
		</AUcardInner>
	</AUcard>

	//Entire card clickable and single anchor:
		<AUcard class="au-body">
			<AUcardImage src="http://placehold.it/1200x500" />
				<AUcardInner>
						<h3 className="au-card__title"><AUcardLink link="#" text="Some link" /></h3>
				</AUcardInner>
		</AUcard>



```

All props:

```jsx

```
