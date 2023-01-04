"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(id, name, price, borrowDay) {
        this._id = id;
        this._name = name;
        this._price = price;
        this.borrowDay = new Date(borrowDay);
        this.returnDay = new Date(this.borrowDay.getFullYear(), this.borrowDay.getMonth(), this.borrowDay.getDate() + 7);
        this.borrowDay = this.borrowDay.toDateString();
        this.returnDay = this.returnDay.toDateString();
    }
    Book.prototype.getId = function () {
        return this._id;
    };
    Book.prototype.setId = function (value) {
        this._id = value;
    };
    Book.prototype.getName = function () {
        return this._name;
    };
    Book.prototype.setName = function (value) {
        this._name = value;
    };
    Book.prototype.getPrice = function () {
        return this._price;
    };
    Book.prototype.setPrice = function (value) {
        this._price = value;
    };
    return Book;
}());
exports.Book = Book;
