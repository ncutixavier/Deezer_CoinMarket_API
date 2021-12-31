"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _CoinMarketControllers = _interopRequireDefault(require("../controllers/CoinMarketControllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', _CoinMarketControllers["default"].getAllCryptocurrencies);
var _default = router;
exports["default"] = _default;