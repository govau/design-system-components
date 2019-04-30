@gov.au/select
============

> The form select element for multiple options


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
yarn add @gov.au/select
```

```shell
npm install @gov.au/select 
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
import AUselect from './select.js';

<AUselect id="exampleSelect" options={[
  {
    value: '',
    text: 'Please select',
  },
  {
    value: '1',
    text: 'Option 1',
  },
  {
    value: '2',
    text: 'Option 2',
  },
]} />
```

All props:

```jsx
<AUselect
  dark={ false }         {/* A dark variation of the component */}
  block={ true }         {/* The block option to make the select fill the available width, optional */}
  options={[             {/* All options in a neat array */}
    {
      value: '1',        {/* The value attribute of the option */}
      text: 'Option 1',  {/* The text of the option */}
    },
  ]},
/>
```
_(💡 additional props are spread onto the component)_

For more details have a look at the [usage example](https://github.com/govau/design-system-components/tree/master/packages/select/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
select
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://auds.service.gov.au/packages/select/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v2.0.11 - Remove --save-dev flag from readme instructions
* v2.0.10 - Removed unused `Fragment` React import
* v2.0.9 - Removed uikit references
* v2.0.8 - Update dependencies
* v2.0.7 - Removing web pack dev server, updating dependencies
* v2.0.6 - Fixed build scripts for Windows
* v2.0.5 - Replace node-sass with sass
* v2.0.4 - Change npm run watch browser-sync location
* v2.0.3 - Update dependencies
* v2.0.2 - Change homepage links
* v2.0.1 - Fix dependencies
* v2.0.0 - Change to focus colour and border/muted color mix
* v1.0.0 - Moved to AU namespace, added new color themes and spacing
* v0.3.0 - Added pancake-react plugin, ES5 main file
* v0.2.0 - Added react component
* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/design-system-components/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
