@gov.au/skip-link
============

> Provide skip links to navigation and content.


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
yarn add @gov.au/skip-link
```

```shell
npm install @gov.au/skip-link --save-dev
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
import AUskipLink from './skip-link.js';

<AUskipLink links={[
  {
    link: '#nav',
    text: 'Skip to navigation',
  },
  {
    link: '#content',
    text: 'Skip to content',
  },
]} />
```

All props:

```jsx
<AUskipLink
  links={[                         {/* All links inside a neat array */}
    {
      link: '#nav',                {/* The href link of this link */}
      text: 'Skip to navigation',  {/* The text of the link */}
      onClick={ () => {} }         {/* A function to execute when the link is clicked, optional */},
    },
  ]},
/>
```
_(💡 additional props are spread onto the component)_

For more details have a look at the [usage example](https://github.com/govau/uikit/tree/master/packages/skip-link/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
skip-link
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://uikit.service.gov.au/packages/skip-link/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v2.0.6 - Replace node-sass with sass
* v2.0.5 - Change npm run watch browser-sync location
* v2.0.4 - Update dependencies
* v2.0.3 - Change homepage links
* v2.0.2 - Fix hover inside body
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
Licensed under [MIT](https://raw.githubusercontent.com/govau/uikit/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
