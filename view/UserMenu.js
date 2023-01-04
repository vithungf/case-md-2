"use strict";
exports.__esModule = true;
exports.UserMenu = void 0;
var book_1 = require("../model/book");
var ManagerBook_1 = require("../controller/ManagerBook");
var readlineSync = require('readline-sync');
var UserMenu = /** @class */ (function () {
    function UserMenu() {
        this.manager = new ManagerBook_1.ManagerBook();
        this.Userlist = "\u0110\u00E2y l\u00E0 User \n                    1.add book\n                    2.Watch the list\n                    3.Delete book\n                    4.Payment\n                    5.Exist";
    }
    UserMenu.prototype.selection = function () {
        while (true) {
            var choice = void 0;
            do {
                console.log(this.Userlist);
                choice = +readlineSync.question("choice:");
                if (choice < 1 || choice > 5) {
                    console.log("wrong choice. try again");
                }
            } while (choice < 1 || choice > 5);
            switch (choice) {
                case 1:
                    var id = +readlineSync.question("Enter id: ");
                    var name_1 = readlineSync.question("Enter name: ");
                    var price = +readlineSync.question("Enter price: ");
                    var borrowDate = readlineSync.question("Enter borrow day: ");
                    var book = new book_1.Book(id, name_1, price, borrowDate);
                    this.manager.add(book);
                    break;
                case 2:
                    this.manager.showAll();
                    break;
                case 3:
                    var deleteNameBook = readlineSync.question("Enter name delete: ");
                    this.manager.deleteName(deleteNameBook);
                    break;
                case 4:
                    console.log("Total money: " + this.manager.payment());
                    break;
                case 5:
                    return;
                default:
                    break;
            }
        }
    };
    return UserMenu;
}());
exports.UserMenu = UserMenu;
