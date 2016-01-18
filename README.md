# Web Starter Kit with Gulp

![Alt text](http://www.kolszewski.com/images/vendors.png)

Web Starter Kit is an opinionated build automation for front-end web development based on [Gulp](http://gulpjs.com/), [Node](https://nodejs.org/), [NPM](https://www.npmjs.com/), [Bower](http://bower.io/), [Babel](https://babeljs.io/), [Sass](http://sass-lang.com/), and [Jade](http://jade-lang.com/).

*Note: Web Starter Kit is an opinionated guideline and it doesn't solve everything. It is up to you to modify whatever necessary to achieve project goals.*

## Dependencies

Run: `npm cache clear && npm i && bower cache clean && bower install`

## Server

Start a local server for your project. Additionally, gulp will watch for any changes to files and reload browser while server is running.

Run: `gulp server`

## Build

Generate a fresh build for your project. It will run several individual tasks on files within `./src` and then output them to `./build`.

Run: `gulp build` or `gulp build --env=dev` (or `stage`, or `prod`)

## Assets

Sub-tasks to copy static files from `./src` to `./build`.

Run: `gulp assets`

+ `gulp data`
+ `gulp fonts`
+ `gulp images`
+ `gulp media`
+ `gulp misc`

## Scripts

Check scripts for any errors using ESLint and then convert ES6 to ES5 using Babel transpiler.

Run: `gulp scripts`

## Styles

Compile styles using Sass pre-processor and then run PostCSS post-processors.

Run: `gulp styles`
