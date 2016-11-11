# Web Starter Kit with Gulp

![Alt text](http://www.kolszewski.com/images/vendors_v2.png)

Web Starter Kit is an opinionated build automation for front-end web development based on [Gulp](http://gulpjs.com/), [Node](https://nodejs.org/), [NPM](https://www.npmjs.com/), [Bower](http://bower.io/), [Babel](https://babeljs.io/), [Sass](http://sass-lang.com/), and [Pug](https://pugjs.org/).

*Note: Web Starter Kit is simply a guideline and it doesn't solve everything. It is up to you to modify whatever necessary to achieve your project goals.*

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
1. [Assets](#assets)
    1. [Data](#data)
    1. [Fonts](#fonts)
    1. [Images](#images)
    1. [Media](#media)
    1. [Miscellaneous](#miscellaneous)
    1. [Vendors](#vendors)
1. [Scripts](#scripts)
1. [Styles](#styles)
    1. [BEM Structure](#bem-structure)
1. [Views](#views)
    1. [Pug Structure](#pug-structure)
    1. [Environment Variables](#environment-variables)

## Dependencies

Run: `npm cache clear && npm i && bower cache clean && bower install`

*Note: Before you can install Web Start Kit dependencies, you will need to install [Gulp](http://gulpjs.com/), [Node](https://nodejs.org/), [NPM](https://www.npmjs.com/), and [Bower](http://bower.io/).*

[back to top](#table-of-contents)

## Build

Generate a fresh build of your project. Task will run several individual tasks on files within `./src` and then output them to `./build`.

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

Start a local dev server. Additionally, gulp will watch for any changes to files and reload browser while server is running.

Run: `gulp server`

### Local URLs

* Local - http://localhost:3000
* UI - Set to `false` by default

### Options

You can modify port, proxy, and many other settings in `./gulpfile.babel.js`. For more information about BrowserSync go to [http://www.browsersync.io/](http://www.browsersync.io/).

[back to top](#table-of-contents)

## Assets

Run several individual tasks to copy static files from `./src` to `./build`.

Run: `gulp assets`

### Data

Copy data files to `./build/data`.

Run: `gulp data`

### Fonts

Copy font files to `./build/fonts`.

Run: `gulp fonts`

### Images

Copy images to `./build/images`. As a personal preference Web Starter Kit doesn't use automated image optimization. It is strongly recommended to use services like [TinyPNG](https://tinypng.com/) and [TinyJPG](https://tinyjpg.com/) to optimize images manually.

Run: `gulp images`

### Media

Copy media files to `./build/media`.

Run: `gulp media`

### Miscellaneous

Copy miscellaneous files, such as `.htaccess` or `robots.txt`, to the root of `./build`. If your project require custom settings per environment, then you can save individual files into appropriate directory within `./src/misc`.

Run: `gulp misc`

### Vendors

Bundle vendor files to `./build/vendors`. You can install new client-side vendors using Bower, then reference appropriate files in `./src/vendors/bundle.js` and `./src/vendors/bundle.min.js`. Web Starter Kit comes with jQuery example.

Run: `gulp vendors`

[back to top](#table-of-contents)

## Scripts

Run a series of sub-tasks to generate final JavaScript files. See `./gulpfile.babel.js` for reference.

*Note: Each file on the root of `./src/scripts` will be compiled to its own file in `./build/scripts`. Each file can have own includes, just like Sass with `@import` functionality. See `./src/scripts/main.js` as an example.*

Run: `gulp scripts`

[back to top](#table-of-contents)

## Styles

Run a series of sub-tasks to generate final CSS files. See `./gulpfile.babel.js` for reference.

*Note: Each file on the root of `./src/styles` will be compiled to its own file in `./build/styles`.*

Run: `gulp styles`

### BEM Structure

Web Starter Kit follows a strict naming convention using [BEM](https://en.bem.info/) methodology.

Directory structure and selector names are divided into namespaces based on [More Transparent UI Code with Namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/) article by Harry Roberts.

## Views

Run a series of sub-tasks to generate final HTML files. See `./gulpfile.babel.js` for reference.

Run: `gulp views`

### Pug Structure

Web Starter Kit follows an opinionated directory structure. To learn more about Pug go to [https://pugjs.org/api/getting-started.html/](https://pugjs.org/api/getting-started.html/).

### Environment Variables

Every Pug file has access to global `env` variable. You can use it to conditionally load unminified/minified assets. See `./src/views/includes/head.pug` as an example.

[back to top](#table-of-contents)
