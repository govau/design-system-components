GOV.AU UI-Kit
=============

GOV.AU UI-Kit is a CSS and JS framework for Australian Government websites.

## Contents

* [Modules & visual tests](#modules)
* [Build](#build)
* [License](#license)

----------------------------------------------------------------------------------------------------------------------------------------------------------------

## Modules & visual tests

- [body](http://uikit.apps.staging.digital.gov.au/packages/body/tests/site/)
- [breadcrumbs](http://uikit.apps.staging.digital.gov.au/packages/breadcrumbs/tests/site/)
- [buttons](http://uikit.apps.staging.digital.gov.au/packages/buttons/tests/site/)
- [callout](http://uikit.apps.staging.digital.gov.au/packages/callout/tests/site/)
- [control-input](http://uikit.apps.staging.digital.gov.au/packages/control-input/tests/site/)
- [core](http://uikit.apps.staging.digital.gov.au/packages/core/tests/site/)
- [cta-link](http://uikit.apps.staging.digital.gov.au/packages/cta-link/tests/site/)
- [direction-links](http://uikit.apps.staging.digital.gov.au/packages/direction-links/tests/site/)
- [footer](http://uikit.apps.staging.digital.gov.au/packages/footer/tests/site/)
- [grid-12](http://uikit.apps.staging.digital.gov.au/packages/grid-12/tests/site/)
- [header](http://uikit.apps.staging.digital.gov.au/packages/header/tests/site/)
- [headings](http://uikit.apps.staging.digital.gov.au/packages/headings/tests/site/)
- [inpage-nav](http://uikit.apps.staging.digital.gov.au/packages/inpage-nav/tests/site/)
- [keyword-list](http://uikit.apps.staging.digital.gov.au/packages/keyword-list/tests/site/)
- [link-list](http://uikit.apps.staging.digital.gov.au/packages/link-list/tests/site/)
- [page-alerts](http://uikit.apps.staging.digital.gov.au/packages/page-alerts/tests/site/)
- [responsive-media](http://uikit.apps.staging.digital.gov.au/packages/responsive-media/tests/site/)
- [skip-link](http://uikit.apps.staging.digital.gov.au/packages/skip-link/tests/site/)
- [tags](http://uikit.apps.staging.digital.gov.au/packages/tags/tests/site/)
- [text-inputs](http://uikit.apps.staging.digital.gov.au/packages/text-inputs/tests/site/)

**[⬆ back to top](#content)**

----------------------------------------------------------------------------------------------------------------------------------------------------------------

## Build

Clone the UI-Kit project:

```shell
git clone https://github.com/govau/uikit.git
```

If you haven't already,
[install Yarn](https://yarnpkg.com/en/docs/instal).

Install [lerna](https://github.com/lerna/lerna) globally.

Run lerna from your UI-KIt clone:

```shell
cd uikit
yarn
lerna init
lerna bootstrap
```

### Add a module

Run the scaffolding helper:

```shell
npm run scaffolding
```

Respond to the prompts to add dependencies to the package.json file.

Run `lerna bootstrap` again.

**[⬆ back to top](#content)**

----------------------------------------------------------------------------------------------------------------------------------------------------------------

## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT license](https://raw.githubusercontent.com/govau/uikit/master/LICENSE).

**[⬆ back to top](#content)**

# };
