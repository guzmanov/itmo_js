"use strict";

// 1.
let animals = [
    {
        "name": "Люся",
        "age": "1 год",
        "color": "трехцветная",
        "additional_info": {"vaccinations": true, "passport": true}
    },
    {
        "name": "Том",
        "age": "3 месяца",
        "color": "белый",
        "additional_info": {"vaccinations": false, "passport": false}
    },
    {
        "name": "Макс",
        "age": 2,
        "color": "серый",
        "additional_info": {"vaccinations": false, "passport": true}
    },
    {
        "name": "Василий",
        "age": 3,
        "color": "черный",
        "additional_info": {"vaccinations": true, "passport": true}
    }
];

let task = document.createElement("section");

for (let elem of animals) {
    let card = document.createElement("div");
    card.classList.add("card");

    let name = document.createElement("h3");
    name.innerText = elem.name;

    let age = document.createElement("span");
    age.innerText = elem.age;

    let color = document.createElement("span");
    color.innerText = elem.color;

    let info = document.createElement("div");
    info.classList.add("additional-info");

    let vac = document.createElement("span");
    Object.values(elem).forEach((prop) => {
        if (prop.vaccinations === true) vac.innerText = "вакцинация есть";
        else vac.innerText = "Вакцинации нет";
    });

    let pass = document.createElement("span");
    Object.values(elem).forEach((prop) => {
        if (prop.passport === true) pass.innerText = "паспорт есть";
        else pass.innerText = "паспорта нет";
    });

    info.append(vac, pass);
    card.append(name, age, color, info);
    task.append(card);
}

document.body.append(task);

// 2.

let articles = [
    {
        id: 1,
        title: "JS",
        text: "About JS",
        author: "Max"
    },
    {
        id: 2,
        title: "PHP",
        text: "About PHP",
        author: "Ivan"
    },
    {
        id: 3,
        title: "DataBase",
        text: "About DB",
        author: "Paul"
    },
    {
        id: 4,
        title: "HTML",
        text: "About HTML",
        author: "Paul"
    }
];

let goods = [
    {
        title: "Piano",
        price: 3000,
        count: 25
    },
    {
        title: "Guitar",
        price: 1200,
        count: 40
    },
    {
        title: "Drum",
        price: 2700,
        count: 12
    },
    {
        title: "Flute",
        price: 900,
        count: 50
    },
    {
        title: "Harp",
        price: 3400,
        count: 5
    }
];

function generateTable(arr){
    let table = document.createElement("table");
    table.classList.add("generate-table");
    table.style.backgroundColor = "black";
    let row = table.insertRow(0);
    row.style.cssText = "background-color: #C999FF; text-align: center";
    for (let key in arr[0]) {
        let cell = row.insertCell();
        cell.innerText = key.toLocaleUpperCase();
    }

    for (let obj of arr){
        let row = table.insertRow();
        for (let key in obj){
            let cell = row.insertCell();
            cell.innerText = obj[key];
            cell.style.cssText = "background-color: #fff; text-align: center; padding-top: 8px; padding-bottom: 8px";
        }
    }
    document.body.append(table);
}

generateTable(goods);
generateTable(articles);

// 3.

let prises = {
    headphones: "Наушники",
    book: "Книга",
    postcard: "Открытка"
};

function generateField(n){
    if(n < 3) return;
    let table = document.createElement("table");
    table.style.backgroundColor = "black";
    for (let i = 0; i < n; i++){
        let row = table.insertRow(i);
        for (let i = 0; i < n; i++) {
            let cell = row.insertCell(i);
            cell.style.backgroundColor = "white";
            cell.style.height = `${n}rem`;
            cell.style.width = `${n}rem`;
            cell.classList.add("field-td");
        }
    }
    document.body.append(table);
    let getRandom = (arr) => Math.floor(Math.random() * (arr.length+1));
    let cells = document.getElementsByClassName("field-td");
    for (let i = 0; i < 3; i++) {
        cells[getRandom(cells)].setAttribute("prise", Object.values(prises)[getRandom(Array.from(prises))]);
    }
}

generateField(4);

