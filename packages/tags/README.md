@gov.au/tags
============

> Use tags to apply a taxonomy and link to similar content.


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
yarn add @gov.au/tags
```

```shell
npm install @gov.au/tags --save-dev
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
import AUtags from './tags.js';

<AUtags tags={[
  {
    link: 'link/to/tag1',
    text: 'tag1',
  },
  {
    link: 'link/to/tag2',
    text: 'tag2',
  },
  {
    link: 'link/to/tag3',
    text: 'tag3',
    li: {
      className: 'li-wrapping-class',
    },
  },
]} />
```

All props:

```jsx
<AUtags
  dark={ false }           {/* A dark variation of the component */}
  linkComponent="a"       {/* The component used for the link, optional */}
  tags={[
    {
      link: 'url/to/tag',  {/* The href link of this tag, optional */}
      linkComponent: 'a',  {/* The component used for the link, optional */}
      text: 'tagname',     {/* The text of the tag */}
      li: {},              {/* An object that will be spread onto the <li> tag, optional */}
    },
  ]},
/>
```
_(💡 additional props are spread onto the component)_

For more details have a look at the [usage example](https://github.com/govau/uikit/tree/master/packages/tags/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
tags
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://uikit.service.gov.au/packages/tags/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v3.1.3 - Removing web pack dev server, updating dependencies
* v3.1.2 - Fixed build scripts for Windows
* v3.1.1 - Replace node-sass with sass
* v3.1.0 - React router support
* v3.0.0 - Remove support for Description List <DL> for accessibility, Update dependencies
* v2.0.2 - Change homepage links
* v2.0.1 - Fix dependencies
* v2.0.0 - Change to focus colour and border/muted color mix
* v1.0.0 - Moved to AU namespace, added new color themes and spacing
* v0.3.0 - Added pancake-react plugin, ES5 main file
* v0.2.0 - Added react component
* v0.1.1 - Fixed a11y contrast issue
* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/uikit/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
