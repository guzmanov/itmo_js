"use strict";

while(true){
    let num = parseInt(prompt("Input number"));
    console.log(num * 2);
    if (num === 0) break;
}

let start = 1;
let end = 14;

while (start <= end) {
    if (start % 2 === 0) console.log(start);
    start += 1;
}

for (let i = 90; i >=0; i -=5){
    console.log(i)
}

