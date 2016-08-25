# nodejs-bootstrap

A simple bootstrap with basic tools to developer

## Features
### Including
  * ```.gitignore```
  * ```.eslintrc```
  * ```.editorconfig```
  * nodemon
  * babel compiler (presets: es2015, stage-1)
  * git-pre-push (run test)
  * git-pre-commit (run lint)
  * git-post-commit (run git status)

## Usage

* Scripts

  ```
    npm run dev

  ```
  run nodemon with babel compile

  ```
    npm run build

  ```
  run babel and add compiled from ```src/``` to ```build/index.js```

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
  run ```npm run lint```, ```npm run build``` and  ```mocha --compilers js:babel-register```
