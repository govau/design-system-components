@gov.au/control-input
============

> Control inputs include radio buttons and checkboxes. They allow users to select one or more options.


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
import { AUcheckbox, AUradio } from './control-input.js';

<AUradio label="Yes" name="has_email" value="yes" />
<AUradio label="No" name="has_email" value="no" />
<AUradio label="Maybe" name="has_email" value="maybe" />

<AUcheckbox label="Has email?" name="has_email" />
```

All props:

```jsx
<AUradio
  label="The label"  {/* The label of the radio button */}
  alt={ false }      {/* An alternate variation of the component */}
  dark={ false }     {/* A dark variation of the component */}
  attributeOptions   {/* Any other attribute options */}
/>

<AUcheckbox
  label="The label"  {/* The label of the checkbox */}
  alt={ false }      {/* An alternate variation of the component */}
  dark={ false }     {/* A dark variation of the component */}
/>
```
_(💡 additional props are spread onto the component)_

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


## Tests

The visual test: https://uikit.apps.b.cld.gov.au/packages/control-input/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v1.0.0 - Moved to AU namespace, added new color themes and spacing
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
