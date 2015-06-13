# Apply mixins to your JavaScript classes

With the `mixins-decorator` modules, you get the reap the benefits of mixins.

```javascript
var mixin1 = { foo: function () { console.log('foo'); } };
var mixin2 = { bar: function () { console.log('bar'); } };

function Foo() {}

mixins(mixin1, mixin2)(Foo);

// Or, with ES6 classes

@mixins(mixin1, mixin2)
class Foo {}

var foo = new Foo();
foo.foo(); // foo
foo.bar(); // bar
```

## Usage

Install `mixins-decorator` using npm:

```shell
npm install mixins-decorator
```

Then, use it in your code like so:

```javascript
var mixins = require('mixins-decorator');

// ... Declare and define some mixins here ...

function Foo() {}

mixins(mixin1, mixin2)(Foo);
```

## License

`mixins-decorator` is [ISC Licensed](https://github.com/shovon/mixins/blob/master/LICENSE)