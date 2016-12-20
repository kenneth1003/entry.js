# Basic
A hello world example for entryjs. [Page](https://kenneth1003.github.io/demo/entry.js/basic.html) <br/><br/>
After adding the **entry.js** and **entry.css** in you project, add **"entryjs"** in the classlist of the element, and the following in the Javascript, 
```js
var foo = new Entry();
foo.init();  // execute after document on ready
```
then you are good to go :)


# Advance
Learn more config for entryjs. [Page](https://kenneth1003.github.io/demo/entry.js/advance.html)<br/><br/>
You can **config Entry**, as following
```js
var foo = new Entry({
  theshold: 420, // in pixel, showing theshold from bottom, default is 200
  duration: 2,   // in second, transition time, default is .5
});
foo.init();      // execute after document on ready
```

# Performance Test
A closer look of the FPS and init-time for entryjs. [Page](https://kenneth1003.github.io/demo/entry.js/performance_test.html)

## Notice
The element performing scroll entry should not have its own translate and opacity style, otherwise it could be overwritten or overwrite the style of entry.js

