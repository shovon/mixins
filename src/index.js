export default function mixins(...objects) {
  return function (cls) {
    objects.forEach(function (object) {
      Object.keys(object).forEach(function (key) {
        if (typeof cls.prototype[key] === 'undefined') {
          cls.prototype[key] = object[key];
        }
      });
    });
  }
}
