@gov.au/accordion
============

> Allow the user to toggle the visibility of an element


## Contents

* [Install](#install)
* [API](#api)
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


## API


Animate has 3 functions:

- [`UIKIT.accordion.Open( elements, speed )`](#open)
- [`UIKIT.accordion.Close( elements, speed )`](#close)
- [`UIKIT.accordion.Toggle( elements, speed )`](#toggle)


### Open

`UIKIT.accordion.Open( elements, speed )`

The parameters are:

`elements` - DOM node/s of accordion titles you want to open. They should have the `js-uikit-accordion` class and point `aria-controls` to the accordion body. 
`speed` - animation speed in milliseconds (optional, defaults to `250ms`)

Example:

```js
UIKIT.accordion.Open( document.getElementById('accordion-title'), 500 );
```


### Close

`UIKIT.accordion.Close( elements, speed )`

The parameters are:

`elements` - DOM node/s of accordion titles you want to open. They should have the `js-uikit-accordion` class and point `aria-controls` to the accordion body. 
`speed` - animation speed in milliseconds (optional, defaults to `250ms`)

Example:

```js
UIKIT.accordion.Close( document.getElementById('accordion-title'), 500 );
```


### Toggle

`UIKIT.accordion.Toggle( elements, speed )`

The parameters are:

`elements` - DOM node/s of accordion titles you want to open. They should have the `js-uikit-accordion` class and point `aria-controls` to the accordion body. 
`speed` - animation speed in milliseconds (optional, defaults to `250ms`)

Example:

```js
UIKIT.accordion.Toggle( document.getElementById('accordion-title'), 500 );
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
accordion
├─ core
└─ animate
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

* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/uikit/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
