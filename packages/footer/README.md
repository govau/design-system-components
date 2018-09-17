@gov.au/footer
============

> Footers help users who reach the bottom of a page without finding what they want.


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
yarn add @gov.au/footer
```

```shell
npm install @gov.au/footer --save-dev
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
import AUfooter, { AUfooterNav, AUfooterEnd } from './footer.js';

<AUfooter>
  <AUfooterNav>
    au-footer__navigation
  </AUfooterNav>
  <AUfooterEnd>
    au-footer__end
  </AUfooterEnd>
</AUfooter>
```

All props:

```jsx
<AUfooter
  alt={ false }     {/* An alternate variation of the component */}
  dark={ false }    {/* A dark variation of the component */}
  attributeOptions  {/* Any other attribute options */}
/>

<AUfooterNav
	ariaLabel={ 'footer navigation' } {/* Aria-label attribute on the <nav> element */}
/>
```
_(💡 additional props are spread onto the component)_

For more details have a look at the [usage example](https://github.com/govau/uikit/tree/master/packages/footer/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
footer
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://uikit.service.gov.au/packages/footer/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v2.1.8 - Remove `role="contentinfo"` attribute on `<footer>`
* v2.1.7 - Added an aria-label attribute to the nav element
* v2.1.6 - Update dependencies
* v2.1.5 - Removing web pack dev server, updating dependencies
* v2.1.4 - Fixed build scripts for Windows
* v2.1.3 - Replace node-sass with sass
* v2.1.2 - Change npm run watch browser-sync location
* v2.1.1 - Update dependencies
* v2.1.0 - Allow footer end to not be a `nav` element
* v2.0.2 - Change homepage link
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
