# oq-formatted-string

> Replace tokens from a string with values of an object. 给定键值对或对象，得到格式化字符串

```sh
$ npm install --save oq-formatted-string
```
```js
var format = require('oq-formatted-string');

format('{greeting} {thing}!', {
  greeting: 'Hello',
  thing: 'world'
});
// Hello world!
```

If you want to cache the string

```js
var formatFunc = format('{greeting} {thing}!');

formatFunc({
  greeting: 'Howdy',
  thing: 'doody'
});
// Howdy doody!
```

> This project belongs to [OpenQuest](https://github.com/OpenQuest)---A open organization concentrates on reading excellent codes from npm.org and github.com and commenting them so that everyone can understand easily. For more information, linking to [https://github.com/OpenQuest](https://github.com/OpenQuest).