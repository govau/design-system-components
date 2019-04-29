@gov.au/text-inputs
============

> Single and multi-line text inputs.


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
yarn add @gov.au/text-inputs
```

```shell
npm install @gov.au/text-inputs 
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
import AUtextInput from './text-inputs.js';

<label htmlFor="name" >Your name?</label>
<AUtextInput id="name" block />
```

All props:

```jsx
<TextInput
  as              {/* The kind of input, can be either 'input' or 'textarea', default: 'input' */}
  dark={ false }  {/* A dark variation of the component */}
  block           {/* Add the block variation class */}
  status          {/* Mark this field as either 'valid' or 'invalid' */}
  width           {/* Width of the text input. Can be either 'xs', 'sm', 'md', 'lg', 'xl'. */}
/>
```
_(💡 additional props are spread onto the component)_

For more details have a look at the [usage example](https://github.com/govau/design-system-components/tree/master/packages/control-input/tests/react/index.js).


**[⬆ back to top](#contents)**



----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
text-inputs
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://auds.service.gov.au/packages/text-inputs/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v2.1.1 - Remove --save-dev flag from readme instructions
* v2.1.0 - Add text inputs of different widths
* v2.0.11 - Removed unused `Fragment` React import
* v2.0.10 - Removed uikit references
* v2.0.9 - Update dependencies
* v2.0.8 - Removing web pack dev server, updating dependencies
* v2.0.7 - Fixed build scripts for Windows
* v2.0.6 - Replace node-sass with sass
* v2.0.5 - Change npm run watch browser-sync location
* v2.0.4 - Update dependencies
* v2.0.3 - Change homepage links
* v2.0.2 - Adding focus offset back to text inputs
* v2.0.1 - Fix dependencies
* v2.0.0 - Change to focus colour and border/muted color mix
* v1.0.0 - Moved to AU namespace, added new color themes and spacing
* v0.1.1 - Fixed print background in disabled inputs
* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/design-system-components/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
