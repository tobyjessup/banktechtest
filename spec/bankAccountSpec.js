'use strict';

describe("BankAccount", function(){
    let bankAccount;
  
    beforeEach(function(){
      bankAccount = new BankAccount;
    });

    it("creates a bank account", function(){
        expect(bankAccount).toEqual(new BankAccount)
    });

    it("account has a starting balance of 0", function(){
        expect(bankAccount.getCurrentBalance()).toEqual(0)
      });

    });