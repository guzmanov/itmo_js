"use strict";

//Task # 1
function task(count){
    if (count >= 90) console.log('ОТЛИЧНО!');
    else if (count > 60) console.log('ХОРОШО!');
    else if (count > 40) console.log('удовлетворительно!');
    else if (count > 0) console.log('попробуйте еще раз!');
}
task(100);
task(70);
task(55);
task(20);

//Task # 2
let value1 = prompt("введите числа 1")
let value2 = prompt("введите числа 2")
let operant = prompt("сложение / вычитание / умножение / деление")
switch (operant) {
    case '+':
        console.log(parseInt(value1) + parseInt(value2));
        break;
    case '-':
        console.log(parseInt(value1) - parseInt(value2));
        break;
    case '*':
        console.log(parseInt(value1) * parseInt(value2));
        break;
    case '/':
        console.log(parseInt(value1) / parseInt(value2));
        break;
}

//Task # 3
let plate = prompt("введите колличество тарелок:")
let fairy = prompt("введите колличество моющ средств:")
while (plate > 0 && fairy > 0) {
    plate--;
    fairy -= .5;
    console.log("Моющего средства осталось: " + fairy);
}
if (plate === 0) {
    console.log("Все тарелки вымыты. Моющего средства осталось: " + fairy)
} else {
    console.log("Моющее средство закончилось. Не вымытых тарелок осталось: " + plate)
}


//Task # 4
let sicretNum = Math.floor(Math.random() * 9) + 1;
let userNum = parseInt(prompt("Введите число"))
while (1) {
    if (userNum === 0) {
        console.log("Выход из программы");
        break;
    }
    else if (sicretNum > userNum) {
        console.log("Загаданное число больше");
        break;
    }
    else if (sicretNum < userNum) {
        console.log("Загаданное число меньше");
        break;
    }
    else if (sicretNum === userNum) {
        console.log("Вы угадали!");
        break;
    }
}