/*global window */

//STEP 1

function halfNumber(number) {
    'use strict';
    var a = number / 2;
    window.console.log("Half of " + number + " is " + a);
    return a;
}
halfNumber(5);

//STEP 2
function squareNumber(number) {
    'use strict';
    var a = number * number;
    window.console.log("The result of squaring the number " + number + " is " + a);
    return a;
}
squareNumber(5);

//STEP 3
function percentOf(n1, n2) {
    'use strict';
    var a = n1 / n2 * 100;
    window.console.log(n1 + " is " + a + "% of " + n2);
    return a;
}
percentOf(5, 20);

//STEP 4
function findModulus(n1, n2) {
    'use strict';
    var a = n2 % n1;
    window.console.log(a + " is Modulus of " + n1 + " and " + n2);
    return a;
}
findModulus(4, 10);

//STEP 5
function additionOf(n1) {
    'use strict';
    var num = window.prompt("Enter" + n1 + " numbers separated by comma");
    var numArr = num.split(",").map(function (item) {
        return parseInt(item, 10);
    });

    var sum = numArr.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    });
    window.console.log("Sum of numbers: " + sum);
}
additionOf(4);