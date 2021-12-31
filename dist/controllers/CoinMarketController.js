"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var coinMarketController = /*#__PURE__*/function () {
  function coinMarketController() {
    _classCallCheck(this, coinMarketController);
  }

  _createClass(coinMarketController, null, [{
    key: "getAllCryptocurrencies",
    value: function getAllCryptocurrencies(req, res) {
      (0, _axios["default"])({
        method: 'GET',
        url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
        headers: {
          'X-CMC_PRO_API_KEY': process.env.COIN_MARKET_API_KEY
        }
      }).then(function (response) {
        res.send(response.data);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }]);

  return coinMarketController;
}();

var _default = coinMarketController;
exports["default"] = _default;