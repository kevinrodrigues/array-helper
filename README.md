[![travis build](https://img.shields.io/travis/kevinrodrigues/array-helper.svg?style=flat-square)](https://travis-ci.org/kevinrodrigues/array-helper)
[![downloads](https://img.shields.io/npm/dm/array-helper-functions.svg?style=flat-square)](http://npm-stat.com/charts.html?package=array-helper-functions&from=2017-10-20)
[![version](https://img.shields.io/npm/v/array-helper-functions.svg?style=flat-square)](http://npm.im/array-helper-functions)
[![MIT License](https://img.shields.io/npm/l/array-helper-functions.svg?style=flat-square)](http://opensource.org/licenses/MIT)

# Array Helpers

Some helpful array methods. Spent sometime using [Underscore](http://underscorejs.org/) in a previous project so I decided to build a helper library from scratch using some ideas behind this library. :honeybee:

## Installation

This package is distributed via npm:

```javascript
npm install  --save-dev array-helper-functions

// Global install
npm install -g array-helper-functions

```

## API overview

```javascript

- filter
- flatten
- compact
- partial

```

## Usage

```javascript
const arrayHelper = require('array-helper-functions');

// filter(array, itemToFilter);
let filter = arrayHelper.filter([1, 3, 100, 50], 50); // => [1, 3, 100];

// filter(array, itemToFilter, true); Deeply i.e [1, 3, 100, [[[50]]]; passing `true` as third parameter.
let filter = arrayHelper.filter([1, 3, 100, [[[50]]], 50, true); // => [1, 3, 100];

// flatten(array);
let flatten = arrayHelper.flatten([1, 3, 100, [50]]); // => [1, 3, 100, 50];

// flatten(array, true); Deeply i.e [1, 3, 100, [[[50]]]; passing `true` as second parameter.
let flatten = arrayHelper.flatten([1, 3, 100, [[[50]]], true); // => [1, 3, 100, 50];

// compact(array); Removes Falsy values from array set.
let compact = arrayHelper.compact([1, 2, 3, 100, null, 0]); // => [1, 2, 3, 100];

// partial(func, array);
const foo = (a, b, c) => {
    return a + b + b;
};

let partial = array.partial(foo, [1, 2, 3]); // Invokes method `foo` with given arguments. => 6
```

## Project Setup

This project assumes you have [NodeJS v6](http://nodejs.org/) or greater installed. You should
also have [npm v3](https://www.npmjs.com/) or greater installed as well (this comes packaged
with Node 6). You'll also need a recent version of [git](https://git-scm.com/) installed
as well.

To get started with the project, start with this:

1. [Sign up](https://github.com/join) for a GitHub Account (if you don't already have one)
2. [Fork](https://help.github.com/articles/fork-a-repo/) this repo
3. [Clone](https://help.github.com/articles/cloning-a-repository/) your fork
4. Require the module (see `Usage` above) and get started!

If you get any failures at this point something is wrong and needs to be fixed. Remember,
[Google](https://google.com) and [StackOverflow](https://stackoverflow.com) are your friends.. :raised_hands:


## Contributing

If you'd like to play around with this library yourself please follow the steps below:

1. Clone the project from [Github](https://github.com/kevinrodrigues/array-helper) and `cd /your-path/array-helper-functions` folder
2. Run: `npm run setup` - This will run `npm install` & `npm run validate`: this will run the lint, build & test configurations for you ensuring everything is working as expected.

### Other

This library was developed by [me](https://github.com/kevinrodrigues) as a fun little project.