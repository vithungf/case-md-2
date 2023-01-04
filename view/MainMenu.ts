import {AccountAdmin} from "../controller/AccountAdmin";
import {AdminMenu} from "./AdminMenu";
import {UserMenu} from "./UserMenu";

const readlineSync = require('readline-sync');

export class MainMenu{
    private adminMenu: AdminMenu = new AdminMenu();
    private userMenu: UserMenu = new UserMenu();

    private userManager : AccountAdmin = new AccountAdmin();
    private menu : string =`
    1.login    
    2.register
    3.exit`

    public selection():void{
        while(true){
            let choice;
            do{
                console.log(this.menu);
                choice = + readlineSync.question('choice:');
                if(choice<1 ||choice>3){
                    console.log('wrong choice.try again');
                }
            }while (choice<1||choice>3)
            switch (choice) {
                case 1:{
                    let username = readlineSync.question('username:');
                    let password = readlineSync.question('password:');
                    let status = this.userManager.login(username, password);
                    if(status==1){
                        this.userMenu.selection();

                    }else if (status==0 ){
                        this.adminMenu.selection();

                    }else {
                        console.log('wrong username or password');
                    }
                    break;
                }
                case 2:{
                    let username = readlineSync.question('username:');
                    let password = readlineSync.question('password:');
                    this.userManager.register(username, password);
                    break;
                }
                case 3:
                    return;
            }
        }
    }
}
