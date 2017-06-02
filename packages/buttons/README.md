@gov.au/buttons
============

> Buttons signal action. Use them to move the user through the service.


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
yarn add @gov.au/buttons
```

```shell
npm install @gov.au/buttons --save-dev
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
import Button from './buttons.js';

<Button text="Continue" />
```

All props:

```jsx
<Button
	text="Submitting"     {/* The text of the button */}
	as=""                 {/* The kind of button, 'secondary','tertiary', optional */}
	block={ true }        {/* The block option to make the button fill the available width, optional */}
	type="submit"         {/* The type attribute, optional */}
	onClick={ () => {} }  {/* A function to execute when the button is clicked, optional */}
/>
```

For more details have a look at the [usage example](https://github.com/govau/uikit/tree/master/packages/buttons/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
buttons
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Build


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: http://uikit.apps.staging.digital.gov.au/packages/buttons/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v0.4.0 - Added react component
* v0.3.0 - Fixed px height, added more robust CSS code
* v0.2.0 - Added block modifier
* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/uikit/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
