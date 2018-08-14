# Configuring
local.js which is inside src/config folder is used for configuring application.
See local.sample.json for creation the local configuration file (local.json).

# Development
Package requires node version > 8.x.x.
To get started install the [Yarn package manager](https://yarnpkg.com/lang/en/docs/install/) on your system or use npm.

Install all dependencies using:
```sh
$ yarn install
```
Use docker-compose up for installing redis, mysql. Just run following script
```sh
$ yarn setup
```
For starting development server execute:
```sh
$ yarn serve:local
```
Open localhost:${port:in:src/config/local.json} in your browser

# Code
Style rules are enforced through [TSLint](https://palantir.github.io/tslint/usage/cli/).
To validate your code run:
```sh
$ yarn tslint
```

