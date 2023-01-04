


import {ManagerInterface} from "./ManagerInterface";

import {Book} from "../model/book";

export class ManagerBook implements ManagerInterface {
      static listBook: Book[] = [];

    add(item:Book): void {
        ManagerBook.listBook.push(item);
    }

    update(id: number, newObject: Book) {
        let index = this.findById(id);
        if (index == -1) {
            return "No exist";
        }
        ManagerBook.listBook.splice(index, 1, newObject);
    }

    delete(id: any) {
        let index = this.findById(id);
        if (index == -1) {
            return "No exist in the menu";
        }
        ManagerBook.listBook.splice(index, 1);
    }

    showAll() {
        console.table(ManagerBook.listBook);
    }

    findById(id: number) {
        for (let i = 0; i < ManagerBook.listBook.length; i++) {
            if (ManagerBook.listBook[i].getId() === id) {
                return i;
            }
        }
        return -1;
    }

    findByName(name: string) {
        for (let i = 0; i < ManagerBook.listBook.length; i++) {
            if (ManagerBook.listBook[i].getName() === name) {
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
        ManagerBook.listBook.splice(index, 1);
    }

    payment() {
        let sum = 0;
        for (let i = 0; i < ManagerBook.listBook.length; i++) {
            sum += ManagerBook.listBook[i].getPrice();
        }
        return sum;
    }
}
