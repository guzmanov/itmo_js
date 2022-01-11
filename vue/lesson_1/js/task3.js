"use strict";

/* вывести информацию о товаре */
let app = Vue.create({
    data(){
        return {
            task: {
                title: "Карандаш", /* вывести в верхнем регистре */
                description: "Карандаш механический 0.5 мм",
                number: 70263, /* атрибут data-number */
                count: 45, /* предусмотреть возможность вывода 'нет в наличии', если значение будет равно 0 */
                specifications: [
                    {name: "тип", value: "механические"},
                    {name: "бренд", value: "bruno visconti"},
                    {name: "назначение", value: "для рисования, для творчества"}
                ]
            }
        }
    }
});

app.mount("#app");