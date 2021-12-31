"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    "default": 'user'
  },
  updated: {
    type: Date,
    "default": Date.now
  }
});

var User = _mongoose["default"].model('User', userSchema);

var _default = User; // let user = {
//   name: "Ncuti Xavier",
//   email: "ncuti60@gmail.com",
//   phone: 783573335,
//   title: "Developer",
//   gender: "male",
//   department: "IT"
// }

exports["default"] = _default;