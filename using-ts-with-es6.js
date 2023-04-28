var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var numbers1 = [1, 2, 3, 4, 5];
var numbers2 = [6, 7, 8, 9];
var numbers = __spreadArray(__spreadArray([], numbers1, true), numbers2, true);
var squared = function (n) { return n * n; };
var squares = numbers.map(squared);
var isEven = function (n) {
    if (n % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};
var evenSquares = squares.filter(function (n) { return isEven(n); });
var firstEvenSquare = evenSquares[0];
var secondEvenSquare = evenSquares[1];
console.log("Numbers: ".concat(numbers, "\nSquares: ").concat(squares, "\nEven Squares: ").concat(evenSquares, "\nExtracted Numbers: ").concat(firstEvenSquare, ",").concat(secondEvenSquare));
