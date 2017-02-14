"use strict";
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.calculateSum = function (a, b) {
        return a + b + 1;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
