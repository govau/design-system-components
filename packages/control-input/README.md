@gov.au/control-input
============

> Control inputs include radio buttons and checkboxes. They allow users to select one or more options.


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
yarn add @gov.au/control-input
```

```shell
npm install @gov.au/control-input --save-dev
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
import { Checkbox, Radio } from './control-input.js';

<Radio label="Yes" name="has_email" value="yes" />
<Radio label="No" name="has_email" value="no" />
<Radio label="Maybe" name="has_email" value="maybe" />

<Checkbox label="Has email?" name="has_email" />
```

All props:

```jsx
<Radio
	label="The label"      {/* The label of the radio button */}
	name="the_name"        {/* The name attribute */}
	value="value"          {/* The value attribute */}
	id="the_id"            {/* The id attribute */}
	disabled={ false }     {/* The disabled attribute */}
	checked={ false }      {/* The state of the radio button */}
	onChange={ () => {} }  {/* A function to be executed onChange */}
	dark={ false }         {/* A dark variation of the component */}
/>

<Checkbox
	label="The label"      {/* The label of the checkbox */}
	name="the_name"        {/* The name attribute */}
	value="value"          {/* The value attribute */}
	id="the_id"            {/* The id attribute */}
	disabled={ false }     {/* The disabled attribute */}
	checked={ false }      {/* The state of the checkbox */}
	onChange={ () => {} }  {/* A function to be executed onChange */}
	dark={ false }         {/* A dark variation of the component */}
/>
```

For more details have a look at the [usage example](https://github.com/govau/uikit/tree/master/packages/control-input/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
control-input
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Build


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: http://uikit.apps.staging.digital.gov.au/packages/control-input/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v0.3.0 - Added pancake-react plugin, ES5 main file
* v0.2.0 - Added react component
* v0.1.1 - Fixed webkit render bug
* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/uikit/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
