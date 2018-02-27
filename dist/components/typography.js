'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H4 = exports.H3 = exports.H2 = exports.H1 = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 30px;\n  color: ', ';\n'], ['\n  font-size: 30px;\n  color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 24px;\n'], ['\n  font-size: 24px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: 18px;\n'], ['\n  font-size: 18px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-size: 18px;\n  color: ', ';\n'], ['\n  font-size: 18px;\n  color: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = require('./colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H1 = exports.H1 = _styledComponents2.default.h1(_templateObject, _colors.ROSE);
var H2 = exports.H2 = H1.withComponent('h2').extend(_templateObject2);
var H3 = exports.H3 = H1.withComponent('h3').extend(_templateObject3);
var H4 = exports.H4 = H1.withComponent('h4').extend(_templateObject4, _colors.INDIGO);