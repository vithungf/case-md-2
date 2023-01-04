"use strict";
exports.__esModule = true;
exports.MainMenu = void 0;
var UserManager_1 = require("../controller/UserManager");
var AdminMenu_1 = require("./AdminMenu");
var UserMenu_1 = require("./UserMenu");
var readlineSync = require('readline-sync');
var MainMenu = /** @class */ (function () {
    function MainMenu() {
        this.adminMenu = new AdminMenu_1.AdminMenu();
        this.userMenu = new UserMenu_1.UserMenu();
        this.userManager = new UserManager_1.UserManager();
        this.menu = "\n    1.login    \n    2.register\n    3.exit";
    }
    MainMenu.prototype.selection = function () {
        while (true) {
            var choice = void 0;
            do {
                console.log(this.menu);
                choice = +readlineSync.question('choice:');
                if (choice < 1 || choice > 3) {
                    console.log('wrong choice.try again');
                }
            } while (choice < 1 || choice > 3);
            switch (choice) {
                case 1: {
                    var username = readlineSync.question('username:');
                    var password = readlineSync.question('password:');
                    var status_1 = this.userManager.login(username, password);
                    if (status_1 == 1) {
                        this.userMenu.selection();
                    }
                    else if (status_1 == 0) {
                        this.adminMenu.selection();
                    }
                    else {
                        console.log('wrong username or password');
                    }
                    break;
                }
                case 2: {
                    var username = readlineSync.question('username:');
                    var password = readlineSync.question('password:');
                    this.userManager.register(username, password);
                    break;
                }
                case 3:
                    return;
            }
        }
    };
    return MainMenu;
}());
exports.MainMenu = MainMenu;
