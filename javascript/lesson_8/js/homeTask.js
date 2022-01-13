let mass = [
    ['userName1', 'Saint-P'],
    ['userName2', 'Moscow'],
    ['userName3', 'Sochi'],
    ['userName4', 'Prague'],
    ['userName5', 'Prague'],
    ['userName6', 'Prague']
];

let map = new Map(mass)

function firstTask(map, sity){
    let result = [];
    for (let i of map){
        if (i[1] === sity) result.push(i)
    }
    return result
}

console.log(firstTask(map, 'Prague'))

// 2
let testMass = ['test', 'test', 'test', 'text', 'text', 'word'];

function secondTask(x) {
    let map = new Map();

    for (let i of x) {
        if(map.has(i)) {
            map.set(i, map.get(i) + 1);
        } else {
            map.set(i, 1)
        }
    }
    return map
}

console.log(secondTask(testMass))

// 3
let customerMap = new Map();
customerMap.set(45, {name: "Павел", id: 45, age: 23});
customerMap.set(87, {name: "Олег", id: 87, age: 45});
customerMap.set(91, {name: "Максим", id: 91, age: 18});
customerMap.set(99, {name: "Евгения", id: 99, age: 66});
customerMap.set(101, {name: "Алексей", id: 101, age: 34});
customerMap.set(112, {name: "Клара", id: 112, age: 39});

function theerdTask(map, ageFrom, ageTo) {
    let newMap = new Map();

    for (let i of map.entries()) {
        if (i[1].age >= ageFrom && i[1].age < ageTo) newMap.set(i[0], i[1]);
    }
    return newMap;
}

console.log(theerdTask(customerMap, 17, 19))