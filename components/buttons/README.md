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
  children          {/* Anything inside */}
  as=""             {/* The kind of button, 'secondary','tertiary', optional */}
  block={ true }    {/* The block option to make the button fill the available width, optional */}
  type="submit"     {/* The type attribute, optional */}
  dark={ false }    {/* A dark variation of the component */}
  link              {/* If a link is set the button will render as a link */}
  linkComponent="a" {/* The component used for the link, optional */}
></AUbutton>
```
_(💡 additional props are spread onto the component)_

For more details have a look at the [usage example](https://github.com/govau/design-system-components/tree/master/components/buttons/tests/react/index.js).


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

The visual test: https://auds.service.gov.au/components/buttons/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v3.0.5 - Removed uikit references
* v3.0.4 - Update dependencies
* v3.0.3 - Removing web pack dev server, updating dependencies
* v3.0.2 - Fixed build scripts for Windows
* v3.0.1 - Replace node-sass with sass
* v3.0.0 - Add react router support
* v2.0.3 - Update dependencies
* v2.0.2 - Change homepage link
* v2.0.1 - Fix dependencies
* v2.0.0 - Change to focus colour and border/muted color mix
* v1.0.2 - Fixed issue with secondary button hover IE8 [312](https://github.com/govau/design-system-components/issues/312)
* v1.0.1 - Fixed specificity issue when combined with body [197](https://github.com/govau/design-system-components/issues/197)
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
Licensed under [MIT](https://raw.githubusercontent.com/govau/design-system-components/components/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
