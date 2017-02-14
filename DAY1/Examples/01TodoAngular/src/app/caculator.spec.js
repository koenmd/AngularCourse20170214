"use strict";
var calculator_1 = require('./calculator');
describe("calculator", function () {
    it("should calculate the sum of two numbers", function () {
        var calc = new calculator_1.Calculator();
        var result = calc.calculateSum(5, 6);
        expect(result).toBe(11);
    });
});
