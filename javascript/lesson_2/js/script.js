"use strict";

let userNum = prompt("Введите число");
userNum = parseInt(userNum);

if (userNum  === 0) {
    console.log('true');
} else if (userNum === 1) {
    console.log('false');
} else {
    console.log('Error')
}

//пример в одну строку
if (userNum  === 0) console.log('true');

// @
if (userNum) {
    console.log("Text text");
}

// логические операторы
let a = 45;
let b = 20;
let c = 30;

// &&
console.log(a < c && b > a);

// ||
console.log(c > a || a < b);

// switch
let sum = 1000, code = 9052;
switch (code) {
    case 3425:
        console.log(sum * 0.7);
        break;
    case 2354:
    case 9052:
        console.log(sum * 0.8);
        break;
    case 5646:
    case 8989:
    case 1122:
        console.log(sum * 0.9);
        break;
    default:
        console.log("default" + sum);
}

let month = "";
switch (month) {
    case декабрь:
    case январь:
    case февраль:
        console.log("зима");
        break;
    case март:
    case апрель:
    case май:
        console.log("весна");
        break;
}

if (month === "январь" || month === "февраль" || month === "декабрь") {
    console.log("зима");
} else if (month === "март" || month === "апрель" || month === "май") {
    console.log("весна")
} else if (month === "июня" || month === "июль" || month === "август") {
    console.log("лето")
}