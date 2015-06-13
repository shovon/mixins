import mixins from './src';
import expect from 'expect.js';

describe('mixins', function () {
  it('should apply a single mixin to a constructor', function () {
    function Foo() {}

    var mixin = { foo: function () { return 'foo'; } };

    mixins(mixin)(Foo);

    expect(Foo.prototype.foo()).to.be('foo');
  });

  it('should apply a single mixin to a class', function () {
    var mixin = { foo: function () { return 'foo'; } };

    @mixins(mixin)
    class Foo {}

    expect(Foo.prototype.foo()).to.be('foo');
  });

  it('should apply multiple mixins to a constructor', function () {
    function Foo() {}

    var mixin1 = { foo: function () { return 'foo'; } };
    var mixin2 = { bar: function () { return 'bar'; } };

    mixins(mixin1, mixin2)(Foo);

    expect(Foo.prototype.foo()).to.be('foo');
    expect(Foo.prototype.bar()).to.be('bar');
  });

  it('should apply multiple mixins to a class', function () {
    var mixin1 = { foo: function () { return 'foo'; } };
    var mixin2 = { bar: function () { return 'bar'; } };

    @mixins(mixin1, mixin2)
    class Foo {}

    expect(Foo.prototype.foo()).to.be('foo');
    expect(Foo.prototype.bar()).to.be('bar');
  });

  it('a single mixin should not modify the prototype', function () {
    var mixin = { foo: function () { return 'troll'; } };

    function Foo() {}

    mixins(mixin)(Foo);

    Foo.prototype.foo = function () { return 'foo'; };

    expect(Foo.prototype.foo()).to.be('foo');
  });

  it('a single mixin should not modify the class methods', function () {
    var mixin = { foo: function () { return 'troll'; } }

    @mixins(mixin)
    class Foo {
      foo() { return 'foo'; }
    }

    expect(Foo.prototype.foo()).to.be('foo');
  });

  it('multiple mixins should not modify the prototype', function () {
    var mixin1 = { foo: function () { return 'troll1'; } };
    var mixin2 = { foo: function () { return 'troll2'; } };

    function Foo() {}

    mixins(mixin1, mixin2)(Foo);

    Foo.prototype.foo = function () { return 'foo'; }

    expect(Foo.prototype.foo()).to.be('foo');
  });

  it('multiple mixins should not modify the class methods', function () {
    var mixin1 = { foo: function () { return 'troll1'; } };
    var mixin2 = { foo: function () { return 'troll2'; } };

    @mixins(mixin1, mixin2)
    class Foo {
      foo() { return 'foo'; }
    }

    expect(Foo.prototype.foo()).to.be('foo');
  });
});