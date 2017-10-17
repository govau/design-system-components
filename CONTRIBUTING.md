Contributing to UI-Kit
======================

Hi there! Thank you for your interest in contributing to UI-Kit, we really appreciate it.

There are many ways to contribute – reporting bugs, fixing bugs, new module suggestions, submitting pull requests for enhancements to modules or even writing
documentation.

Wherever you are, and whatever your discipline is, you are invited to contribute.


## Contents

* [Reporting Bugs, Sending Suggestions](#reporting-bugs-sending-suggestions)
* [Installing UI-Kit locally](#installing-ui-kit-locally)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Reporting Bugs, asking Questions, sending Suggestions

Use the search in [issues](https://github.com/govau/uikit/issues) to see if the same bug, question or suggestion has already been raised.

If you’re requesting a new module, prefix the title with `new module: `.

If you’re filing a bug, specific steps to reproduce are helpful. Please reference the module that has the bug, along with what you expected to see and what
happened instead. For more infos look at our [issue template](./ISSUE_TEMPLATE.md).

**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


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

To make changes to an existing module, cd into the folder and run the watch:

```shell
cd packages/body
npm run watch
```

To add a new module run the scaffolding helper:

```shell
npm run scaffolding
```

_❗ After you have filled out all the blanks and added your dependencies into your package.json make sure you run `lerna bootstrap` again._


**[⬆ back to top](#contents)**
