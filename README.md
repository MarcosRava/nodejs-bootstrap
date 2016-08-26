# nodejs-bootstrap

A simple bootstrap with basic tools to developers

[![Dependencies Status](https://david-dm.org/marcosrava/nodejs-bootstrap.svg)](https://david-dm.org/marcosrava/nodejs-bootstrap)
[![Build Status](https://travis-ci.org/MarcosRava/nodejs-bootstrap.svg)](https://travis-ci.org/MarcosRava/nodejs-bootstrap)
[![Issue Count](https://codeclimate.com/github/MarcosRava/nodejs-bootstrap/badges/issue_count.svg)](https://codeclimate.com/github/MarcosRava/nodejs-bootstrap)
[![Test Coverage](https://codeclimate.com/github/MarcosRava/nodejs-bootstrap/badges/coverage.svg)](https://codeclimate.com/github/MarcosRava/nodejs-bootstrap/coverage)

## Features
### Including
  * ```.gitignore```
  * ```.eslintrc```
  * ```.npmignore```
  * ```.editorconfig```
  * nodemon
  * babel compiler (presets: es2015, stage-1)
  * git-pre-push (run test)
  * git-pre-commit (run lint)
  * git-post-commit (run git status)

## Installation

Clone this repository, open terminal and install dependencies

```sh
cd nodejs-bootstrap
npm install

```

## Usage

### Scripts

  ```
    npm run dev

  ```
  run nodemon and tests (importing from ```src/```) with babel compile

  ```
    npm run coverage

  ```
  run istanbul coverage and put result in ```coverage/```

  ```
    npm run build

  ```
  run lint, babel compiler and add compiled source from ```src/``` to ```build/index.js``` and coverage

  ```
    npm run climate-coverage

  ```
  run coverage and send it to [code-climate](https://codeclimate.com/) (you need to set CODECLIMATE_REPO_TOKEN as an enviroment variable)

  ```
    npm start

  ```
  run ```npm build``` and ```node build/index.js```

  ```
    npm run check-dependencies

  ```
  check dependencies vulnerabilities using [nsp](https://github.com/nodesecurity/nsp)

  ```
    npm run postinstall

  ```
  call check-dependencies, this is will be called after every package installation

  ```
    npm run lint

  ```
  run ```eslint src``` according ```.eslintrc``` file

  ```
    npm test

  ```
  run ```npm run build``` and  ```mocha --compilers js:babel-register``` using code from ```build``` folder
