"use strict";

console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

let apple = {
    name: "Яблоко",
    "calorific value": 47,
    carbohydrates: 10,
};
let mushroom = {
    name: "Белый гриб",
    "calorific value": 34,
    carbohydrates: 1.1,
};
let water = {
    name: "Вода",
    "calorific value": 0,
    carbohydrates: 0,
};

// Структура хранения данных. (map)
let food = new Map();
// метод для добавления данных
food.set(apple, 20).set(mushroom, 30).set(water, 14);
// console.log(food);

if (food.has(apple)) {
    console.log("Информация о яблоках известна");
}

// метод удаления данных
food.delete(water);

if (!food.has(water)) {
    console.log("ЖОПа");
}

// получение значени по ключи
console.log(food.get(apple));

// размер MAP
console.log(food.size);

// перебор
// вывести название продуктов
for (let key of food.keys()) {
    console.log(key,name);
}
let portionsCount = 0;
for (let value of food.values()) {
    portionsCount += value;
}
console.log(portionsCount);

// перебор пар
for (let pair of food.entries()) {
    console.log(pair[0].name, pair[1]);
}

// MAP из объекта
let waterMap = new Map(Object.entries(water));
console.log(waterMap.values())

// объект из MAP
let foodObject = Object.fromEntries(food);
console.log(typeof(foodObject), foodObject);

// Объект Set – это особый вид коллекции: «множество» значений (без ключей)
// где каждое значение может появляться только один раз.
let uniqueFood = new Set();

uniqueFood.add(apple).add(apple);
uniqueFood.add(water);
console.log(uniqueFood.size);

// перебор set for...of
for (let elem of uniqueFood) {
    console.log(elem.name);
}

// создание массива
// массив из ключей / значений мапы, сета
let arr = Array.from(food.keys());
console.log(arr);

arr = Array.from(uniqueFood);
console.log(arr);

arr = [56, 89, 22, 22, 67, 11, 34, 89];
let numsSet = new Set(arr);
console.log(numsSet);

