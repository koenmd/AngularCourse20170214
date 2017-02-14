import { Calculator } from './calculator';

describe("calculator", function() {

    it("should calculate the sum of two numbers", function() {

        var calc = new Calculator();

        var result = calc.calculateSum(5,6);

        expect(result).toBe(11);

    });


});