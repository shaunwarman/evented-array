# evented-array

[![build status](https://img.shields.io/travis/shaunwarman/evented-array.svg)](https://travis-ci.com/shaunwarman/evented-array)
[![code coverage](https://img.shields.io/codecov/c/github/shaunwarman/evented-array.svg)](https://codecov.io/gh/shaunwarman/evented-array)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/shaunwarman/evented-array.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/evented-array.svg)](https://npm.im/evented-array)

> An array with event emitter benefits

## Table of Contents
* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)

## Install

[npm][]:

```sh
npm install evented-array
```

[yarn][]:

```sh
yarn add evented-array
```


## Usage

```js
const arr = new EventedArray();

arr.events.on('item:pushed', element => {
  console.log(`item pushed ${element}`);
});

arr.push(10);
console.log(arr[0]);

> item pushed 10
> 10
```

## Contributors
| Name             | Website                   |
| ---------------- | ------------------------- |
| **Shaun Warman** | <http://shaunwarman.com>  |

## License
[MIT](LICENSE) © [Shaun Warman](https://shaunwarman.com)


##

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
