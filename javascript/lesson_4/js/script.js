"use strict";

//Функции - объекты
let name = prompt("test test 1");

let imgWidth = parseInt(prompt("test test 2"));
console.log(imgWidth)

if (isNaN(imgWidth) || !isFinite(imgWidth)) {
    console.error("тест тест");
}

// This is Function !!!
function getSum(first, second) {
    return first + second;
}

let result = getSum(45, 67);
console.log(result)

function check(a, b) {
    if (a > b) return b;
    return a;
}

function paintBody(color='green') {
    document.body.style.background = color;

}

paintBody('gold');
paintBody();

// alert === return
function lessTest(age, name = 'guest') {
    if (age < 7 || age > 200) alert(`${name}: Пользователь бла-бла-бла`);
    else if (age < 18) alert(`${name}: Вы не можете бла-бла-бла`);
    alert(`${name} Сайт бла-бла-бла`);
}

lessTest(201, "Вася");


// переменное количество аргументов
function getAverage(...nums) {
   let sum = 0;
   for (let i of nums) {
       sum += i;
   }
   return sum;
}
console.log(getAverage(1, 2, 3, 4, 5, 6, 7, 8));
console.log(getAverage(2, 4, 6));

function getMult(a, b) {
    return a * b;
}

console.log(getMult(...[56, 67]));

// анонимная функция
let lessZero = function (num) {
    return num < 0;
}

console.log(lessZero(-1))