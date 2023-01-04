"use strict";
exports.__esModule = true;
exports.AdminMenu = void 0;
var ManagerBook_1 = require("../controller/ManagerBook");
var Book_1 = require("../model/Book");
var readlineSync = require('readline-sync');
var AdminMenu = /** @class */ (function () {
    function AdminMenu() {
        this.listAdminBook = new ManagerBook_1.ManagerBook();
        this.adminMenu = "\u0110\u00E2y l\u00E0 admin.\n        1.add Book\n        2.show list book\n        3.update\n        4.delete\n        5.exist";
    }
    AdminMenu.prototype.selection = function () {
        while (true) {
            var choice = void 0;
            do {
                console.log(this.adminMenu);
                var temp = 0;
                var regex = /^[1-5]$/;
                choice = +readlineSync.question('please select:');
                if (regex.test(choice)) {
                    temp = +choice;
                }
                else {
                    temp = -1;
                }
                if (choice < 1 || choice > 5) {
                    console.log('wrong choice.please select 1-5');
                }
            } while (choice < 1 || choice > 5);
            switch (choice) {
                case 1:
                    var id = +readlineSync.question('enter id:');
                    var name_1 = readlineSync.question('enter name:');
                    var price = +readlineSync.question('enter price:');
                    var borrowDay = readlineSync.question('enter borrow day: ');
                    var book = new Book_1.Book(id, name_1, price, borrowDay);
                    this.listAdminBook.add(book);
                    break;
                case 2:
                    this.listAdminBook.showAll();
                    break;
                case 3:
                    var Id = +readlineSync.question("Enter id update: ");
                    var newId = +readlineSync.question("Enter new id: ");
                    var newName = readlineSync.question("Enter new name: ");
                    var newPrice = +readlineSync.question("Enter new price: ");
                    var newBorrowDay = readlineSync.question("Enter new day:");
                    var newFood = new Book_1.Book(newId, newName, newPrice, newBorrowDay);
                    this.listAdminBook.update(Id, newFood);
                    break;
                case 4:
                    var deleteId = +readlineSync.question('Enter id you wanna delete:');
                    this.listAdminBook["delete"](deleteId);
                    break;
                case 5:
                    return;
            }
        }
    };
    return AdminMenu;
}());
exports.AdminMenu = AdminMenu;
