@gov.au/progress-indicator
============

> Indicator of progress through a multitude of pages mostly used for forms.


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
yarn add @gov.au/progress-indicator
```

```shell
npm install @gov.au/progress-indicator --save-dev
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
import AUprogressIndicator from './progress-indicator.js';

<AUprogressIndicator items={[
  {
    link: 'forms/intro/',
    text: 'Introduction',
    status: 'done',
  },
  {
    link: 'forms/contacts/',
    text: 'Business Contacts',
    status: 'doing',
    li: {
      className: 'li-wrapping-class',
    },
  },
  {
    link: 'forms/casestudies/',
    text: 'Case Studies',
    status: 'todo',
  },
]} />
```

All props:

```jsx
<AUprogressIndicator
  dark={ false }             {/* A dark variation of the component */}
  items={[                   {/* All steps in a neat array */}
    {
      link: 'forms/intro/',  {/* The link to this step, optional */}
      text: 'Introduction',  {/* The name of this step */}
      status: 'done',        {/* The status of this step, can be: 'done', 'doing', 'todo' */}
      li: {},                {/* An object that will be spread onto the <li> tag, optional */}
      onClick={ () => {} }   {/* A function to execute when the link is clicked, optional */}
    },
  ]},
/>
```
_(💡 additional props are spread onto the component)_

For more details have a look at the [usage example](https://github.com/govau/uikit/tree/master/packages/progress-indicator/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
progress-indicator
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://uikit.service.gov.au/packages/progress-indicator/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v3.0.0 - Change to focus colour and border/muted color mix
* v2.0.0 - Moved to AU namespace, added new color themes and spacing
* v1.0.0 - Fixing BEM issues with class names
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
