GOV.AU UI-Kit
=============

> The UI-Kit for the Australian Government.


## Contents

* [How to use](#how-to-use)
* [Checklist and browser support](#checklist-and-browser-support)
* [Modules](#modules)
* [Contribute](#contribute)
* [Tests](#tests)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## How to use

The GOV.AU UI-Kit is distributed through the [npm](https://www.npmjs.com) ecosystem and can only be installed through the `yarn` or `npm` command.
Npm requires [node.js](https://nodejs.org/en/) and the UI-Kit needs a node.js 5 or higher.

To install a module make sure you have a `package.json` file in the root of your project folders. (You can generate one by running `yarn init` or `npm init`.)
Inside your working folder install any module and [pancake](https://github.com/govau/pancake/) will make sure you have all assets ready to use.

Run `yarn add @gov.au/body` or `npm install @gov.au/body` to install the body module. To install several modules just chain them like:

```shell
yarn add @gov.au/body @gov.au/header @gov.au/footer @gov.au/buttons
```

or

```shell
npm install @gov.au/body @gov.au/header @gov.au/footer @gov.au/buttons
```

💡 You can make the very first install even faster by including the pancake plugins you need:

```
yarn add @gov.au/pancake-sass @gov.au/body @gov.au/header @gov.au/footer @gov.au/buttons
```

An even better experience is using [Syrup](https://github.com/govau/pancake/tree/master/packages/pancake-syrup). Install it globally via
`yarn global add @gov.au/syrup`. More info coming soon.


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Checklist and browser support

We use the below checklist to ensure new modules or updates to existing modules have a certain level of quality:

### Checklist

#### General checks
- [x] Semantic HTML and non semantic test?
- [x] No js fallback?
- [x] SVG fallback, functional without SVG?
- [x] IE9, IE10, IE11 legacy test
- [x] IE8 functional test

#### A11y checks
- [x] A11y color contrast
- [x] Keyboard accessible?
- [x] A11y expert review

#### CSS / Sass
- [x] Never nest anything that is not either an overwrite or a child element.
- [x] `font-family` and text `color` on elements that don’t require body
- [x] Using `uikit-space()` for spacing everywhere but in font-sizes; no magic numbers
- [x] No hardcoded colors, use `$uikit-colour-` vars.
- [x] Sass focus mixin `uikit-outline()`
- [x] Print style sheets

#### Js
- [x] `var UIKIT = UIKIT || {};` in top?
- [x] Each module has it's own name-space prefixed with `UIKIT` e.g.: `UIKIT.modulename.function1`, `UIKIT.modulename.function2`
- [x] Keep public API small, use private functions where you can
- [x] Export out private function for tests only `if( typeof module !== 'undefined' )`
- [x] Export entire module in the end: `if( typeof module !== 'undefined' ) { module.exports = UIKIT; }` so react can use it.
- [x] Provide sane defaults for parameters where you can
- [x] Add [jest](https://facebook.github.io/jest/) unit tests where you can
- [x] Document public API in the readme.

#### package.json
- [x] `dependencies` - `peerDependencies` check
- [x] Delete/enable js object and settings for pancake plugins


### Browser support

All modules have to work on the below browsers:

- `>= IE8`
- All modern browsers 2 version back; one version up


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Modules

<details>
	<summary>@gov.au/core</summary>
	<br><code>yarn add @gov.au/core</code> or <code>npm install @gov.au/core</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/core/tests/site/">visual test file for core</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/core/README.md">readme file for core</a><br><br>
	<i>No dependencies</i>

----------
</details>

<details>
	<summary>@gov.au/accordion</summary>
	<br><code>yarn add @gov.au/accordion</code> or <code>npm install @gov.au/accordion</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/accordion/tests/site/">visual test file for accordion</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/accordion/README.md">readme file for accordion</a><br><br>
	Dependencies:
	<br>

```shell
├─ core
└─ animate
```
----------
</details>

<details>
	<summary>@gov.au/animate</summary>
	<br><code>yarn add @gov.au/animate</code> or <code>npm install @gov.au/animate</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/animate/tests/site/">visual test file for animate</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/animate/README.md">readme file for animate</a><br><br>
	<i>No dependencies</i>

----------
</details>

<details>
	<summary>@gov.au/body</summary>
	<br><code>yarn add @gov.au/body</code> or <code>npm install @gov.au/body</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/body/tests/site/">visual test file for body</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/body/README.md">readme file for body</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/breadcrumbs</summary>
	<br><code>yarn add @gov.au/breadcrumbs</code> or <code>npm install @gov.au/breadcrumbs</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/breadcrumbs/tests/site/">visual test file for breadcrumbs</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/breadcrumbs/README.md">readme file for breadcrumbs</a><br><br>
	Dependencies:
	<br>

```shell
├─ core
└─ link-list
   ├─ core
   └─ body
      └─ core
```
----------
</details>

<details>
	<summary>@gov.au/buttons</summary>
	<br><code>yarn add @gov.au/buttons</code> or <code>npm install @gov.au/buttons</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/buttons/tests/site/">visual test file for buttons</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/buttons/README.md">readme file for buttons</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/callout</summary>
	<br><code>yarn add @gov.au/callout</code> or <code>npm install @gov.au/callout</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/callout/tests/site/">visual test file for callout</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/callout/README.md">readme file for callout</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/control-input</summary>
	<br><code>yarn add @gov.au/control-input</code> or <code>npm install @gov.au/control-input</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/control-input/tests/site/">visual test file for control-input</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/control-input/README.md">readme file for control-input</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/cta-link</summary>
	<br><code>yarn add @gov.au/cta-link</code> or <code>npm install @gov.au/cta-link</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/cta-link/tests/site/">visual test file for cta-link</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/cta-link/README.md">readme file for cta-link</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/direction-links</summary>
	<br><code>yarn add @gov.au/direction-links</code> or <code>npm install @gov.au/direction-links</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/direction-links/tests/site/">visual test file for direction-links</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/direction-links/README.md">readme file for direction-links</a><br><br>
	Dependencies:
	<br>

```shell
├─ core
└─ body
   └─ core
```
----------
</details>

<details>
	<summary>@gov.au/footer</summary>
	<br><code>yarn add @gov.au/footer</code> or <code>npm install @gov.au/footer</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/footer/tests/site/">visual test file for footer</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/footer/README.md">readme file for footer</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/grid-12</summary>
	<br><code>yarn add @gov.au/grid-12</code> or <code>npm install @gov.au/grid-12</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/grid-12/tests/site/">visual test file for grid-12</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/grid-12/README.md">readme file for grid-12</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/header</summary>
	<br><code>yarn add @gov.au/header</code> or <code>npm install @gov.au/header</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/header/tests/site/">visual test file for header</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/header/README.md">readme file for header</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/headings</summary>
	<br><code>yarn add @gov.au/headings</code> or <code>npm install @gov.au/headings</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/headings/tests/site/">visual test file for headings</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/headings/README.md">readme file for headings</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/inpage-nav</summary>
	<br><code>yarn add @gov.au/inpage-nav</code> or <code>npm install @gov.au/inpage-nav</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/inpage-nav/tests/site/">visual test file for inpage-nav</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/inpage-nav/README.md">readme file for inpage-nav</a><br><br>
	Dependencies:
	<br>

```shell
├─ core
└─ link-list
   ├─ core
   └─ body
      └─ core
```
----------
</details>

<details>
	<summary>@gov.au/keyword-list</summary>
	<br><code>yarn add @gov.au/keyword-list</code> or <code>npm install @gov.au/keyword-list</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/keyword-list/tests/site/">visual test file for keyword-list</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/keyword-list/README.md">readme file for keyword-list</a><br><br>
	Dependencies:
	<br>

```shell
├─ core
└─ link-list
   ├─ core
   └─ body
      └─ core
```
----------
</details>

<details>
	<summary>@gov.au/link-list</summary>
	<br><code>yarn add @gov.au/link-list</code> or <code>npm install @gov.au/link-list</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/link-list/tests/site/">visual test file for link-list</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/link-list/README.md">readme file for link-list</a><br><br>
	Dependencies:
	<br>

```shell
├─ core
└─ body
   └─ core
```
----------
</details>

<details>
	<summary>@gov.au/page-alerts</summary>
	<br><code>yarn add @gov.au/page-alerts</code> or <code>npm install @gov.au/page-alerts</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/page-alerts/tests/site/">visual test file for page-alerts</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/page-alerts/README.md">readme file for page-alerts</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/progress-indicator</summary>
	<br><code>yarn add @gov.au/progress-indicator</code> or <code>npm install @gov.au/progress-indicator</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/progress-indicator/tests/site/">visual test file for progress-indicator</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/progress-indicator/README.md">readme file for progress-indicator</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/responsive-media</summary>
	<br><code>yarn add @gov.au/responsive-media</code> or <code>npm install @gov.au/responsive-media</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/responsive-media/tests/site/">visual test file for responsive-media</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/responsive-media/README.md">readme file for responsive-media</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/select</summary>
	<br><code>yarn add @gov.au/select</code> or <code>npm install @gov.au/select</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/select/tests/site/">visual test file for select</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/select/README.md">readme file for select</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/skip-link</summary>
	<br><code>yarn add @gov.au/skip-link</code> or <code>npm install @gov.au/skip-link</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/skip-link/tests/site/">visual test file for skip-link</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/skip-link/README.md">readme file for skip-link</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/tags</summary>
	<br><code>yarn add @gov.au/tags</code> or <code>npm install @gov.au/tags</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/tags/tests/site/">visual test file for tags</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/tags/README.md">readme file for tags</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/text-inputs</summary>
	<br><code>yarn add @gov.au/text-inputs</code> or <code>npm install @gov.au/text-inputs</code><br>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/text-inputs/tests/site/">visual test file for text-inputs</a>
	<br>See the <a href="https://github.com/govau/uikit/blob/master/packages/text-inputs/README.md">readme file for text-inputs</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<br>

**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Contribute

💡 Building the UI-Kit is only necessary of you want to contribute to it. If you want to use the modules in your own project, install them via npm as described
in [How to use](#how-to-use).

To build this project you have to install [lerna](https://github.com/lerna/lerna) globally after cloning it via `yarn global add lerna` and run:

```shell
yarn
yarn bootstrap
yarn build
```

To make changes to an existing module, cd into the folder and run the watch:

```shell
cd packages/body
yarn watch
```

To add a new module run the scaffolding helper:

```shell
npm run scaffolding
```

_❗ After you have filled out all the blanks and added your dependencies into your package.json make sure you run `lerna bootstrap` again._


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

Visual tests have been built into each module and can be seen in either of the `README.md` files of each module or in the [listing above](#modules).
We have also integrated [pa11y](https://github.com/pa11y/pa11y) for accessibility testing and are using [jest](https://facebook.github.io/jest/) for javascript
tests.

Run all tests with the npm test script:

```shell
yarn test
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/uikit/master/LICENSE).


**[⬆ back to top](#contents)**


# };
