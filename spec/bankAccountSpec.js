'use strict';

describe("BankAccount", function(){
    let bankAccount;
    var depositAmount = 1000
    // let currentBalance;
  
    beforeEach(function(){
      bankAccount = new BankAccount;
    });

    it("creates a bank account", function(){
        expect(bankAccount).toEqual(new BankAccount)
    });

    it("account has a starting balance of 0", function(){
        expect(bankAccount.balance).toEqual(0)
      });

    it("can take deposits", function(){
        expect(bankAccount.deposit(depositAmount)).toEqual(this.balance)
    });

    it("shows current balance", function(){
        expect(bankAccount.getCurrentBalance()).toEqual(0)
    });

    });