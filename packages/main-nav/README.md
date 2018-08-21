@gov.au/main-nav
============

> Horizontal list of links to key areas on the website. Usually located in the header.


## Contents

* [Install](#install)
* [Dependency graph](#dependency-graph)
* [Tests](#tests)
* [Release History](#release-history)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Install


```shell
yarn add @gov.au/main-nav
```

```shell
npm install @gov.au/main-nav --save-dev
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


Main navigation has 1 public function:

- [`AU.accordion.Toggle( element, speed, callbacks )`](#toggle)


#### Toggle

`AU.mainNav.Toggle( element, speed, callbacks )`

The parameters are:

`element`
The DOM element that triggers the main navigation to open, like a button or a link. They need to have the `aria-controls` attribute that points to the main navigation content element.

`speed`
Animation speed in milliseconds (optional, defaults to `250ms`)

`callbacks` - An object of four optional callbacks: `{ onOpen, afterOpen, onClose, afterClose }`

Example:

```js
AU.mainNav.Toggle( document.getElementById( 'main-nav-content' ), 500,
  {
    onOpen: function() {
      console.log('This function will run when an main nav opens');
    },
    afterOpen: function() {
      console.log('This function will run after an main nav has opened');
    },
    onClose: function() {
      console.log('This function will run when an main nav closes');
    },
    afterClose: function() {
      console.log('This function will run after an main nav has closed');
    },
  }
);
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


### React

Usage:

```jsx
import AUmainNav, { AUmainNavContent } from './main-nav.js';

<AUmainNav>
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<AUmainNavContent items={[
					{
						link: '#',
						text: 'About',
					},
					{
						link: '#',
						text: 'Get started',
					},
					{
						link: '#',
						text: 'Components',
						active: true
					},
					{
						link: '#',
						text: 'Templates',
					},
				]} />
			</div>
		</div>
	</div>
</AUmainNav>
```

All props:

```jsx
<AUmainNav
	dark={ false }           {/* A dark variation of the component */}
	alt={ false }            {/* An alternate variation of the component */}
>
</AUmainNav>

<AUmainNavContent 
	items={ [] }
	speed={ 250 }            {/* Speed of the animation in ms, optional */}
  onOpen={ () => {} }      {/* A function executed when the accordion opens, optional */}
  afterOpen={ () => {} }   {/* A function executed after the accordion opened, optional */}
  onClose={ () => {} }     {/* A function executed when the accordion closes, optional */}
	afterClose={ () => {} }  {/* A function executed after the accordion opened, optional */}
  linkComponent="a"        {/* The component used for the link, optional */}
>
</AUmainNavContent>
```
_(💡 additional props are spread onto the component)_

For more details have a look at the [usage example](https://github.com/govau/uikit/tree/master/packages/accordion/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


### jQuery

To initialize the [jQuery](https://jquery.com/) plugin make sure you have jQuery on the page and run the below code after the DOM was loaded:

```js
$(function() {
  $('.js-au-main-nav-wrapper').AUmainNav();
});
```

You can optionally add functions to each event like so:

```js
$('.js-au-main-nav-wrapper').AUmainNav({
  onOpen: function() {
    console.log('This function will run when an main nav opens');
  },
  afterOpen: function() {
    console.log('This function will run after an main nav has opened');
  },
  onClose: function() {
    console.log('This function will run when an main nav closes');
  },
  afterClose: function() {
    console.log('This function will run after an main nav has closed');
  },
});
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
main-nav
├─ core
├─ animate
└─ link-list
   ├─ core
   └─ body
      └─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://uikit.service.gov.au/packages/main-nav/tests/site/


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
