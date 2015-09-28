## Bespectacled Bear

This is a grunt starter project, preloaded with all the goodies - Babel, Sass, livereload, etc.  If you already have grunt, there's very little setup.

## Motivation

I wanted to streamline new web projects and skip all the setup time.

## Installation

If you don't have have node, npm & grunt installed, install those fist.
See https://docs.npmjs.com/getting-started/installing-node & http://gruntjs.com/getting-started

Once you have node, npm & grunt installed, do the following to install Bespectacled Bear:

```shell
git clone https://github.com/mcdermottsolutions/bespectacled-bear.git
cd bespectacled-bear
npm install
```

the project directory structure looks like this:

```
-- dist
   -- style.css
      - style.css.map
      - style.min.css
   -- img
      - bespectacled-bear.png
   -- js
      - app.js
      - app.js.map
      -  app.min.js
   - index.html
-- src
   -- img
      - bespectacled-bear.png
   -- js
      - app.es6
  -- scss
      - style.scss
  - index.html
- Gruntfile.js
- package.json
```

The src folder is for working in and the dist folder is the output folder after transpiling the es6 and minimizing the css & js.

---

If you make any changes, you'll want to run
```shell
grunt
````
to recompile the sass, retranspile the js, minimize the sass & js and copy everything from src to dist.

---

If you just want to watch for changes as you work, run
```shell
grunt watch
````
and everytime you save, it will recompile the sass, retranspile the js, minimize the sass & js and copy everything from src to dist.

---

If you just want to do live reload and and see your changes update live in the browser, run
```shell
grunt server
````
Then go to localhost:9000 in your browser.  You'll need to add the livereload extension to your browser.  http://livereload.com/extensions/
