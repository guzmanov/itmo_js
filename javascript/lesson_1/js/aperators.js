"use strict";

let numInSrt = '12';
let num = +numInSrt;

let width = '45px';
let number = parseInt(width) * 2;
console.log(number);

let htmlForm = '2.5rem';
let miniFont = parseFloat(htmlForm) - 1;
console.log(miniFont)

// конкатенация строк
let fontInfo = 'Размер шрифта : ' + miniFont;
console.log(fontInfo + typeof(fontInfo))

let n = 10;
n = n + 10;
console.log(n)

//операторы сравнения 
const MIN_LENGTH = 10;
const MAX_LENGTH = 30;
let str = 14;

console.log(MAX_LENGTH > str);
console.log(MIN_LENGTH > MAX_LENGTH);
