"use strict";

let app = Vue.createApp({
    data(){
        return {
            book: {
                title: "vue js",
                author: "junior developer",
                otherAuthors: ["junior 1", "junior2"],
                cover: "https://picsum.photos/seed/picsum/200/300"
            }
        }
    }
});

app.config.globalProperties.$customFilters = {
    capitalize(text){
        return text[0].toUpperCase() + text.slice(1);
    }
};

app.mount("#app");