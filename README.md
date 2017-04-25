gov.au UI-Kit
=============

> The UI-Kit for the Australian Government.


## Contents

* [How to use](#how-to-use)
* [Modules](#modules)
* [Contribute](#contribute)
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

💡 You can make the very first install even faster by including the pancake plugins you need:

```
npm install @gov.au/pancake-sass @gov.au/body @gov.au/header @gov.au/footer @gov.au/buttons
```



**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Modules

<details>
	<summary>@gov.au/core</summary>
	<br><code>npm install @gov.au/core</code>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/core/tests/site/">visual test file for core</a><br><br>
	<i>No dependencies</i>

----------
</details>

<details>
	<summary>@gov.au/animate</summary>
	<br><code>npm install @gov.au/animate</code>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/animate/tests/site/">visual test file for animate</a><br><br>
	<i>No dependencies</i>

----------
</details>

<details>
	<summary>@gov.au/body</summary>
	<br><code>npm install @gov.au/body</code>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/body/tests/site/">visual test file for body</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/breadcrumbs</summary>
	<br><code>npm install @gov.au/breadcrumbs</code>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/breadcrumbs/tests/site/">visual test file for breadcrumbs</a><br><br>
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
	<br><code>npm install @gov.au/buttons</code>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/buttons/tests/site/">visual test file for buttons</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/callout</summary>
	<br><code>npm install @gov.au/callout</code>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/callout/tests/site/">visual test file for callout</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/control-input</summary>
	<br><code>npm install @gov.au/control-input</code>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/control-input/tests/site/">visual test file for control-input</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/cta-link</summary>
	<br><code>npm install @gov.au/cta-link</code>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/cta-link/tests/site/">visual test file for cta-link</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/direction-links</summary>
	<br><code>npm install @gov.au/direction-links</code>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/direction-links/tests/site/">visual test file for direction-links</a><br><br>
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
	<br><code>npm install @gov.au/footer</code>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/footer/tests/site/">visual test file for footer</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/grid-12</summary>
	<br><code>npm install @gov.au/grid-12</code>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/grid-12/tests/site/">visual test file for grid-12</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/header</summary>
	<br><code>npm install @gov.au/header</code>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/header/tests/site/">visual test file for header</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/headings</summary>
	<br><code>npm install @gov.au/headings</code>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/headings/tests/site/">visual test file for headings</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/inpage-nav</summary>
	<br><code>npm install @gov.au/inpage-nav</code>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/inpage-nav/tests/site/">visual test file for inpage-nav</a><br><br>
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
	<br><code>npm install @gov.au/keyword-list</code>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/keyword-list/tests/site/">visual test file for keyword-list</a><br><br>
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
	<br><code>npm install @gov.au/link-list</code>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/link-list/tests/site/">visual test file for link-list</a><br><br>
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
	<br><code>npm install @gov.au/page-alerts</code>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/page-alerts/tests/site/">visual test file for page-alerts</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/progress-indicator</summary>
	<br><code>npm install @gov.au/progress-indicator</code>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/progress-indicator/tests/site/">visual test file for progress-indicator</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/responsive-media</summary>
	<br><code>npm install @gov.au/responsive-media</code>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/responsive-media/tests/site/">visual test file for responsive-media</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/skip-link</summary>
	<br><code>npm install @gov.au/skip-link</code>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/skip-link/tests/site/">visual test file for skip-link</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/tags</summary>
	<br><code>npm install @gov.au/tags</code>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/tags/tests/site/">visual test file for tags</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/text-inputs</summary>
	<br><code>npm install @gov.au/text-inputs</code>
	<br>See the <a href="http://uikit.apps.staging.digital.gov.au/packages/text-inputs/tests/site/">visual test file for text-inputs</a><br><br>
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

_After you have filled out all the blanks and added your dependencies into your package.json make sure you run `lerna bootstrap` again._


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
