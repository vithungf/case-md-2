"use strict";
exports.__esModule = true;
exports.AdminManager = void 0;
var User_1 = require("../model/User");
var AdminManager = /** @class */ (function () {
    function AdminManager() {
        this.userList = [];
        this.userList.push(new User_1.User('hung.beo', '123', 0));
        this.userList.push(new User_1.User('vit.hung', '123', 0));
    }
    AdminManager.prototype.register = function (username, password) {
        this.userList.push(new User_1.User(username, password, 1));
    };
    AdminManager.prototype.login = function (username, password) {
        var index = -1;
        this.userList.map(function (user) {
            if (user.getUsername() === username && user.getPassword() === password) {
                index = user.getRole();
                return;
            }
        });
        return index;
    };
    return AdminManager;
}());
exports.AdminManager = AdminManager;
