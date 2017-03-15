gov.au UI-Kit
=============

> The UI-Kit for the Australian Government.


## Contents

* [Modules](#modules)
* [Build](#build)
* [Tests](#tests)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Modules

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

- [core](http://uikit.apps.staging.digital.gov.au/packages/core/tests/site/)
```
.
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

_After the you filled out all the blanks and added your dependencies into your package.json make sure you run `lerna bootstrap` again._


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

Visual tests have been build into each module and can be seen in either the `README.md` files of each module or in the [listing above](#modules).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/uikit/master/LICENSE).


**[⬆ back to top](#contents)**

# };
