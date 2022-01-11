"use strict";

// Lesson 8 (Objects) - Объекты

let cat = {
    name: "Simona",
    age: 2,
    owner: {
        name: "Guzman",
        tel: "79118193194",
        printFullInfo(){
            console.log(`${this.name} + ${this.tel}`)
        }
    },
    // метод объекта (синтаксис 1)
    printOwnerName: function () {
        // this - обращение для внутри объекта (this === cat)
        console.log(this.owner.name)
    },
    // метода объекта 2 (ситнаксис 2)
    printOwnerPhone(){
        console.log(this.owner.tel)
    },
};

console.log(cat.owner.tel);
cat.printOwnerName();
cat.printOwnerPhone();
cat.owner.printFullInfo();

// (!) При передачи функции в функцию внутреняя функция THIS затирается (!this)
// передача контеста (this)
// setTimeout(cat.printOwnerName.bind(cat), 20);

