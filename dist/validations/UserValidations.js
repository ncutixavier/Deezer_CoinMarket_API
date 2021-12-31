"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userValidation = function userValidation(req, res, next) {
  var validation = _joi["default"].object({
    name: _joi["default"].string().required(),
    email: _joi["default"].string().email().required(),
    password: _joi["default"].string().min(7).required().strict(),
    gender: _joi["default"].string().required(),
    title: _joi["default"].string().required(),
    department: _joi["default"].string().required(),
    phone: _joi["default"].number().required()
  });

  var result = validation.validate(req.body);
  if (result.error) return res.status(400).json({
    message: result.error.details[0].message
  });
  next();
};

var _default = userValidation;
exports["default"] = _default;