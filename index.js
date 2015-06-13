'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = mixins;

function mixins() {
  for (var _len = arguments.length, objects = Array(_len), _key = 0; _key < _len; _key++) {
    objects[_key] = arguments[_key];
  }

  return function (cls) {
    objects.forEach(function (object) {
      Object.keys(object).forEach(function (key) {
        if (typeof cls.prototype[key] === 'undefined') {
          cls.prototype[key] = object[key];
        }
      });
    });
  };
}

module.exports = exports['default'];

