'use strict'
function BankAccount() {
    this.balance = 0;
    this.transactions = [];
  }

  BankAccount.prototype.getCurrentBalance = function () {
    return this.balance;
  };

  BankAccount.prototype.getDate = function () {
    this.date
    this.transactions.push(date);
  };

  BankAccount.prototype.deposit = function (amount, date, balance) {
    this.balance += amount
    this.transactions.push(new Date().toLocaleDateString());
    this.transactions.push('+' + amount);
    this.transactions.push(this.balance)
  };

  BankAccount.prototype.withdraw = function (amount, date, balance) {
    this.balance -= amount
    this.transactions.push(new Date().toLocaleDateString());
    this.transactions.push('-' + amount);
    this.transactions.push(this.balance)
  };

  BankAccount.prototype.getAllTransactions = function () {
    this.transactions.forEach(function (transaction) {
        console.log(transaction);
  })
  
};