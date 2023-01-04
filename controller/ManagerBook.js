"use strict";
exports.__esModule = true;
exports.ManagerBook = void 0;
var ManagerBook = /** @class */ (function () {
    function ManagerBook() {
        this.listBook = [];
    }
    ManagerBook.prototype.add = function (item) {
        this.listBook.push(item);
    };
    ManagerBook.prototype.update = function (id, newObject) {
        var index = this.findById(id);
        if (index == -1) {
            return "No exist";
        }
        this.listBook.splice(index, 1, newObject);
    };
    ManagerBook.prototype["delete"] = function (id) {
        var index = this.findById(id);
        if (index == -1) {
            return "No exist in the menu";
        }
        this.listBook.splice(index, 1);
    };
    ManagerBook.prototype.showAll = function () {
        console.table(this.listBook);
    };
    ManagerBook.prototype.findById = function (id) {
        for (var i = 0; i < this.listBook.length; i++) {
            if (this.listBook[i].getId() === id) {
                return i;
            }
        }
        return -1;
    };
    ManagerBook.prototype.findByName = function (name) {
        for (var i = 0; i < this.listBook.length; i++) {
            if (this.listBook[i].getName() === name) {
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
        this.listBook.splice(index, 1);
    };
    ManagerBook.prototype.payment = function () {
        var sum = 0;
        for (var i = 0; i < this.listBook.length; i++) {
            sum += this.listBook[i].getPrice();
        }
        return sum;
    };
    return ManagerBook;
}());
exports.ManagerBook = ManagerBook;
