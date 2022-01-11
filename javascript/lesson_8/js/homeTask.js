let mass = [
    ['userName1', 'Saint-P'],
    ['userName2', 'Moscow'],
    ['userName3', 'Sochi'],
    ['userName4', 'Prague'],
    ['userName5', 'Prague'],
    ['userName6', 'Prague']
];

let map = new Map(mass)

function homeTask(map, sity){
    let result = [];
    for (let i of map){
        if (i[1] === sity) result.push(i)
    }
    return result
}

console.log(homeTask(map, 'Prague'))