'use strict'

class BankAccount{
    constructor() {
    this.balance = 0

    };

getCurrentBalance(){
    return this.balance;
};

deposit(amount){
    this.balance += amount
};

withdraw(amount){
    this.balance -= amount
};



}