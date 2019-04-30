@gov.au/animate
============

> A JavaScript function to open, close and toggle the display of page elements.


## Contents

* [Install](#install)
* [API](#api)
* [Dependency graph](#dependency-graph)
* [Tests](#tests)
* [Release History](#release-history)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Install


```shell
yarn add @gov.au/animate
```

```shell
npm install @gov.au/animate --save-dev
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## API


Animate has 3 public functions:

- [`AU.animate.Run( options )`](#run)
- [`AU.animate.Stop( options )`](#stop)
- [`AU.animate.Toggle( options )`](#toggle)


### Run

`AU.animate.Run( options )`

The options settings are:

`element` - DOM node/s you want to animate  
`property` - CSS property you want to animate (optional, defaults to `height`)  
`endSize` - 'auto' or pixel size of the property after the animation has finished (optional)  
`speed` - animation speed in milliseconds (optional, defaults to `250ms`)  
`callback` - callback function to run when the animation completes (optional)

Example:

```js
AU.animate.Run(
  element: document.getElementById('elementId'),
  property: 'height',
  endSize: 'auto',
  speed: 1000,
  callback: myFunction,
)
```


### Stop

`AU.animate.Stop( options )`

The options settings are:

`element` - DOM node you want to stop animating (this can only be a single element)

Example:

```js
AU.animate.Stop(
  element: document.getElementById('elementId'),
)
```


### Toggle

`AU.animate.Toggle( options )`

The options settings are:

`element` - DOM node/s you want to animate  
`property` - CSS property you want to animate (optional, defaults to `height`)  
`openSize` - pixel size of the property when the element is open (optional, defaults to `auto`)  
`closeSize` - pixel size of the property when the element is closed (optional, defaults to `0`)  
`speed` - animation speed in milliseconds (optional, defaults to `250ms`)  
`prefunction` - function to be executed before any animation starts, passes {object} element, {string} state (optional)
`postfunction` - function to be executed after any animation ends, passes {object} element, {string} state (optional)
`callback` - function to be executed after the animation ends, passes {object} element, {string} state (optional)

Example:

```js
AU.animate.Toggle(
  element: document.getElementById('elementId'),
  property: 'height',
  closeSize: 0,
  openSize: 'auto',
  speed: 1000,
  prefunction: function( element, state ) { myPreFunction() },
  postfunction: function( element, state ) { myPreFunction() },
  callback: function( element, state ) { myCallbackFunction() },
)
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------



## Dependency graph

```shell
animate
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://auds.service.gov.au/packages/animate/tests/site/

Run `jest` for the unit tests


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v1.0.13 - Remove --save-dev flag from readme instructions
* v1.0.12 - Removed uikit references
* v1.0.11 - Update dependencies
* v1.0.10 - Update dependencies
* v1.0.9  - Update browser-sync dependency
* v1.0.8  - Update dependencies
* v1.0.7  - Fixing bug where openSize of 0 gets turned into auto
* v1.0.6  - Removing web pack dev server, updating dependencies
* v1.0.5  - Fixed build scripts for Windows
* v1.0.4  - Change npm run watch browser-sync location
* v1.0.3  - Update dependencies
* v1.0.2  - Fix typo in homepage link
* v1.0.1  - Changing homepage link
* v1.0.0  - Moved to AU namespace, fixed export
* v0.1.5  - Fixed pancake config
* v0.1.4  - Pinned pancake plugins
* v0.1.3  - Exposed GetCSSPropertyBecauseIE publicly, added prefunction, postfunction
* v0.1.2  - Removed core as dependency
* v0.1.1  - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/design-system-components/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
