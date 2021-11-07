"use strict";

//Task # 1
let mas = [3, 90, 5, -100, 50, 0, 560, 1];
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
let result = mas.sort(compareNumeric);
console.log(result)

// Task # 2
function filter(text, ...i) {
    let spam = i.map(item => item.toLowerCase());
    let words = text.split(" ");
    let count = 0;
    console.log(words)
    for (let i of words) {
        if (spam.includes(i)) spam.push[i];
        count ++
    }
    return spam
    console.log(spam)
    console.log(count)

}

let test = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, tempora!";
console.log(filter(test, "dolor", "Dicta", "sit", "amet"))

// Task # 3
let numsArr = [
    [3, 5, -1, 6, 0],
    [56, -9, 111, 6],
    [11, 86, -12],
];

let newMas = [];

for (let arr of numsArr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 10;
    }
    console.log(numsArr)
}
for (let arr of numsArr) {
    for (let i = 0; i < arr.length; i++) {
        if (i > 0) newMas.push[i]
    }
    console.log(newMas)
}