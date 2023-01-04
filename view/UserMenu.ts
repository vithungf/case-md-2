import {Book} from "../model/book";
import {ManagerBook} from "../controller/ManagerBook";

const readlineSync = require('readline-sync');

export class UserMenu{
    private manager=new ManagerBook()
    private Userlist = `Đây là User 
                    1.add book
                    2.Watch the list
                    3.Delete book
                    4.Payment
                    5.Exist`;

    selection() {
        while (true) {
            let choice;
            do {
                console.log(this.Userlist);
                choice = +readlineSync.question("choice:");
                if (choice < 1 || choice > 5) {
                    console.log("wrong choice. try again")
                }
            } while (choice < 1 || choice > 5);
            switch (choice) {

                case 1:
                    let id = +readlineSync.question("Enter id: ");
                    let name = readlineSync.question("Enter name: ");
                    let price = +readlineSync.question("Enter price: ");
                    let borrowDate = readlineSync.question("Enter borrow day: ")
                    let book = new Book(id, name, price, borrowDate);
                    this.manager.add(book);
                    break;
                case 2:
                    this.manager.showAll();
                    break;
                case 3:
                    let deleteNameBook = readlineSync.question("Enter name delete: ");
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
    }
}