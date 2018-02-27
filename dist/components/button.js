'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    background: ', ';\n    color: ', ';\n    border-radius: 2px;\n    height: 32px;\n    width: 140px;\n    border: 0px;\n'], ['\n    background: ', ';\n    color: ', ';\n    border-radius: 2px;\n    height: 32px;\n    width: 140px;\n    border: 0px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = require('./colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.button(_templateObject, _colors.INDIGO, _colors.GRAY);