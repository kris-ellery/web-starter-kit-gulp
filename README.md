# Web Starter Kit with Gulp

## Installation

* Download `master` branch
* Unpack it
* Change directory name or copy contents to your project *(including .dot files)*
* Install dev dependencies - `npm cache clear && npm i`

## Build

* Run `gulp build` or `gulp build --env=dev` (accepts `dev`, `stage`, and `prod`)

## Server

* Run `gulp server`

## Sass and Jade

Web Starter Kit follows an opinionated structure and adhere to BEM naming convention.

## JavaScript

To add and/or modify file names you'll have to edit `gulp.src` array in `./gulp_tasks/scripts.js`

## Vendors

It is up to you to add libraries or framework inside `./vendors` directory and link them from `.jade` files.
