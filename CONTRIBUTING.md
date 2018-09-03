Contributing to UI-Kit
======================

Hi there! Thank you for your interest in contributing to UI-Kit, we really appreciate it.

There are many ways to contribute – reporting bugs, fixing bugs, new module suggestions, submitting pull requests for enhancements to modules or even writing
documentation.

Wherever you are, and whatever your discipline is, you are invited to contribute.


## Contents

* [Contributing a new component](#contributing-a-new-component)
  * [Suggested components](#suggested-components)
    * [Useful](#useful)
    * [Unique](#unique)
  * [Before publication](#before-publication)
    * [Usable](#usable)
    * [Consistent](#consistent)
    * [Versatile](#versatile)
    * [Coded](#coded)
    * [Tested](#tested)
    * [Considered](#considered)
* [Reporting Bugs, Sending Suggestions](#reporting-bugs-asking-questions-sending-suggestions)
* [Installing UI-Kit locally](#installing-ui-kit-locally)


-------------------------------------------------------------------------------------------------


## Contributing a new component

The Australian Government’s Design System is not ours, it is yours.

The Digital Transformation Agency are just caretakers of the design system. To help us with the caretaking we need a few things from newly proposed component contributions.
One of our goals is to ensure a welcoming environment for all contributors to our projects. If you’re unsure about anything, just ask — or submit your issue or pull request anyway. The worst that can happen is we’ll politely ask you to change something.

We appreciate all well intended contributions.


### Suggested components

To be considered for inclusion in the design system, components and patterns must be:

| Criteria | Description |
|---|---|
| [Useful](#useful) | It addresses a user need that’s shared by multiple services or products |
| [Unique](#unique) | It doesn’t duplicate something which already exists in the design system, unless it’s intended to replace it. |


### Before publication

Before new components and patterns are published into the design system, the team of core contributors will review them to make sure that they are:

| Criteria |  Description |
|---|---|
| [Usable](#usable) | It’s been tested and shown to work with a representative sample of users, including those with disabilities. |
| [Consistent](#consistent) | It uses existing styles and components in the design system where relevant. |
| [Versatile](#versatile) | It can be easily applied in different contexts. |
| [Coded](#coded) | Components are ready to merge in the UI-Kit |
| [Tested](#tested) | It’s been tested and shown to work with a range of browsers, assistive technologies and devices. |
| [Considered](#considered) | Documentation and rationale have been provided. |

-------------------------------------------------------------------------------------------------

### Useful

**This is for everyone.** We can’t accept components that are for just one project or one specific use-case. 

If a component is going to be added into the system it must be designed with the intention of being reusable in a variety of circumstances by many teams or departments.

We ask contributors to provide examples of the versatility of a proposed component or provide reference to community discussion about it’s wider intended use.

_If you have a specific need for your project, consider customising an existing component to suit your needs. If you aren’t sure how to do this, we’re happy to help teach you._

**[⬆ back to top](#contents)**

-------------------------------------------------------------------------------------------------

### Unique

Components shouldn’t duplicate the functionality of another component.

We need to keep the system slim; the more components that are in the system, the harder it is to maintain and the possibility for code-bloat and technical debt is increased.

If a component is similar in function consider extending it rather than duplicating it.

**[⬆ back to top](#contents)**

-------------------------------------------------------------------------------------------------

### Usable

We need to know that any new components are working as intended for the end user.

Task based testing for a specific component is prefered. But at a minimum components in the design system should be tested as part of a product or service and have been operating in a live or beta environment for a period of time before being integrated into the system.

**[⬆ back to top](#contents)**

-------------------------------------------------------------------------------------------------

### Consistent

Components that follow the system are much more themeable and reusable by other teams.

New components must follow the system as closely as possible, particularly the specifics of colour, spacing, and typescale in `core`.

**[⬆ back to top](#contents)**

-------------------------------------------------------------------------------------------------

### Versatile

**Responsive.** All components should fill the width of their parent element. This is so that layouts aren’t dictated by components, but rather components fit the required layouts.

**Robust.** Components should accommodate varied content and varied content lengths.
For example, what happens with a navigation component that has more items than demonstrated?

**[⬆ back to top](#contents)**

-------------------------------------------------------------------------------------------------

### Coded

**Code is for humans.** Please look at the coding style and work with it, not against it. We write comments, add spacing, and prefer readable code over clever code. Yes, code is actually for computers, but it is humans that need to maintain it.

**Code comments.** Code should be commented so that it is as usable as possible. Try to provide reasoning or links to documentation about any peculiar decisions that had to be made. [For example.](https://github.com/govau/uikit/blob/master/packages/body/src/sass/_module.scss#L127)

**Follow the folder structure.** New components should follow the same folder structure as the [existing components.](https://github.com/govau/uikit/tree/master/.templates/new-module)

**CSS** can be dependent on other components, but must use core functions and mixins at a minimum.

* For spacing, padding, or other metrics like border-width, use [AU-space()](https://github.com/govau/uikit/blob/master/packages/core/src/sass/_globals.scss#L475)
* For font-sizes and line-height, use [AU-fontgrid()](https://github.com/govau/uikit/blob/master/packages/core/src/sass/_globals.scss#L629)
* For colours, use the [core colour variables](https://github.com/govau/uikit/blob/master/packages/core/src/sass/_globals.scss#L741)

**JavaScript.** The Design System supports **JavaScript, JQuery, and React.** To make integration easier any JavaScript supplied for a component should be written in at least one of these.

**[⬆ back to top](#contents)**

-------------------------------------------------------------------------------------------------

### Tested

**Accessibility.** A component on its own must be accessible to [WCAG 2.1 level AA.](https://www.w3.org/TR/WCAG21/) Some documentation on how this has been checked, tested, or decisions made to support accessibility should be supplied.

**Browser and device tested.** All components should meet our [browser support requirements.](https://github.com/govau/uikit#browser-support)

**No JavaScript fallbacks.** All components must degrade _gracefully_ when JavaScript is disabled. We expect that a user can still complete their task without JavaScript enabled, it just might not be beautiful. For example, accordions default to ‘open’ when JavaScript is disabled so that users can still use the content.

**[⬆ back to top](#contents)**

-------------------------------------------------------------------------------------------------

### Considered

Include a high-level description for what the pattern is, and what it’s for.

Provide rationale; the more the better. We aim to explain design and code decisions as openly as possible. Explanations about why decisions have been made help others understand the work involved but also help them understand the consequences of overriding.

**[⬆ back to top](#contents)**


-------------------------------------------------------------------------------------------------


## Reporting Bugs, Asking Questions, Sending Suggestions

Use the search in [issues](https://github.com/govau/uikit/issues) to see if the same bug, question or suggestion has already been raised.

If you’re requesting a new module, prefix the title with `new module: `.

If you’re filing a bug, specific steps to reproduce are helpful. Please reference the module that has the bug, along with what you expected to see and what
happened instead. For more info look at our [issue template](./ISSUE_TEMPLATE.md).

**[⬆ back to top](#contents)**


-------------------------------------------------------------------------------------------------


## Installing UI-Kit locally

If you’d like to contribute code, first, you will need to run UI-Kit locally.

💡 Building the UI-Kit is only necessary if you want to contribute to it. If you want to use the modules in your own project, install them via npm as described
in [How to use](./README.md#how-to-use).

To build this project you have to install [lerna](https://github.com/lerna/lerna) globally after cloning it via `npm install -g lerna` and run:

```shell
npm install
npm run bootstrap
npm run build
```

To make changes to an existing module, `cd` into the folder and run the watch:

```shell
cd packages/body
npm run watch
```

To add a new module run the scaffolding helper:

```shell
npm run scaffolding
```
> NOTE: Ensure your newly created module is appended to the CirclCI configuration file `save_cache` key path. Additionally, append or modify the checksum value, using the command listed below for a newly created or updated module respectfully.

```bash
md5sum $(find . packages -maxdepth 2 -type f -name 'package-lock.json') > .circleci/PACKAGE_LOCK_CHECKSUMS
```

_❗ After you have filled out all the blanks and added your dependencies into your package.json make sure you run `lerna bootstrap` again._


**[⬆ back to top](#contents)**


-------------------------------------------------------------------------------------------------


## Attribution

This Contribution Guide is adapted from:

https://github.com/alphagov/govuk-design-system-backlog/blob/master/docs/CRITERIA.md


**[⬆ back to top](#contents)**
