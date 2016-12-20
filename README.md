# entry.js
```
"transform and opacity are good friends in css animation"  -  By Paul Lewis 
```
Transform and opacity do not trigger any geometry changes, **entry.js** takes advantage of them to make a smooth animation for element scroll entry.
## Features
* Lightweight. (less than 1KB after gzipped)
* Easy to use.
* Dependencies free.

## Getting Started
HTML
```html
<link rel="stylesheet" href="/css/entry.css">
<script src="/javascript/entry.min.js"></script>
<!-- Or you can just copy the resources below into your js and css files -->

<!-- ... -->

<!-- element you want to apply -->
<div class="entryjs">
```
Javascript
```js
 var foo = new Entry();
 foo.init();  // execute after document ready
```

[DEMO](https://github.com/kenneth1003/entry.js/tree/master/demo) <br/><br/>

entry.min.css:
```css
.entryjs{opacity:0;-webkit-transition:opacity .5s,-webkit-transform .5s;transition:opacity .5s,-webkit-transform .5s;transition:transform .5s,opacity .5s;transition:transform .5s,opacity .5s,-webkit-transform .5s}.entryjs.entryjs-no-opacity{opacity:1}.entryjs.entryjs-left{-webkit-transform:translateX(-50px);-ms-transform:translateX(-50px);transform:translateX(-50px)}.entryjs.entryjs-right{-webkit-transform:translateX(50px);-ms-transform:translateX(50px);transform:translateX(50px)}.entryjs.entryjs-top{-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px)}.entryjs.entryjs-bottom{-webkit-transform:translateY(50px);-ms-transform:translateY(50px);transform:translateY(50px)}.entryjs.entryjs-active{opacity:1!important;-webkit-transform:translate(0) rotate(0) scale(1)!important;-ms-transform:translate(0) rotate(0) scale(1)!important;transform:translate(0) rotate(0) scale(1)!important}
```
entry.min.js:
```js
var Entry=function(t){function n(){var t=document.querySelectorAll(".entryjs");c=window.scrollY,t.forEach(function(t){var n=a(t)||0;t.style.transition=m,d.push({dom:t,position:t.getClientRects()[0].top+c+f-n,yOffset:n})})}function o(){c=window.scrollY,l=!0;for(var t=d.length-1;t>=0&&(s(c,d[t],t),l);t--);d.length||window.removeEventListener("scroll",o)}function i(){d.forEach(function(t){var n=t.dom.getClientRects()[0].top+c+f-t.yOffset;t.position=n})}function e(t){var n=t.dom,o=n.getAttribute("data-entryjs-delay");o?setTimeout(n.classList.add.bind(n.classList,"entryjs-active"),o):t.dom.classList.add("entryjs-active")}function r(t,n){return n.position-t.position}function s(t,n,o){t>n.position?(e(n),d.splice(o,1)):l=!1}function a(t){if(window.getComputedStyle){var n=getComputedStyle(t),o=n.transform||n.webkitTransform||n.mozTransform,i=o.match(/^matrix3d\((.+)\)$/);return i?parseFloat(i[1].split(", ")[13]):(i=o.match(/^matrix\((.+)\)$/),i?parseFloat(i[1].split(", ")[5]):0)}}var l=!0,d=[],c=0,f=t&&t.theshold?t.theshold:200,u=t&&t.duration?t.duration:".5",m="all "+u+"s";Entry.prototype.init=function(){f-=window.innerHeight,n(),d.sort(r),window.addEventListener("scroll",o),window.addEventListener("resize",i),o()}};
```

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

## Browser support

IE >9 <br/>
Edge >12 <br/>
Chrome >4 <br/>
Firefox >3.5 <br/>
Safari >3.1 <br/>
Opera >11.5

### Authors

*Initial work* - [kenneth1003](https://github.com/kenneth1003)


