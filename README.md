# entry.js
A light weight frontend plugin for showing elements with scroll event. 
```
"transform and opacity are good friends in css animation"  -  By Paul Lewis 
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

[DEMO](https://github.com/kenneth1003/entry.js/tree/master/demo)

## Build
For minify js, css from '/src' to '/dist' as well as possible future code expanding, 
```
~$ gulp
```

## Coding style

Following a simple eslint rules and private method begin with '_'.
```
// .eslint.js
"rules": {
  "quotes": [
    "warn",
    "single"
  ],
  "semi": [
    "warn",
    "always"
  ]
}
```


### Authors

*Initial work* - [kenneth1003](https://github.com/kenneth1003)


