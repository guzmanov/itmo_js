"use strict";

localStorage.setItem('key', 'value');
localStorage.setItem('name', 'Piter');

let settings = {
    backgroundColor: "yellow",
    color: "red",
    fontSize: "2rem",
}

localStorage.setItem('settings', JSON.stringify(settings));

let settingsFromStorage = localStorage.getItem('setting');
// {"backgroundColor":"yellow","color":"red","fontSize":"2rem"}
settingsFromStorage = JSON.parse(settingsFromStorage);
