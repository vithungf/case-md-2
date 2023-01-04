"use strict";
exports.__esModule = true;
exports.ManagerBook = void 0;
var ManagerBook = /** @class */ (function () {
    function ManagerBook() {
    }
    ManagerBook.prototype.add = function (item) {
        ManagerBook.listBook.push(item);
    };
    ManagerBook.prototype.update = function (id, newObject) {
        var index = this.findById(id);
        if (index == -1) {
            return "No exist";
        }
        ManagerBook.listBook.splice(index, 1, newObject);
    };
    ManagerBook.prototype["delete"] = function (id) {
        var index = this.findById(id);
        if (index == -1) {
            return "ko tồn tại";
        }
        ManagerBook.listBook.splice(index, 1);
    };
    ManagerBook.prototype.showAll = function () {
        console.table(ManagerBook.listBook);
    };
    ManagerBook.prototype.findById = function (id) {
        for (var i = 0; i < ManagerBook.listBook.length; i++) {
            if (ManagerBook.listBook[i].getId() === id) {
                return i;
            }
        }
        return -1;
    };
    ManagerBook.prototype.findByName = function (name) {
        for (var i = 0; i < ManagerBook.listBook.length; i++) {
            if (ManagerBook.listBook[i].getName() === name) {
                return i;
            }
        }
        return -1;
    };
    ManagerBook.prototype.deleteName = function (name) {
        var index = this.findByName(name);
        if (index == -1) {
            return "No exist in the menu";
        }
        ManagerBook.listBook.splice(index, 1);
    };
    ManagerBook.prototype.payment = function () {
        var sum = 0;
        for (var i = 0; i < ManagerBook.listBook.length; i++) {
            sum += ManagerBook.listBook[i].getPrice();
        }
        return sum;
    };
    ManagerBook.listBook = [];
    return ManagerBook;
}());
exports.ManagerBook = ManagerBook;
