'use strict'
const StringSplosion = require("../StringSplosion.js");
describe(" String splosion", function(){

    it("should manipulate the string", function(){
        var stringSplosion = new StringSplosion("Code");
        expect(stringSplosion.manipulate()).toEqual("CCoCodCode");
    });

    it("should manipulate the string not return the expected result, 1.", function(){
        var stringSplosion = new StringSplosion("Code");
        var functionString = stringSplosion.manipulate.toString();
        expect(stringSplosion.manipulate()).toEqual("CCoCodCode");
        expect(functionString.indexOf('CCoCodCode')).toBe(-1);
    });

    it("should manipulate a second time", function(){
        var stringSplosion = new StringSplosion("abc");
        expect( stringSplosion.manipulate()).toEqual("aababc");
    });

    it("should manipulate a third time", function(){
        var stringSplosion = new StringSplosion("andela");
        var functionString = stringSplosion.manipulate.toString();
        expect(stringSplosion.manipulate()).toEqual("aanandandeandelandela");
    });

     it("should manipulate the string not return the expected result, 2.", function(){
        var stringSplosion = new StringSplosion("andela");
        var functionString = stringSplosion.manipulate.toString();
        expect( stringSplosion.manipulate()).toEqual("aanandandeandelandela");
        expect(functionString.indexOf('aanandandeandelandela')).toBe(-1);
    });
});