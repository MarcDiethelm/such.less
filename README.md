such.less
=========

Such less. Many advance. So CSS. Wow.

## Why

Mainly to collect, standardize and share some amazing best practices we have found while using LessCSS for frontend projects, from small to huge. Also to brag about them ~~a bit~~. Wow.

Imagine if you could just drop some modular less files into your project and define some variables to set up the typography, a grid, re-usable responsive layouts, get some styles for wireframing and of course many truly useful helpers.

This project aims to work as a collection of libraries. You set your configuration centrally in one file using less variables and then call the appropriate library mixins ~~all in one place~~ passing your variables into them. (After that you can tweak the libraries for your individual needs.)

Such less.

Todo: Maybe really separate default library code and user defined code. Integrate with less unlocks.

## Getting started

- Install with (bower? see below)
- Fill in the variables in `variables.less`
- Call the mixins you need in `elements.less`

Now you've got a clean and manageable setup. Such nice. Wow.

After that go and make a mess in `elements.less`.

## TODO

- [X] Mature the file file structure and architecture
- [ ] Plan install mechanisms (bower, npm, component, jam, volo...)
- [X] Build step
- [ ] Decide what to do with layout.less
- [ ] Facilitate integration with external build setups. (grunt plugin?)
