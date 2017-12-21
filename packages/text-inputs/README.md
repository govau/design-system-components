@gov.au/text-inputs
============

> Single and multi-line text inputs.


## Contents

* [Install](#install)
* [Dependency graph](#dependency-graph)
* [Build](#build)
* [Tests](#tests)
* [Release History](#release-history)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Install


```shell
yarn add @gov.au/text-inputs
```

```shell
npm install @gov.au/text-inputs --save-dev
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Usage


* [React](#react)


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


### React

Usage:

```jsx
import { TextInput, Label, Hint } from './text-inputs.js';

<Label htmlFor="textinputID">Hello</Label>
<TextInput id="textinputID" dark block disabled />
<Hint>A helpful hint</Hint>

<Label htmlFor="textinputID2">Hello</Label>
<TextInput id="textinputID2" dark block valid />

<Label htmlFor="textareaID">Hello</Label>
<TextInput as="textarea" defaultValue="abc" id="textareaID" invalid />
<Hint>A helpful hint</Hint>


```

All props:

```jsx
<TextInput
	as                     {/* The kind of input, can be either 'input' or 'textarea', default: 'input' */}
	disabled={ false }     {/* The disabled attribute */}
	dark={ false }         {/* A dark variation of the component */}
	block                  {/* Add the block variation class */}
	invalid                {/* Add the invalid variation class */}
	valid                  {/* Add the valid variation class */}
	defaultValue="value"   {/* The value attribute */}
	id="the_id"            {/* The id attribute */}
	attributeOptions       {/* Any other attribute options */}
/>

<Label
	children               {/* Anything inside */}
	attributeOptions       {/* Any other attribute options */}
/>

<Hint
	children               {/* Anything inside */}
	attributeOptions       {/* Any other attribute options */}
/>
```

For more details have a look at the [usage example](https://github.com/govau/uikit/tree/master/packages/control-input/tests/react/index.js).


**[⬆ back to top](#contents)**



----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
text-inputs
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Build


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: http://uikit.apps.staging.digital.gov.au/packages/text-inputs/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v1.0.0 - Moved to AU namespace, added new color themes and spacing
* v0.1.1 - Fixed print background in disabled inputs
* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/uikit/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
