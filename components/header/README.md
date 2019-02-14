@gov.au/header
============

> Headers provide a consistent start to pages.


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
yarn add @gov.au/header
```

```shell
npm install @gov.au/header --save-dev
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
import AUheader, { AUheaderBrand } from './header.js';

<AUheader>
	<AUheaderBrand
		link="#"
		brandImage="http://placehold.it/256x80"
		brandImageAlt="Digital Transformation Agency"
	/>
</AUheader>
```

All props:

```jsx
<AUheader
  alt={ false }       {/* An alternate variation of the component, optional */}
  dark={ false }      {/* A dark variation of the component, optional */}
  hero={ false }      {/* The hero option, optional, optional */}
/>

<AUheaderBrand
  title="Page title"      {/* The headline content, optional */}
  level="1"               {/* The headline tag level, h1-h6, optional */}
  subline="Subline"       {/* The subline content, optional */}
  brandImage="Page title" {/* The headline content, optional */}
  brandImageAlt="1"       {/* Brand image alt tag */}
  link="/"                {/* An optional link for the header brand, optional */}
  linkComponent="a"       {/* The component used for the link, optional */}
  children                {/* Anything inside */}
  attributeOptions        {/* Any other attribute options */}
></AUheaderBrand>
```
_(💡 additional props are spread onto the component)_

For more details have a look at the [usage example](https://github.com/govau/design-system-components/tree/master/components/header/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
header
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://auds.service.gov.au/components/header/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v4.1.7 - Removed uikit references
* v4.1.6 - Update dependencies
* v4.1.5 - Removing web pack dev server, updating dependencies
* v4.1.4 - Removed border from header brand image on ie8, ie9 and ie10
* v4.1.3 - AUheaderBrand without a link now defaults to div
* v4.1.2 - Fixed build scripts for Windows
* v4.1.1 - Replace node-sass with sass
* v4.1.0 - React router support
* v4.0.2 - Update dependencies
* v4.0.1 - Added missing documentation
* v4.0.0 - Added placeholder for Australian Government logo and optional grid layout
* v3.0.2 - Change homepage link
* v3.0.1 - Fix dependencies
* v3.0.0 - Change to focus colour and border/muted color mix
* v2.0.0 - Moved to AU namespace, added new color themes and spacing
* v1.2.0 - Added pancake-react plugin, ES5 main file, added children
* v1.1.0 - Added react component
* v1.0.0 - Removed the side spacing #147
* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/design-system-components/components/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
