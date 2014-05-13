such.less
=========

Such less. Many advance. So CSS. Wow.

## Why
To make setting up modern frontend CSS an efficient, structured and fun affair. To defeat the inherent complexity of modern web design with amazing best practices we have found while using LessCSS for frontend projects, from small to huge.

Imagine if you could just drop some modular less files into your project and define some variables to set up the typography, create a grid, re-usable responsive layouts, get styles for wireframing and of course many truly useful helpers.

This project works as a collection of separate bundles. It gives you structures and best practices rather than a styled framework. You set your configuration centrally in one file using less variables and then call the appropriate bundle mixins ~~all in one place~~ passing your variables into them. (After that you can tweak the libraries for your individual needs.) And your project's base styles are done!

Such less. ![Such shibe](https://github.com/MarcDiethelm/such.less/blob/develop/pages/mini-doge.png?raw=true)

This project was originally created to collect, standardize and share our continually evolving CSS tooling. Also to brag about it.

Todo: Maybe really separate default library code and user defined code. Integrate with less unlocks.

## What's in it?
such.less consists in a large part of .less "bundles" that define and structure different "areas" of a project's styles. The full list of components is...

- Bundles
	- Fonts
	- Typography
	- Layout [tbd]
	- Responsive layouts
- Libs
	- Helpers
	- "responsibly" grid
	- Wireframing
- Setup
- Styles (everything else)
- Structured variables that the Bundles, Setup and Styles depend on

The bundles are described in detail in the Wiki [todo].

## Getting started
- Install with (bower? see *TODO* below)
- Fill in the variables in `variables.less`
- Call the mixins you need in `setup.less` and `styles.less`

Now you've got a clean and manageable setup. Such nice. Wow.

After that go and make a mess in `styles.less`. And adapt the bundles to your needs.

### Intranet Explorer

If you need to support old IE versions you should probably include some polyfills like so:

```html
	<!--[if lt IE 9]>
	<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.2/html5shiv.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.1.0/respond.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
	<![endif]-->
```

## Build
__Either use your own build setup__ including all `.less` files in the such.less root and in `lib/`. Typical build tools that people use are [Gulp](https://github.com/gulpjs/gulp/), [Grunt](http://gruntjs.com/) and the venerable `make`.

**Or**

__Use the included Grunt build:__

- Install [Node.js](http://nodejs.org/).
- Open a terminal, change to the project folder.
- Install the dependencies: `npm install`.
- Start the dev build / file watcher: `npm run build`. Abort with [Ctrl + c].
- The CSS is created in `build/styles.css` and `build/styles.min.css`. You're welcome.


## Demo / Test
- Install [Node.js](http://nodejs.org/).
- Open a terminal, change to the project folder.
- Start the server with `npm start`.
- Now you can visit `localhost:3000` in a browser.


## TODO
- [x] Mature the file structure and architecture
- [ ] Plan install mechanisms (bower, npm, component, jam, volo...)
- [x] Build step
- [ ] Decide what to do with layout.less
- [ ] Facilitate integration with external build setups. (grunt plugin?)
