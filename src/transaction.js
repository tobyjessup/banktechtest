'use strict'

class Transaction{


    constructor(date = new getDate().toLocaleDateString(), amount){
        this.date = date
        this.amount = amount
    };

    getDate(){
        console.log(this.date);
        return this.date;
    };

    getAmount(){
        return this.amount;
    };
};