'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typography = require('./components/typography');

Object.defineProperty(exports, 'H1', {
  enumerable: true,
  get: function get() {
    return _typography.H1;
  }
});
Object.defineProperty(exports, 'H2', {
  enumerable: true,
  get: function get() {
    return _typography.H2;
  }
});
Object.defineProperty(exports, 'H3', {
  enumerable: true,
  get: function get() {
    return _typography.H3;
  }
});
Object.defineProperty(exports, 'H4', {
  enumerable: true,
  get: function get() {
    return _typography.H4;
  }
});

var _button = require('./components/button');

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_button).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }