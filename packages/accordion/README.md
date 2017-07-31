@gov.au/accordion
============

> Allow the user to toggle the visibility of an element


## Contents

* [Install](#install)
* [Usage](#usage)
* [Dependency graph](#dependency-graph)
* [Build](#build)
* [Tests](#tests)
* [Release History](#release-history)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Install


```shell
yarn add @gov.au/accordion
```

```shell
npm install @gov.au/accordion --save-dev
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Usage


* [API](#api)
* [React](#react)
* [jQuery](#jquery)


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------

### API


Accordion has 3 public functions:

- [`UIKIT.accordion.Open( elements, speed )`](#open)
- [`UIKIT.accordion.Close( elements, speed )`](#close)
- [`UIKIT.accordion.Toggle( elements, speed )`](#toggle)


#### Open

`UIKIT.accordion.Open( elements, speed )`

The parameters are:

`elements` - DOM node/s of accordion titles you want to open. They should have the `js-uikit-accordion` class and point `aria-controls` to the accordion body. 
`speed` - animation speed in milliseconds (optional, defaults to `250ms`)

Example:

```js
UIKIT.accordion.Open( document.getElementById('accordion-title'), 500 );
```


#### Close

`UIKIT.accordion.Close( elements, speed )`

The parameters are:

`elements` - DOM node/s of accordion titles you want to open. They should have the `js-uikit-accordion` class and point `aria-controls` to the accordion body. 
`speed` - animation speed in milliseconds (optional, defaults to `250ms`)

Example:

```js
UIKIT.accordion.Close( document.getElementById('accordion-title'), 500 );
```


#### Toggle

`UIKIT.accordion.Toggle( elements, speed, callbacks )`

The parameters are:

`elements` - DOM node/s of accordion titles you want to open. They should have the `js-uikit-accordion` class and point `aria-controls` to the accordion body. 
`speed` - animation speed in milliseconds (optional, defaults to `250ms`)
`callbacks` - An object of four optional callbacks: `{ onOpen, afterOpen, onClose, afterClose }`

Example:

```js
UIKIT.accordion.Toggle( document.getElementById('accordion-title'), 500,
	{
		onOpen: function() {
			console.log('This function will run when an accordion opens');
		},
		afterOpen: function() {
			console.log('This function will run after an accordion has opened');
		},
		onClose: function() {
			console.log('This function will run when an accordion closes');
		},
		afterClose: function() {
			console.log('This function will run after an accordion has closed');
		},
	}
);
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


### React

Usage:

```jsx
import Accordion from './accordion.js';

<Accordion header="First headline">
	Some content of the first accordion.
</Accordion>

<Accordion header="Second headline">
	Some content of the second accordion.
</Accordion>

<Accordion header="Third headline">
	Some content of the third accordion.
</Accordion>
```

All props:

```jsx
<Accordion
	header="Headline"        {/* The headline of the accordion */}
	open={ true }            {/* Open state, optional */}
	speed="250"              {/* Speed of the animation in ms, optional */}
	onOpen={ () => {} }      {/* A function executed when the accordion opens, optional */}
	afterOpen={ () => {} }   {/* A function executed after the accordion opened, optional */}
	onClose={ () => {} }     {/* A function executed when the accordion closes, optional */}
	afterClose={ () => {} }  {/* A function executed after the accordion opened, optional */}
>
	Some content of the third accordion.
</Accordion>
```

For more details have a look at the [usage example](https://github.com/govau/uikit/tree/master/packages/accordion/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


### jQuery

To initialize the [jQuery](https://jquery.com/) plugin make sure you have jQuery on the page and run the below code after the DOM was loaded:

```js
$(function() {
	$('.js-uikit-accordion-wrapper').uikitAccordion();
});
```

You can optionally add functions to each event like so:

```js
$('.js-uikit-accordion-wrapper').uikitAccordion({
	onOpen: function() {
		console.log('This function will run when an accordion opens');
	},
	afterOpen: function() {
		console.log('This function will run after an accordion has opened');
	},
	onClose: function() {
		console.log('This function will run when an accordion closes');
	},
	afterClose: function() {
		console.log('This function will run after an accordion has closed');
	},
});
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
accordion
├─ animate
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Build


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: http://uikit.apps.staging.digital.gov.au/packages/accordion/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v0.3.0 - Added pancake-react plugin, ES5 main file
* v0.2.0 - Added react and jQuery component
* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/uikit/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
