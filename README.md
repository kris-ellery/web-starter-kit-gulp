# Web Starter Kit with Gulp

![Alt text](http://www.kolszewski.com/images/vendors.png)

Web Starter Kit is an opinionated build automation for front-end web development based on [Gulp](http://gulpjs.com/), [Node](https://nodejs.org/), [NPM](https://www.npmjs.com/), [Sass](http://sass-lang.com/), and [Jade](http://jade-lang.com/).

**Key features**

* Increase web development speed (CSS/HTML/JS Compilation and Optimization)
* Reduce human-prone errors (Code Lint/Hint)
* Add self-documenting code standards (SassDoc, JSDoc)
* Improve web performance across devices (PageSpeed Insights, Speed Index)
* Enhance self-awareness of code quality (Code Style Guide)

*Note: Web Starter Kit is an opinionated guideline and it doesn't solve everything. It is up to you to modify whatever necessary to achieve project's end goal.*

## Table of Contents

1. [Dependencies](#dependencies)
1. [Build](#build)
    1. [Environments](#environments)
        1. [Development](#development)
        1. [Stage](#stage)
        1. [Production](#production)
1. [Server](#server)
    1. [Local URLs](#local-urls)
    1. [Options](#options)
1. [Documentation](#documentation)
    1. [URLs](#urls)
1. [Assets](#assets)
    1. [Data](#data)
    1. [Fonts](#fonts)
    1. [Images](#images)
    1. [Media](#media)
    1. [Miscellaneous](#miscellaneous)
    1. [Vendors](#vendors)
1. [Scripts](#scripts)
    1. [JavaScript Style Guide](#javascript-style-guide)
1. [Styles](#styles)
    1. [BEM Structure](#bem-structure)
    1. [Sass Style Guide](#sass-style-guide)
1. [Views](#views)
    1. [Jade Structure](#jade-structure)
    1. [HTML Style Guide](#html-style-guide)
    1. [Environment Variables](#environment-variables)

## Dependencies

Run: `npm cache clear && npm i`

*Note: Before you can install Web Start Kit dependencies, you will need to install [Gulp](http://gulpjs.com/), [Node](https://nodejs.org/), and [NPM](https://www.npmjs.com/).*

[back to top](#table-of-contents)

## Build

This task will generate a fresh build of your project. It will run several individual tasks on files within `./source` and then output them to `./build`.

Run: `gulp build`

### Environments

You can specify which environment you want to build. If you do not pass `env` as an option, then `dev` will be used by default.

#### Development

Run: `gulp build --env=dev`

#### Stage

Run: `gulp build --env=stage`

#### Production

Run: `gulp build --env=prod`

[back to top](#table-of-contents)

## Server

You can start a local server to view your project and documentation. Additionally, gulp will watch for any changes to files and reload browser while server is running.

Run: `gulp server`

### Local URLs

* Local - http://localhost:3000
* UI - Set to `false` by default

### Options

You can modify port, proxy, and many other settings in `./gulp_tasks/server.js`. For more information about BrowserSync go to [http://www.browsersync.io/](http://www.browsersync.io/).

[back to top](#table-of-contents)

## Documentation

You can generate documentation for Sass ([SassDoc](http://sassdoc.com/)) and JavaScript ([JSDoc](http://usejsdoc.org/)).

Run: `gulp docs`

### URLs

You have to have a running sever in order to view documentation.

* Sass - `http://localhost:8000/docs/sass`
* JavaScript - `http://localhost:8000/docs/js`

[back to top](#table-of-contents)

## Assets

This task will run several individual sub-tasks to copy static files from `./source` to `./build`.

Run: `gulp assets`

### Data

This task will copy data files to `./build/data`.

Run: `gulp data`

### Fonts

This task will copy font files to `./build/fonts`.

Run: `gulp fonts`

### Images

This task will optimize and copy images to `./build/images`.

Run: `gulp images`

### Media

This task will copy media files to `./build/media`.

Run: `gulp media`

### Miscellaneous

This task will copy miscellaneous files, such as `.htaccess` or `robots.txt`, to the root of `./build`. If your project require custom settings per environment, then you can save individual files into appropriate directory within `./source/misc`.

Run: `gulp misc`

### Vendors

This task will copy vendor files to `./build/vendors`.

Run: `gulp vendors`

[back to top](#table-of-contents)

## Scripts

This task will perform a series of sub-tasks to generate final JavaScript files.

* Select root files only from `./source/scripts`
* Include files
* Check for JavaScript style guide errors
* Check for JavaScript errors
* Add meta data banner
* Save unminified JavaScript file
* Minify JavaScript
* Save minified JavaScript file

*Note: Each file on the root of `./source/scripts` will be compiled to its own file in `./build/scripts`. Each file can have own includes, just like Sass with `@import` functionality. See `./source/scripts/main.js` as an example.*

Run: `gulp scripts`

## JavaScript Style Guide

Your JavaScript should adhere to most reasonable, yet opinionated, style guide. If you choose to ignore it, you can override settings in `./gulp_tasks/_js-guide.json` and `./gulp_tasks/_js-lint.json`. To learn more about JavaScript style guide go to [https://github.com/airbnb/javascript/tree/master/es5](https://github.com/airbnb/javascript/tree/master/es5).

[back to top](#table-of-contents)

## Styles

This task will perform a series of sub-tasks to generate final CSS files.

* Select all files from `./source/styles`
* Check for Sass style guide errors
* Select root files only from `./source/styles`
* Compile Sass to CSS
* Add vendor prefixes
* Order CSS declarations
* Add meta data banner
* Save unminified CSS file
* Combine media queries
* Minify CSS
* Saved minified CSS file

*Note: Each file on the root of `./source/styles` will be compiled to its own file in `./build/styles`.*

Run: `gulp styles`

### BEM Structure

This project follows a strict naming convention using [BEM](https://en.bem.info/) methodology.

Directory structure and selector names are divided into namespaces based on [More Transparent UI Code with Namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/) article by Harry Roberts.

### Sass Style Guide

Your Sass should adhere to most reasonable, yet opinionated, style guide. If you choose to ignore it, you can override settings in `./gulp_tasks/_sass-lint.yml`.

[back to top](#table-of-contents)

## Views

This task will perform a series of sub-tasks to generate final HTML files.

* Select Jade files from `./source/views/site`
* Compile Jade to HTML
* Check for HTML errors

Run: `gulp views`

### Jade Structure

This project follows an opinionated directory structure. To learn more about Jade go to [http://jade-lang.com/reference/](http://jade-lang.com/reference/) and [http://naltatis.github.io/jade-syntax-docs/](http://naltatis.github.io/jade-syntax-docs/).

### HTML Style Guide

Your HTML should adhere to most reasonable, yet opinionated, style guide. If you choose to ignore it, you can override settings in `./gulp_tasks/_html-lint.json`.

### Environment Variables

Every Jade file has access to global `env` variable. You can use it to conditionally load unminified/minified assets. See `./source/views/includes/head.jade` as an example.

[back to top](#table-of-contents)
