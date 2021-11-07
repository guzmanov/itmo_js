"use strict";

let arr = [2, 4, 6, 8];
let colors = ['reb', 'black', 'white', 'green', 'blue'];

console.log(arr)
console.log(colors)

// длина массива
let arrLength = colors.length;
console.log(arrLength);

// разряженный массив
let nums = [6, -7, , 8, 12, 56, , 7];
console.log(nums);

// обращение к элементам массива
colors = ['reb', 'black', 'white', 'green', 'blue'];
console.log(colors[1]);

colors[-2] = "test"
console.log(colors)

//обращение к несуществующим элементам
console.log(colors[11]) //undefined

colors[12] = 'orange'
console.log(colors)

// многомерный массив
nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(nums[0][1]);
console.log(nums[1][0]);
console.log(nums[2][1]);

//перебор массивов
// for of - для перебора массива
// или html - коллекция
// на каждом повторении в переменную elem - копируется значение каждого элементф массива
for (let elem of colors) {
    console.log(`Цвет ${elem}`);
}

nums = [3, 6, 1];
let sum = 0;

// for (let sum of nums) {
//     sum = nums[0] + nums[1] + nums[2];
//     console.log(sum)
// }

for (let num of nums) {
    sum += num;
    console.log(sum)
}

nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
sum = 0;

for (let num of nums[2]) {
        sum += num;
}
console.log(sum)

nums = [-1, 2, 3, -3, 5, 6, 4, 7, 3, 8, 9, 13, 11, 12, 14, 16, 18];
let numes = [];

for (let i of nums) {
   if (i < 0) numes.push(i);
}
console.log(numes)

for (let i = 0; i < nums.length; i++) {
    nums[i] *= nums[i];
    console.log(i)
}

for (let i = nums.length -1; i >= 0; i--) {
    if (!(nums[i] % 2)) nums.splice(i, 1);
    console.log(i)
}

// деструктуризация массива
let sizes = [18, 30];
//let height = sizes[0];
//let width = sizes[1];

let [height, width] = sizes;
console.log(height, width)

// let elemMargins = [10, 40, 20];
// let [top, rightM, boottomM, leftM] = elemMargins;

// let info = ['info', 'info', 'info', 'info'];
// let [name, surname, ...others] = info;

colors = ['reb', 'black', 'white', 'green', 'blue'];
let first = colors.shift();
let last = colors.pop();
colors.push(1, 2, 3, []);
colors.unshift(1, 2, 3, []);

console.log(first, last)
console.log(colors)

// внутреннее уебанство
let newColors = colors.slice(0, 11);
console.log(newColors)