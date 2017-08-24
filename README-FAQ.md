# FAQs

The Frequently Asked Questions (FAQs) page contains answers to commonly raised queries about the design system.

If you can't find an answer to a question you have please email us at guides@dta.gov.au or join our conversation on [slack](http://guides.service.gov.au/join-slack/).

## General

**Is there any documentation or list of components?**

You can view our current [documentation here](http://uikit.apps.staging.digital.gov.au/). We are creating a new version which should make it easier to get started with the design system.

**What are you working on?**

You can view our [project backlog](https://github.com/govau/uikit/projects/2) to see an up to date list of tasks. We generally try to balance 50% community engagement (capability uplift and understanding user needs) and 50% product (maintenance and building).

**What are the differences between version one and version two?**

Version one was implemented following strict semantic HTML. This caused issues with implementation as users who didn't have easy control over their HTML struggled to implement the design system. Due to this version one is now deprecated and is no longer supported.

Version two uses classes that need to be added or extended onto HTML. This allows users to be more flexible with the HTML they are provided with.

**Who can use the design system?**

The design system is built for everyone. We want government and private sector to embrace the design system. It aims to solve common usability and accessibility problems in a simple and robust way.

**What is the design system built for?**

The design system is built to solve common usability and accessibility problems in a simple and robust way.

**I found an issue/bug/problem. What do I do?**

Thats awesome!

Please take a look at the Github [issue queue](https://github.com/govau/uikit/issues), if you find a relevant issue please join the conversation and note down any steps you took to find it. If it's a new issue please [create a new issue](https://github.com/govau/uikit/issues/new) and provide detailed instructions.

## Design

**Why is the whitespace in the typography large or inconsistent?**

The current spacing in the design system is going through a change which we hope to be implemented in the coming months.

Currently the spacing is based on font-size (em) which we've heard is causing some unexpected behaviour for our users. We are planning to move from using 'em' on the uikit-space function to REMs. We are also moving to one font (previously we had two font families one for headings and one for the body) which will allow a consistent line-height.

These changes in spacing will also influence our typographic rhythm for the spacing under headers and paragraphs which we've also had feedback on.

**Why do you use system fonts?**

During research we have met many Australians who live in rural and remote areas where internet access is limited but Government services are still required.
Using system fonts makes the load times faster with only a slight compromise on aesthetics.

System fonts have come a long way. Manufacturers are now shiping some elegant fonts with their main platforms. Major websites (github) and design systems (bootstrap) have embraced them.

**Why is there a max-width on elements inside the body?**

To optimise readability we have set a max-width on certain elements inside the body. This creates a consistent and easy to use user interface. You can override the code as necessary, but please understand your users needs.

**Are there .PSD or .Sketch files of the design system?**

We currently do not provide and design files. In the future we would love to provide users with variations of files to allow them to access the latest components in the design system.

**Why no carousels, select, tabs, and dropdowns?**

Complicated functions and interactions need careful accessibility consideration during development and design; usually on a per-project basis. We plan on looking at some of these things in the future but some we would also recommend not using.

- **Carousels** : hide content, are difficult to navigate, and often add more accessibility issues than they solve.
 [http://bradfrost.com/blog/post/carousels/](http://bradfrost.com/blog/post/carousels/)
 [http://shouldiuseacarousel.com/](http://shouldiuseacarousel.com/)

- **Select:** users struggle with drop-downs and select boxes all the time.
 [https://www.youtube.com/watch?v=CUkMCQR4TpY](https://www.youtube.com/watch?v=CUkMCQR4TpY)
 [https://paper.dropbox.com/doc/Select-boxes-v7PWDvPDV2tmc9pzDbm3s](https://paper.dropbox.com/doc/Select-boxes-v7PWDvPDV2tmc9pzDbm3s)
 [https://www.formisimo.com/blog/why-are-drop-downs-and-select-boxes-bad-for-forms/](https://www.formisimo.com/blog/why-are-drop-downs-and-select-boxes-bad-for-forms/)

- **Tabs / Collapsible panels:** Need work to be done correctly. They can hide content, often spoil 'find in page' functions, require understanding of how they work, add more accessibility issues.
 [https://baymard.com/blog/accordion-and-tab-design](https://baymard.com/blog/accordion-and-tab-design)

## Developer

**Is the design system available with my content management system or javascript framework?**

The design system is built to be system agnostic. This means that it can work with any system, development environment, build tools or stack.

Currently we support a few flavours of the design system:

- HTML + CommonJS
- HTML + jQuery
- React

There are also many communities which are connecting content management systems and other javascript frameworks to the design system. If you would like to do the same we recommend having a look at the question &quot;How do I add the design system to my build process? How do I add custom code/variables/overrides?&quot;.

**Why are my HTML elements NOT automatically styled (h1, input, blockquote, etc.)?**

From our learnings in the version one of the design system, we decided it was best to provide our users with css classes which they can then invoke onto the HTML output their system provides. This means that by default a `<h1>` will not get the `.uikit-display-6` styles as you may decide to make your `<h1>`'s look like `<h2>`'s.

Where possible we recommend adding the design system classes directly into the HTML. In some instances that isn't possible or can be difficult. In that situation we would recommend extending the classes onto the outputted HTML.

**Why are the classes on the headings backwards? (.uikit-display-6 for H1)?**

The reverse number system was implemented because when the fonts get bigger you can now go bigger (`uikit-display-6`, `uikit-display-7`, `uikit-display-8`). If they were following normal headings you couldn't go (`h3`, `h2`, `h1`, `h0.5`, `h0.25`) to get bigger as that will get messy quickly.

That being said we have identified this as a problem as it gets very confusing. We are going to be changing to a more sensible `.uikit-display-xxl`.

If you would like all of your headings to use the design system classes you can easily extend them in sass. We don't want to put styles directly onto HTML elements as you may want your `<h1>`'s to look like `<h2>`'s by default.

This will allow the headings to just pick up the styles by default, then you shouldn't have to worry about the classes too much:

```

h1 {

  @extend .uikit-display-6;

}

```

**Why should I use a design system if I still have to write custom code?**

The purpose of a design system is to help you get started and give you a foundation to build on top of. With any design system there is still an expectation that custom code will be needed to fully suit your users needs.

There are always going to be gaps unfortunately. For instance, bootstrap 4 doesn't have components for loading states. We would love to fill these gaps in our design system but that may not always be possible to do right away. The solution may also be good for your users but not good for a whole of government design system.

Our best recommendation is to write your custom code in a reusable and robust pattern. If you are making a new component follow the same patterns as the design system components. That will allow you to contribute back with similar code base, or replace those components in the future if your team want to implement another solution.

**What is pancake? Do I need to know pancake?**

You do not need to know or fully understand pancake. It's a tool used to develop the design system. We would recommend reading the [readme.md](https://github.com/govau/pancake) and having an understanding of the pancake object in the `package.json` file.

Pancake allows users to `npm install @gov.au/breadcrumbs` and get a css file with only the breadcrumbs styles and any dependencies. It's a powerful tool that we have built our design system on that allows immutable versions. This means that one user can have breadcrumbs version 1.2 and another can have version 2.1 and nothing will break. Users can then choose to upgrade their components when necessary.

**How do I request a new component to be added to the system?**

New components can be requested in lots of ways. Our preferred approach is currently through Github. Please take a look at the Github [issue queue](https://github.com/govau/uikit/issues), if you find a relevant component please join the conversation and note down any additional requirements or variations. If it's a new issue please [create a new issue](https://github.com/govau/uikit/issues/new) and provide detailed instructions of the component.

**How do I add the design system to my build process? How do I add custom code/variables/overrides?**

Build processes can be complicated, we recommend first looking at our [design system starter pack](https://github.com/govau/uikit-starter). This is a simple implementation of the design system showing how to structure a project. After you `npm install` and run `npm run watch` you should have some generated files. Looking at the `src/sass/main.scss` file you can see the order:

```
// OVERWRITES


// UI-Kit
@import 'uikit';

// CUSTOM SASS


```

This pattern is how we recommend to apply the design system. You are able to overwrite variables as we use the SASS `default` property on our variables. Then when creating or overriding existing components we recommend adding your code in the custom SASS section.

**How do I make a pull request? What branch should I pull request into?**

Pull requests are awesome so thank you for reading this! The general procedure we follow when making a pull request is:

1. [Make a fork](https://github.com/govau/uikit#fork-destination-box) of the design system
2. Clone a local copy of the fork onto your computer
3. Create a new branch off the development branch for what you are working on
4. Do the necessary changes
5. If possible please test the work, we understand this is not always possible :)
6. Commit and push your work back into your fork
7. When you open your fork on github you should now have a big pull request button
8. Press that button and add any necessary comments

**What code standards do I need to follow for a pull request?**

None, we want to be open to the community and allow collaboration to happen without barriers. That being said we follow a strict set of [rules](https://github.com/govau/uikit#checklist-and-browser-support) for code that ends up into the design system. It would be a great help if you could test or specify what you have tested against that list.

**Where can I get help implementing the design system with my project?**

We currently have a community on [slack](http://guides.service.gov.au/join-slack/) and [github](https://github.com/govau/uikit). If you are working on a specific implementation with a javascript framework or content management system there may also be communities external to the design system.

We don't always have time but we are dedicated to helping our community get up and running with the design system.
