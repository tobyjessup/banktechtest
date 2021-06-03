'use strict'

describe("Transcation", function(){

    let transaction;
    var date = getDate()
    var deposit = 1000
    var withdrawal = 500

    it("creates a transaction", function(){
        expect(transaction()).toEqual(new Transaction)
    });

    it("includes all fields - date, withdrawal/deposit and current balance", function(){
        expect(transaction()).toHaveBeenCalledWith(date, deposit, withdrawal, balance)
    });

});