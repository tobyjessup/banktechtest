'use strict'

class Transaction{


    constructor(date = new getDate().toLocaleDateString(), amount, balance){
        this.date = date
        this.amount = amount
        this.balance = balance
    };

    getDate(){
        console.log(this.date);
        return this.date;
    };

    getAmount(){
        return this.amount;
    };

    getBalance(){
        return this.balance;
    };
};