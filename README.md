# interview-process
Display potential interview candiates and move them through the various stages of the interview

## Requirements
For development, you will only need Node.js installed on your environement. Only visually tested on latest version of Chrome and Firefox

### Yarn
Recommended to use [Yarn](https://yarnpkg.com/en/docs/install#mac-stable) rather than npm as all instructions will be written with yarn.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure below.

    $ node --version
    v10.13.0

    $ npm --version
    6.4.1

---
## Install

    $ git clone git+https://github.com/wroughtec/interview-process.git
    $ cd interview-process
    $ yarn

## Run locally

    $ yarn dev

This will run a server on `localhost:1234` and create a folder called `dist` in the root of the repo (it is ignored). Any changes you make the files will be rebuilt

## Build for production

@TODO

## Tests

To run the tests

    $ yarn test

---
## TODOS
- Improve tests arround local storage
- Improve integration tests around filter
---

## Languages & tools


### JavaScript

- [Eslint](https://eslint.org/) used to help prevent JavaScript errors.
- [Parcel](https://parceljs.org/) to handle the bundling and running of the server
- [Prettier](https://github.com/prettier/prettier) keeps our code correctl formatted.
- [React](https://reactjs.org/) library used to build the UI

### CSS
- [Stylelint](https://github.com/stylelint/stylelint) is used to prevent CSS errors
