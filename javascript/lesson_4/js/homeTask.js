"use strict";

//Task # 1
function prod(count) {
    if (count >= 11 && count <= 14) return `${count} товаров`;
    else if (count % 10 == 1) return `${count} товар`;
    else if (count % 10 >= 2 && count % 10 <= 4) return `${count} товарa`;
    return `${count} товаров`

}
console.log(prod(1));
console.log(prod(12));
console.log(prod(22));
console.log(prod(123));
console.log(prod(97));

// Task # 2
function range(start, end, step = 1) {
    let result = [];
    for (let i = start; i <= end; i += step) {
        result.push(i);
    }
    return result;
}
console.log(range(1, 100));

// Task # 3
let a = 123;
function isNumber(num) {
    return typeof num === 'number';
}
console.log(typeof(a))
console.log(a)
console.log(isNumber(a));
