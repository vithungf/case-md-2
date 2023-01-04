import {ManagerBook} from "../controller/ManagerBook";
import {Book} from "../model/Book";

const readlineSync = require('readline-sync');

export class AdminMenu {
    private listAdminBook :ManagerBook = new ManagerBook();
    private adminMenu = `Đây là admin.
        1.add Book
        2.show list book
        3.update
        4.delete
        5.exist`;

    selection() {
        while (true) {
            let choice;
            do {
                console.log(this.adminMenu);
                let temp: number = 0;
                let regex: RegExp = /^[1-5]$/;
                choice = +readlineSync.question('please select:');
                if (regex.test(choice)) {
                    temp = +choice
                } else {
                    temp = -1;
                }
                if (choice < 1 || choice > 5) {
                    console.log('wrong choice.please select 1-5');
                }

            }while (choice<1 || choice>5);
            switch (choice) {
                case 1:
                    let id = +readlineSync.question('enter id:');
                    let name =readlineSync.question('enter name:')
                    let price = +readlineSync.question('enter price:')
                    let borrowDay = readlineSync.question('enter borrow day: ')
                    let book = new Book(id, name, price, borrowDay);
                    this.listAdminBook.add(book);
                    break;
                case 2:
                    this.listAdminBook.showAll();
                    break;
                case 3:
                    let Id = +readlineSync.question("Enter id update: ");
                    let newId = +readlineSync.question("Enter new id: ");
                    let newName = readlineSync.question("Enter new name: ");
                    let newPrice = +readlineSync.question("Enter new price: ");
                    let newBorrowDay = readlineSync.question("Enter new day:")
                    let newFood = new Book(newId, newName, newPrice,newBorrowDay);
                    this.listAdminBook.update(Id, newFood);
                    break;
                case 4:
                    let deleteId = +readlineSync.question('Enter id you wanna delete:');
                    this.listAdminBook.delete(deleteId);
                    break;
                case 5:
                    return;
            }
        }
        }
    }
