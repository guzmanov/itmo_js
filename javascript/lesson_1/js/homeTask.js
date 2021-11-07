"use strict";

//Task # 1
let heightParal = 3;
let lengthParal = 4;
let widthParal = 5;

let result = parseInt((heightParal * lengthParal) + (heightParal * widthParal) + (lengthParal * widthParal)) * 2;
console.log(result)

function area(a, b, c) {
    return parseInt((a * b) + (b * c) + (a * c)) * 2;
}
console.log(area(6, 7, 8))

//Task # 2
function getSum(x){
    let number = ("" + x).split("");
    let sum = 0;
    for( let i = 0; i < number.length; i++ ) {
        sum += Number(number[i]);
    }
    return sum

}
console.log(getSum(111111111111111111111))

//Task # 3
function recursion(a, b) {
    let sum = a + b;
    a = sum - a;
    b = sum - b;
    console.log(a, b)
}
recursion(7, 3)
