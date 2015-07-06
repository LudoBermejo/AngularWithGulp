# Gulp and Angular Boilerplate

This is an extension based on the great tutorial: [Kickstarting angular with gulp](http://mherman.org/blog/2014/08/14/kickstarting-angular-with-gulp/#.VZrbZ3WlxBd).

It has an extra: all the gulp files are stored individually in the gulp-tasks directory.

Installation
============

First of all, you need [nodejs](https://nodejs.org/), [bower](http://bower.io/) and [gulp](http://gulpjs.com/)

After installing nodejs, you need to download this repository in any directory (let's assume it is called **angularWithGulp**).

Last thing we need to do it's to install the dependencies. *Remember to make this calls in the repository dir!*

```sh
$ npm install
$ bower install
```

Finally, you only need to call the tasks. Specially you can call:


**Default** (will lint the code and then execute the server)

```sh
$ gulp
```

**Build** (will make a dist directory with js and css minified)

```sh
$ gulp build
```
