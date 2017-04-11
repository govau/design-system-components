gov.au UI-Kit
=============

> The UI-Kit for the Australian Government.


## Contents

* [How to use](#how-to-use)
* [Modules](#modules)
* [Build](#build)
* [Tests](#tests)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## How to use

The gov.au UI-Kit is distributed through the [npm](https://www.npmjs.com) ecosystem and can only be installed through the `npm` command.
Npm requires [node.js](https://nodejs.org/en/) and the UI-Kit needs a node.js 5 or higher.

To install a module make sure you have a `package.json` file in the root of your project folders. (You can generate one by running `npm init`).
Inside your working folder install any module and [pancake](https://github.com/govau/pancake/) will make sure you have all assets ready to use.

Run `npm install @gov.au/body` to install the body module. To install several modules just chain them like:

```shell
npm install @gov.au/body @gov.au/header @gov.au/footer @gov.au/buttons
```

❗️Due to pancake installing plugins very slowly make sure you include the sass plugin into your install command. That will speed up things considerably.

```
npm install @gov.au/pancake-sass @gov.au/body @gov.au/header @gov.au/footer @gov.au/buttons
```



**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Modules

- [core](http://uikit.apps.staging.digital.gov.au/packages/core/tests/site/)
```
.
```

- [body](http://uikit.apps.staging.digital.gov.au/packages/body/tests/site/)
```
└─ core
```

- [breadcrumbs](http://uikit.apps.staging.digital.gov.au/packages/breadcrumbs/tests/site/)
```
├─ core
└─ link-list
   ├─ core
   └─ body
      └─ core
```

- [buttons](http://uikit.apps.staging.digital.gov.au/packages/buttons/tests/site/)
```
└─ core
```

- [callout](http://uikit.apps.staging.digital.gov.au/packages/callout/tests/site/)
```
└─ core
```

- [control-input](http://uikit.apps.staging.digital.gov.au/packages/control-input/tests/site/)
```
└─ core
```

- [cta-link](http://uikit.apps.staging.digital.gov.au/packages/cta-link/tests/site/)
```
└─ core
```

- [direction-links](http://uikit.apps.staging.digital.gov.au/packages/direction-links/tests/site/)
```
├─ core
└─ body
   └─ core
```

- [footer](http://uikit.apps.staging.digital.gov.au/packages/footer/tests/site/)
```
└─ core
```

- [grid-12](http://uikit.apps.staging.digital.gov.au/packages/grid-12/tests/site/)
```
└─ core
```

- [header](http://uikit.apps.staging.digital.gov.au/packages/header/tests/site/)
```
└─ core
```

- [headings](http://uikit.apps.staging.digital.gov.au/packages/headings/tests/site/)
```
└─ core
```

- [inpage-nav](http://uikit.apps.staging.digital.gov.au/packages/inpage-nav/tests/site/)
```
├─ core
└─ link-list
   ├─ core
   └─ body
      └─ core
```

- [keyword-list](http://uikit.apps.staging.digital.gov.au/packages/keyword-list/tests/site/)
```
├─ core
└─ link-list
   ├─ core
   └─ body
      └─ core
```

- [link-list](http://uikit.apps.staging.digital.gov.au/packages/link-list/tests/site/)
```
├─ core
└─ body
   └─ core
```

- [page-alerts](http://uikit.apps.staging.digital.gov.au/packages/page-alerts/tests/site/)
```
└─ core
```

- [progress-indicator](http://uikit.apps.staging.digital.gov.au/packages/progress-indicator/tests/site/)
```
└─ core
```

- [responsive-media](http://uikit.apps.staging.digital.gov.au/packages/responsive-media/tests/site/)
```
└─ core
```

- [skip-link](http://uikit.apps.staging.digital.gov.au/packages/skip-link/tests/site/)
```
└─ core
```

- [tags](http://uikit.apps.staging.digital.gov.au/packages/tags/tests/site/)
```
└─ core
```

- [text-inputs](http://uikit.apps.staging.digital.gov.au/packages/text-inputs/tests/site/)
```
└─ core
```



**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Build

To build the UI-Kit you have to install [lerna](https://github.com/lerna/lerna) globally and run.

```shell
yarn
lerna init
lerna bootstrap
```

To add a new module run the scaffolding helper:

```shell
npm run scaffolding
```

_After you have filled out all the blanks and added your dependencies into your package.json make sure you run `lerna bootstrap` again._


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

Visual tests have been built into each module and can be seen in either the `README.md` files of each module or in the [listing above](#modules).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/uikit/master/LICENSE).


**[⬆ back to top](#contents)**

# };
