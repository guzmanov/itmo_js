"use strict";

let images = [
    "https://picsum.photos/1000/1000?random=1",
    "https://picsum.photos/1000/1000?random=2",
    "https://picsum.photos/1000/1000?random=3"
];

let itemTitle = document.getElementsByClassName("item_title");
// let itemTitle = document.querySelectorAll(".item_title");
console.log(itemTitle);

for (let i = 0; i < itemTitle.length; i++) {
    let img = document.createElement("img");
    img.setAttribute("src", images[i]);
    img.classList.add("item__image")
    itemTitle[i].after(img)
}

let price = Array.from(document.querySelectorAll(".item__price"));
price.forEach((span) => span.innerText = span.innerText / 2);

let span = document.querySelectorAll(".item__rice");

let fn = function (element, index, arr) {
    element.innerText = element.innerText / 2;
}
//
// for (let i = 0; i < span.length; i++) {
//     span
// }

let goods = {
    test1: {
        title: "test",
        price: 123,
        count: 5,
        img: "https://picsum.photos/1000/1000?random=3"
    },
    test2: {
        title: "test",
        price: 123,
        count: 5,
        img: "https://picsum.photos/1000/1000?random=3"
    },
    test3: {
        title: "test",
        price: 123,
        count: 5,
        img: "https://picsum.photos/1000/1000?random=3"
    },
    test3: {
        title: "test",
        price: 123,
        count: 5,
        img: "https://picsum.photos/1000/1000?random=3"
    },
    test3: {
        title: "test",
        price: 123,
        count: 5,
        img: "https://picsum.photos/1000/1000?random=3"
    }
};
Object.values(goods).forEach() {
    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("h2");
    title.innerText = obj.title;

    let imf = document.createElement("img");
    img.classList.add("card__image");
    img.setAttribute("src", obj.img);

    let price = document.createElement("p");
    price.innerText = `${obj.price} руб`;

    let count = document.createElement("div");
    count.classList.add("card__count-info");
    if (obj.count ! == 0) {
        count.innerHTML = `
            <button>-</button>
            <span>${obj.count}</span>
            <button>+</button>
        `;
    } else {
        count.innerHTML = "<span>Нет в наличи</span>";
    }

    card.append(title, img, price, count);
    cardsSecton.append(card);
};