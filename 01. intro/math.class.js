"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mathematics = void 0;
var Mathematics = /** @class */ (function () {
    function Mathematics() {
    }
    Mathematics.prototype.sum = function (number1, number2) {
        return number1 + number2;
    };
    Mathematics.prototype.sub = function (number1, number2) {
        return number1 - number2;
    };
    Mathematics.prototype.mul = function (number1, number2) {
        return number1 * number2;
    };
    Mathematics.prototype.div = function (number1, number2) {
        return number1 / number2;
    };
    return Mathematics;
}());
exports.Mathematics = Mathematics;
