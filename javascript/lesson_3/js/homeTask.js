"use strict";

//Task # 1
let nums = [
    [23, 56, 75, -90, 123],
    [17, 0, -6429, -122],
    [19, 86, 55, -3, 900, 0, 0],
    [4, 9, -2]
];
let summ = 0;
let count = 0;

for (let arr of nums) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 10;
        summ += arr[i];
        count++;
    }
}
let result = summ/count;

console.log(nums);
console.log(result);

// Task # 2
let mas = []
for (let i = 0; i < 7; i++) {
    mas[i] = Math.floor(Math.random() * (301 - 5)) + 5;
}
console.log(mas);

let min = mas[0];
let max = min;
for (let i = 1; i < mas.length; ++i) {
    if (mas[i] > max) max = mas[i];
    if (mas[i] < min) min = mas[i];
}

let indexMin = mas.indexOf(min);
let indexMax = mas.indexOf(max);


mas[indexMin] = max;
mas[indexMax] = min;

console.log(mas);


// Task # 3
let oldMas = [-2, -3, -4, -5, 2, -8, 1, 23, -53, -16, 9];
let newMas = [];
for (let i = 0; i < oldMas.length; i++) {
    if (oldMas[i] < 0) {
        newMas.push(oldMas[i]);
        oldMas.splice(i, 1);
        i--;
    }
}
console.log(oldMas)
console.log(newMas)

// Task # 4
let login = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];
let userLogin;
while (!login.includes(userLogin)) {
    userLogin = prompt("Введите логин");
}
console.log(login)
console.log(userLogin)

// Task # 5
userLogin = prompt("Enter Login: ")
while (login.includes(userLogin)) {
    userLogin = prompt("Enter new Login");
}
login.push(userLogin)
console.log(login)
console.log(userLogin)


