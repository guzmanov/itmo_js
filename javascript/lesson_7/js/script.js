"use strict";

let var1 = "Hello"

function task(var1) {

}


function testString(str, min, max) {
    if (typeof str !== 'string') return false
    str = str.trim()
    if (str.length >= min && str.length <= max) return true
}