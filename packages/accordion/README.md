@gov.au/accordion
============

> Allow the user to toggle the visibility of an element


## Contents

* [Install](#install)
* [Usage](#usage)
* [Dependency graph](#dependency-graph)
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

- [`AU.accordion.Open( elements, speed )`](#open)
- [`AU.accordion.Close( elements, speed )`](#close)
- [`AU.accordion.Toggle( elements, speed, callbacks )`](#toggle)


#### Open

`AU.accordion.Open( elements, speed )`

The parameters are:

`elements`
The DOM element (not the container you want to open) like a button or a link;
Usually DOM node/s of accordion titles you want to open. They need to have the `aria-controls` attribute that points to the accordion body.

`speed`
Animation speed in milliseconds (optional, defaults to `250ms`)

Example:

```js
AU.accordion.Open( document.getElementById('accordion-title'), 500 );
```


#### Close

`AU.accordion.Close( elements, speed )`

The parameters are:

`elements`
The DOM element (not the container you want to close) like a button or a link;
Usually DOM node/s of accordion titles you want to close. They need to have the `aria-controls` attribute that points to the accordion body.

`speed`
Animation speed in milliseconds (optional, defaults to `250ms`)

Example:

```js
AU.accordion.Close( document.getElementById('accordion-title'), 500 );
```


#### Toggle

`AU.accordion.Toggle( elements, speed, callbacks )`

The parameters are:

`elements`
The DOM element (not the container you want to toggle) like a button or a link;
Usually DOM node/s of accordion titles you want to toggle. They need to have the `aria-controls` attribute that points to the accordion body.

`speed`
Animation speed in milliseconds (optional, defaults to `250ms`)

`callbacks` - An object of four optional callbacks: `{ onOpen, afterOpen, onClose, afterClose }`

Example:

```js
AU.accordion.Toggle( document.getElementById('accordion-title'), 500,
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
import AUaccordion from './accordion.js';

<AUaccordion header="First headline">
  Some content of the first accordion.
</AUaccordion>

<AUaccordion header="Second headline">
  Some content of the second accordion.
</AUaccordion>

<AUaccordion header="Third headline">
  Some content of the third accordion.
</AUaccordion>
```

All props:

```jsx
<AUaccordion
  header="Headline"        {/* The headline of the accordion */}
  closed={ true }          {/* Closed state, optional */}
  speed={ 250 }            {/* Speed of the animation in ms, optional */}
  onOpen={ () => {} }      {/* A function executed when the accordion opens, optional */}
  afterOpen={ () => {} }   {/* A function executed after the accordion opened, optional */}
  onClose={ () => {} }     {/* A function executed when the accordion closes, optional */}
  afterClose={ () => {} }  {/* A function executed after the accordion opened, optional */}
  dark={ false }           {/* A dark variation of the component */}
>
  Some content for this accordion.
</AUaccordion>
```
_(💡 additional props are spread onto the component)_

For more details have a look at the [usage example](https://github.com/govau/design-system-components/tree/master/packages/accordion/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


### jQuery

To initialize the [jQuery](https://jquery.com/) plugin make sure you have jQuery on the page and run the below code after the DOM was loaded:

```js
$(function() {
  $('.js-au-accordion-wrapper').AUaccordion();
});
```

You can optionally add functions to each event like so:

```js
$('.js-au-accordion-wrapper').AUaccordion({
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


## Tests

The visual test: https://auds.service.gov.au/packages/accordion/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v7.0.7 - Removed unused `Fragment` React import
* v7.0.6 - Resolve autoprefixer warning
* v7.0.5 - Fix pancake build path
* v7.0.4 - Updated deprecated `text-decoration-skip` property to `text-decoration-skip-ink`
* v7.0.3 - Remove aria-selected from accordion button
* v7.0.2 - Removed uikit references
* v7.0.1 - Fix issue with parent component re-rendering causing accordion to open and close
* v7.0.0 - Changed accordion title element to use `<button>` instead of `<a>`
* v6.0.1 - Fix issues with state not firing
* v6.0.0 - Add accordion group in a unordered list, remove `role="tab"`
* v5.0.2 - Update dependencies
* v5.0.1 - Removing web pack dev server, updating dependencies
* v5.0.0 - Removing unecessary aria-hidden as css display toggles screen reader ability
* v4.0.0 - State change more specific, remove style set on html, componentDidUpdate, build scripts for Windows
* v3.0.5 - Replace node-sass with sass
* v3.0.4 - Change npm run watch browser-sync location
* v3.0.3 - au-body--dark now changes accordion title colour
* v3.0.2 - Update dependencies
* v3.0.1 - Updating documentation
* v3.0.0 - React accordion open by default
* v2.0.3 - Update homepage link
* v2.0.2 - Fix issue with scope inside AU.animate.Run
* v2.0.1 - Fix dependencies
* v2.0.0 - Change to focus colour and border/muted color mix
* v1.0.1 - IE8 spacing above triangle fixed [309](https://github.com/govau/design-system-components/issues/309)
* v1.0.0 - Moved to AU namespace, added new color themes and spacing
* v0.3.0 - Added pancake-react plugin, ES5 main file
* v0.2.0 - Added react and jQuery component
* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/design-system-components/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
