


import {ManagerInterface} from "./ManagerInterface";

import {Book} from "../model/book";

export class ManagerBook implements ManagerInterface {
    private listBook: Book[] = [];

    add(item:Book): void {
        this.listBook.push(item);
    }

    update(id: number, newObject: Book) {
        let index = this.findById(id);
        if (index == -1) {
            return "No exist";
        }
        this.listBook.splice(index, 1, newObject);
    }

    delete(id: any) {
        let index = this.findById(id);
        if (index == -1) {
            return "No exist in the menu";
        }
        this.listBook.splice(index, 1);
    }

    showAll() {
        console.table(this.listBook);
    }

    findById(id: number) {
        for (let i = 0; i < this.listBook.length; i++) {
            if (this.listBook[i].getId() === id) {
                return i;
            }
        }
        return -1;
    }

    findByName(name: string) {
        for (let i = 0; i < this.listBook.length; i++) {
            if (this.listBook[i].getName() === name) {
                return i;
            }
        }
        return -1;
    }

    deleteName(name: string) {
        let index = this.findByName(name);
        if (index == -1) {
            return "No exist in the menu";
        }
        this.listBook.splice(index, 1);
    }

    payment() {
        let sum = 0;
        for (let i = 0; i < this.listBook.length; i++) {
            sum += this.listBook[i].getPrice();
        }
        return sum;
    }
}
