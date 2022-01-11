"use strict";
// 1
let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50 },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

function task(goods, from, to){
    if(typeof(goods) != 'object') return false;
    if(typeof(from) != 'number' || typeof(to) != 'number') return false;

    let obj = {};

    for (let i in goods) {
        if (goods[i].price >= from && goods[i].price < to) {
            obj[i] = goods[i];
        }
    }
    return obj
}

console.log(task(goods, 1300, 3500));

// 2
function homeTask(goods, title, countToCart){
    if(typeof(goods) != 'object' || typeof(title) != "string" || typeof(countToCart) != "number") return false;
    if (goods[title]['count'] - countToCart < 0) return false;
    goods[title]['count'] -= countToCart;
    return true;
}

console.log(homeTask(goods, "harp", 500));
console.log(homeTask(goods, "guitar", 39));

// 3
let books = [
    { author: 'Пушкин', title: 'Пир во время чумы'},
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Лермонтов', title: 'Тамань'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'},
    { author: 'Пушкин', title: 'Руслан и Людмила'},
    { author: 'Лермонтов', title: 'И скучно, и грустно'},
];

function checkBooks(books, author) {
    let result = [];
    for (let i of books) {
        if(i.author === author) result.push(i.title);
    }
    return result;
}

console.log(checkBooks(books, 'Пушкин'))

