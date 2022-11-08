let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];
let num1 = 3
let num2 = 5
let num3 = 60
let num4 = 90

const numberThree = someNumbers.some(function (number) {
    return number % num3 === 0;
})