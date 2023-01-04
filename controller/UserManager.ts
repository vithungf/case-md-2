import {ManagerBook} from "./ManagerBook";

const readlineSync = require('readline-sync');
export class UserManager{
    userManager=[];
    order(id:number){
        for(let i=0;i<ManagerBook.listBook.length;i++){
            if(ManagerBook.listBook[i].getId()==id){
                this.userManager.push(ManagerBook.listBook[i])
            }
        }
    }
    showListOrder(){
        return this.userManager;
    }
    deleteOrder(name:string){
        let index=this.findByName(name);
        if(index== -1){
            console.log("No food name!");
        }else{
            this.userManager.splice(index,1)
        }
    }
    findByName(name: string) {
        for (let i = 0; i <this.userManager.length; i++) {
            if (this.userManager[i].getName() === name) {
                return i;
            }
        }
        return -1;
    }
    payment() {
        let total = 0;
        for (let i = 0; i <this.userManager.length; i++) {
            total +=this.userManager[i].getPrice();
        }
        return total;
    }
}