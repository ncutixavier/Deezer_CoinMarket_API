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

// let redirect_uri = 'http://localhost:8005/api/v1/deezer';
// let client_uri = 'http://localhost:3000';
var redirect_uri = 'https://leave-app-sys.herokuapp.com/api/v1/deezer';
var client_uri = 'https://jammming-ncuti.netlify.app/';
var app_id = 511302;
var secret_key = '4ec83554df8ddb834eb35bd17192c2d1';

var DeezerControllers = /*#__PURE__*/function () {
  function DeezerControllers() {
    _classCallCheck(this, DeezerControllers);
  }

  _createClass(DeezerControllers, null, [{
    key: "login",
    value: function login(req, res) {
      var code = req.query.code;

      _axios["default"].get("https://connect.deezer.com/oauth/access_token.php?app_id=".concat(app_id, "&secret=").concat(secret_key, "&code=").concat(code)).then(function (response) {
        var token = response.data.match(/access_token=([^&]*)/);
        console.log(response.data);
        res.redirect("".concat(client_uri, "?token=").concat(token[1]));
      })["catch"](function (error) {
        return res.send(error);
      });
    }
  }, {
    key: "auth",
    value: function auth(req, res) {
      res.redirect("https://connect.deezer.com/oauth/auth.php?app_id=".concat(app_id, "&redirect_uri=").concat(redirect_uri, "&perms=basic_access,email,manage_library"));
    }
  }, {
    key: "search",
    value: function search(req, res) {
      var term = req.query.term;

      _axios["default"].get("https://api.deezer.com/search?q=".concat(term)).then(function (response) {
        res.send(response.data);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "getUser",
    value: function getUser(req, res) {
      var token = req.query.token;

      _axios["default"].get("https://api.deezer.com/user/me?access_token=".concat(token)).then(function (response) {
        return res.send(response.data);
      })["catch"](function (error) {
        return res.send(error);
      });
    }
  }, {
    key: "createPlaylist",
    value: function createPlaylist(req, res) {
      var user_id = req.query.userid;
      var token = req.query.token;
      var playlist_name = req.query.name;
      var songs = req.query.songs;

      _axios["default"].post("https://api.deezer.com/user/".concat(user_id, "/playlists?title=").concat(playlist_name, "&access_token=").concat(token)).then(function (response) {
        return _axios["default"].post("https://api.deezer.com/playlist/".concat(response.data.id, "/tracks?songs=").concat(songs, "&access_token=").concat(token)).then(function (response) {
          return res.send(response.data);
        })["catch"](function (error) {
          res.send(error);
        });
      })["catch"](function (error) {
        res.send(error);
      });
    }
  }]);

  return DeezerControllers;
}();

var _default = DeezerControllers;
exports["default"] = _default;