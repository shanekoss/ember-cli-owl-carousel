# ember-cli-owl-carousel2

Fastboot compatible addon for [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/)

## Installation

This addon will install latest version of owl.carousel as dependency.

* `ember install ember-cli-owl-carousel2`

## Usage

This addon provides **owl-carousel2** component. By default it'll use default theme or append *owl-theme* class.

```
{{#owl-carousel2}}
  <div> Your Content </div>
  <div> Your Content </div>
  <div> Your Content </div>
{{/owl-carousel2}}
```

You can choose to not use default theme by passing *theme=false*. Or even exclude theme from build process (see below).

```
{{#owl-carousel2 theme=false}}
  <div> Your Content </div>
  <div> Your Content </div>
  <div> Your Content </div>
{{/owl-carousel2}}
```

You can pass any valid Owl Carousel options to the component.

```
{{#owl-carousel2 loop=true items=1}}
  <div> Your Content </div>
  <div> Your Content </div>
  <div> Your Content </div>
{{/owl-carousel2}}
```

And set callbacks by passing closure actions to the component

```
{{#owl-carousel2 theme=false onDragged=(action 'dragged')}}
  <div> Your Content </div>
  <div> Your Content </div>
{{/owl-carousel2}}
```

## SASS

If you would like to style using SASS please read the [owl.carousel documentation](https://owlcarousel2.github.io/OwlCarousel2/docs/dev-styles.html). Please remember to install [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) addon and exclude CSS in the configuration.

```
// app/styles/app.scss

@import 'node_modules/owl.carousel/src/scss/owl.carousel';
```

## Build configuration

In most cases this addon requires no configuration. By default it imports JS, CSS and default theme from owl carousel.

* Don't import CSS (+ theme)

```
// ember-cli-build.js

var app = new EmberAddon(defaults, {
  'ember-cli-owl-carousel2': {
    css: false
  }
});
```

* Change theme

```
// ember-cli-build.js

var app = new EmberAddon(defaults, {
  'ember-cli-owl-carousel2': {
    theme: 'green'
  }
});
```

* Don't import theme, but CSS

```
// ember-cli-build.js

var app = new EmberAddon(defaults, {
  'ember-cli-owl-carousel2': {
    theme: false
  }
});
```

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
