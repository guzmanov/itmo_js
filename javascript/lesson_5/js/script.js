"use strict";

// анонимные функции


function sum() {
    return a + b;
}

function sum(a, b) {
    return x + y;
}

// lesson_5
let lessZero = function (num){ //
    return num < 0; // проверяем на отрицательные числа (true/falshe)
};
function createArr (func, ...nums) {
    let arr = [];
    for (let elem of nums) { //перебор поступающего массива
        if (func(elem)) arr.push(elem); //если true - push
    }
    return arr;
}

createArr(lessZero, 56, -2, 34, -23, 42, 423)

//хз
let str = 'text';
function addText(someText) {
    str += someText;
    return str;
}
addText('строка')
console.log(addText())

//хз2 функция ищем значение в других переменных //ебаторика
let first = 900;
function outer() {
    let second = 9;
    function inner(){
        console.log(second + first);
    }
    inner();
}

//хз4
function div(a, b) {
    if (!b) return a; //  проверка b на  true
    return a / b;
}

console.log(div('test', 0))

//хз5 //ебаторика #2 // тут про замыкание рассказывали
function add(x) {
    let addValue = x;
    return function (num) {
        return addValue + num;
    }
}

let addFunc = add(10)
console.log(add(9))
console.log(addFunc(25))

//хз6 - вроде тут стрелочные функции
let oldSqrt = function (x) {
    return x * x;
};

let oldDouble = function (x) {
    return x * 2;
};

//анонимные - стрелочные функции
let sqrt = x => x * x;
let double = x => x * 2;
let printTitle = (element, text) => {
    if (text.length < 3) return;
    element.innerText = text.toUpperCase();
    console.log(element)
};

printTitle(document.body, `${sqrt(25)}; ${double(56)}`); //`${sqrt(25)}; ${double(56)}` 'Test test test'

//хз7 - какая то магия //
function updateArr(arr, func) {
    for (let i=0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }
}

let prices = [300, 500, 700, 900];
let addCur = num => `${num} руб`;
// let text = num => `Стоимость: ${num}`;
updateArr(prices, addCur); // тут в массив уже добавлены ебучие рубли
console.log(prices)

updateArr(prices, num => `Стоимость: ${num}`) // функция поверх функции (стрелочная хуйня)
console.log(prices)

// объекты (массивы / функции) - передаются по ссылке.
// остальные типы (числа / строки / булевый тип / и тд) - передаются по значению
