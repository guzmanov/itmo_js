"use strict";

// примитивные типы данных - не является объектами
// ЭТО: строки, числа, логические, null, undefiend, symbol
// str.toUpperCase();
// str.length();

// объекты (массивы / функции)
// объект.свойство / объект['свойство'] - доступ к свойству
// обект.метод() -  вызов метода объекта

let userData = {
    test: "test"
};
// добавление в объект свойст name / age
userData.name = "Timy";
userData.age = 18;

// favorite colors - добавление с пробелом
userData["favorite colors"] = ["red", "green", "black"];

for (let i of userData["favorite colors"]) {
    console.log(i);
}

console.log(userData.age);
console.log(userData.sh); // undefiend

// проверка на наличие свойства в объекте
// если undefined - to "default.svg"
// 1
if (userData.sh === undefined) userData.sh = "default.svg";


// 2
// не найдет гитхабЛинк и создаст свойство со значением НУЛЛ
if (!("githubLink" in userData)) userData.githubLink = null;

userData.photo = null;

let jsBook = {
    title: "JavaScript",
    pageCount: 780,
    autrhor: "Guzman",
    test: "test"
};

let cssBook = {
    title: "CSS 3",
    pageCount: 1200,
};

userData.likeBooks = [jsBook, cssBook];
console.log(userData.likeBooks[0].autrhor); // обращение к вложенности объекта

// перебор обекта (for...in / for...of / while)
// обекты перебираются через (fot...in)
// (for...of) - для массивов

// в кажой итерации в переменую [i] - будет копироваться название свойства.
for (let i in cssBook) {
    console.log(`ЭТА СВОЙСТВА: ${i} С ЗНАЧЕНИЕМ ${cssBook[i]}`);
}

for (let book of userData.likeBooks) {
    if (book.pageCount > 1000) console.log(book.title);
}

let messages = [
    {
        text: "vetu eiuviev",
        priority: "high",
        code: 120
    },
    {
        text: "kh ubyuiui biy",
        priority: "low",
        code: 231
    },
    {
        text: "poi yrvu crxw",
        priority: "low",
        code: 344
    }
];

// console.log(messages);
let userCase = 2; //parseInt(prompt("Enter code: "));
for (let i of messages) {
    if (userCase > i.code) console.log(i.text);
}

// удаление свойства объекта
delete userData.sh

// вычисляемые свойста
let property = "color";
let settings = {};

settings[property] = "red"; // settings['color'] = 'red'

settings = {
    [property]: "black"
};

// деструктуризация массива
let [a, b, c] = [1, 2, 3]

// деструктуризация объекта / название переменных не совпадают с названиями свойства объекта
let {title: titleVar, photo: photoVar = "default.png", ...other} = cssBook;

console.log(titleVar, photoVar, other);
console.log(cssBook);

let elem = {
    height: 56,
    width: 80,
    color: "red",
    birder: "orange"
};

function test(i) {
    return (i.height + i.width) * 2;
}
console.log(test(elem));

// деструктуризация свойств
function test({height, width}) {
    return (height + width) * 2;
}

let books = [
    { author: 'Пушкин', title: 'Пир во время чумы'},
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Лермонтов', title: 'Тамань'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'},
    { author: 'Пушкин', title: 'Руслан и Людмила'},
    { author: 'Лермонтов', title: 'И скучно, и грустно'},
];

let sortTitle = (book1, book2) => book1.title.localeCompare(book2.title);
console.log(books.sort(sortTitle));



console.log(userData);



