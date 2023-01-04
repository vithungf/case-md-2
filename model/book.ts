export  class Book{
    private _id : number;
    private _name : string;

    private _price : number;
    private borrowDay: Date | string
    private returnDay: Date | string


    constructor(id : number, name : string,price: number, borrowDay: string){
        this._id = id;
        this._name = name;
        this._price = price;
        this.borrowDay = new Date(borrowDay);
        this.returnDay = new Date(this.borrowDay.getFullYear(), this.borrowDay.getMonth(), this.borrowDay.getDate() + 7);
        this.borrowDay = this.borrowDay.toDateString()
        this.returnDay = this.returnDay.toDateString()
    }


    getId(): number {
        return this._id;
    }

    setId(value: number) {
        this._id = value;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getPrice(): number {
        return this._price;
    }

    setPrice(value: number) {
        this._price = value;
    }
}