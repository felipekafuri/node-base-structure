"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UsersControllers = void 0;

var _Users = require("@models/Users");

class UsersControllers {
  teste() {
    const user = new _Users.User();
  }

}

exports.UsersControllers = UsersControllers;
var _default = UsersControllers;
exports.default = _default;