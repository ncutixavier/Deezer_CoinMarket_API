"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swagger = _interopRequireDefault(require("../swagger.json"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _UserRoute = _interopRequireDefault(require("./routes/UserRoute"));

var _DeezerRoutes = _interopRequireDefault(require("./routes/DeezerRoutes"));

var _CoinMarketRoute = _interopRequireDefault(require("./routes/CoinMarketRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use((0, _morgan["default"])('tiny'));
app.use((0, _cors["default"])());
app.get('/', function (req, res) {
  res.status(200).json({
    message: 'Welcome!'
  });
});
app.use('/api-docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"]));
app.use('/api/v1/users', _UserRoute["default"]);
app.use('/api/v1/deezer', _DeezerRoutes["default"]);
app.use('/api/v1/coinmarket', _CoinMarketRoute["default"]);

_mongoose["default"].connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log('DB Connected✔️');
})["catch"](function (err) {
  return console.log(err);
});

var PORT = process.env.PORT || 8005;
app.listen(PORT, function () {
  console.log("App is running on port ".concat(PORT));
});
var _default = app;
exports["default"] = _default;