"use strict";

// 1: параметры инициализирования компонента:
let rootComponentOptions = {
    data(){
        return {
            userInput: ""
        }
    },
    // вычисляемы свойства
    computed: {
        userOutput(){
            return this.userInput.length < 1 ? "Input is empty" : this.userInput;
        },
        userOutputStrong(){
            return `<strong>
                        ${this.userInput.length < 1 ? "Input is empty" : this.userInput}
                    </strong>`;
        }
    }
};

// 2: создание экземляра приложения (vue)
let app = Vue.createApp(rootComponentOptions);

// 3: монтирование приложения
let vm = /* viemodel */ app.mount("#task");
console.log(vm)