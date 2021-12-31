"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _UserController = _interopRequireDefault(require("../controllers/UserController"));

var _UserValidations = _interopRequireDefault(require("../validations/UserValidations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/register', _UserValidations["default"], _UserController["default"].registerUser);
var _default = router;
exports["default"] = _default;