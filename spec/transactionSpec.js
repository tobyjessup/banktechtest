'use strict'

describe("Transcation", function(){
    let depositTransaction;
    let withdrawTransaction;
    // var withdraw = -50
    // deposit = 50

    beforeEach(function(){
        depositTransaction = new Transaction("18/02/2020", 50, 550);
        withdrawTransaction = new Transaction("18/02/2020", -50, 550);
      });

    it("creates a transaction", function(){
        expect(depositTransaction).toEqual(new Transaction("18/02/2020", 50, 450))
        expect(withdrawTransaction).toEqual(new Transaction("18/02/2020", -50, 450))
    });

    it("includes the date", function(){
        expect(depositTransaction.getDate()).toEqual("18/02/2020")
    });

    it("includes deposit or withdrawal amount", function(){
        expect(depositTransaction.getAmount()).toEqual(50)
        expect(withdrawTransaction.getAmount()).toEqual(-50)
    });

    it("includes the balance", function(){
        expect(depositTransaction.getBalance()).toEqual(550)
    })

    // it("includes all fields - date, withdrawal/deposit and current balance", function(){

    // });

});