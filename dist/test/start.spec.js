"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _chai = require("chai");

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('GET /', function () {
  it('Welcome Endpoint', function (done) {
    (0, _supertest["default"])(_index["default"]).get('/').end(function (err, res) {
      (0, _chai.expect)(res.body).to.have.property("message");
    });
    done();
  });
});