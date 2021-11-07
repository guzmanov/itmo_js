"use strict";
// JS - самостоятельный язык

// переменные (создание)
// let / const / var
// Область видимости объявленных через let/const - блок {}
// var - функция
let loginInput;

let userLogin = "its_string";
userLogin = "test";

let userAge = 26;

let pointA = 111, pointB = 222;

//отладка - trableshooting
console.log(userLogin);
console.log(pointA, pointB);
console.error("500 Status code")


// const ! - обязательно присваивается значение в момент объявления
// значение const - изменить нельзя
const MONDAY_RU = "Понедельник";
const YELLOW = "#ffff00";
const averageAge = (23 + 12) / 2;

// типы данных
// 1. string - "строки"
let text = "экранирование \"ковычек\" в строке с 'ковычками'"
console.log(text);

text = `Имя узера ${userLogin}, возраст - ${userAge}. 
4 + 5 = ${4 + 5}`;
console.log(text);

//2. number - float / int
let fontSize = 12;
let minTemp = -10.5;

//2.2 infinity
let inf = fontSize / 0;
console.log(inf);

//2.3 NaN - невозможность вычислить
let nan = text / fontSize + inf;
console.log(nan);

//3. BIGINT - для чисел произвольной длины
// у такого типа данных - n вконце
let time = 4231234231349834582394858923458923485924518473592834n;
console.log(time);

//4. BOOLEAN - 1/0 True/False
let status = true;
let check = false;

//5. NULL - ссылка на несуществующий объект / значение неизвестно
let name = null;

//6. UNDEFINED - значение не присвоено
console.log(loginInput);