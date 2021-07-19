# WEB E2E Tests 

End-to-end test automation project for demoqa. WEB application.

## Prerequisites

-   Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
-   Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Getting started

1. Clone the repository:

```
$ git clone
```

2. Install the required dependencies:

```
$ cd web-test-project
$ npm ci
```

_It's **highly recommended** to use `npm ci` instead of `npm install`_

## Running tests

You don't need to run browser by yourself because Playwright does it. All you need to do is to run:

```
$ npm run test
```

You can find all defined scripts in `package.json`.

By default tests are use `HEADLESS=true`. To change it, use another env variable: `HEADLESS=false`

