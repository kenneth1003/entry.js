# entry.js
A light weight frontend plugin for showing elements with scroll event. 
```
"when it comes to web animation, transform and opacity are good friends"  -  By Paul Lewis 
```
Transform and opacity do not trigger any geometry changes, **entry.js** takes advantage of them to make a smooth animation for element scroll entry.

## Getting Started
HTML
```html
<link rel="stylesheet" href="/css/entry.css">
<script src="/javascript/entry.min.js"></script>

<!-- ... -->

<!-- element you want to apply -->
<div class="entryjs">
```
Javascript
```js
 var foo = new Entry();
 foo.init();  // execute after document ready
```

[DEMO](https://github.com/kenneth1003/entry.js/demo)

## Build
for minify js and css, from '/src' to '/dist'.
```
~$ gulp
```

## Coding style

1. single qoute.
2. two spaces indent.
3. private method begin with '_'.

### Authors

- *Initial work* - [kenneth1003](https://github.com/kenneth1003)


