@gov.au/buttons
============

> Buttons signal action. Use them to move the user through the service.


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
import AUbutton from './buttons.js';

<AUbutton>Continue</AUbutton>
```

All props:

```jsx
<AUbutton
  href            {/* If an href is set the button will render as a link */}
  children        {/* Anything inside */}
  as=""           {/* The kind of button, 'secondary','tertiary', optional */}
  block={ true }  {/* The block option to make the button fill the available width, optional */}
  type="submit"   {/* The type attribute, optional */}
  dark={ false }  {/* A dark variation of the component */}
></AUbutton>
```
_(💡 additional props are spread onto the component)_

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


## Tests

The visual test: https://uikit.service.gov.au/packages/buttons/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v1.0.0 - Moved to AU namespace, added new color themes and spacing
* v0.5.0 - Added pancake-react plugin, ES5 main file
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
