"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _DeezerControllers = _interopRequireDefault(require("../controllers/DeezerControllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', _DeezerControllers["default"].login);
router.get('/auth', _DeezerControllers["default"].auth);
router.get('/search', _DeezerControllers["default"].search);
router.get('/profile', _DeezerControllers["default"].getUser);
router.post('/playlist', _DeezerControllers["default"].createPlaylist);
var _default = router;
exports["default"] = _default;