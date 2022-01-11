"use strict";

let currentUser = () => {
    return  {
        name: "Глеб",
        img: "https://picsum.photos/id/271/300/300"
    };
};


function addCommet(event) {
    event.preventDefault();
    let textArea = document.getElementById("comment-text");
    let commentText = textArea.value.trim();
    if (commentText.length < 1 || commentText > 300) {
        alert('inter other text');
        return;
    }

    let user = currentUser();

    let commentContainer = document.createElements("div");
    commentContainer.classList.add("comment");
    commentContainer.innerHTML = `
        <img src="${user.img}">
        <div>
            <span> ${user.name} | дата</span>
            <span>${commentText}</span>
        </div>
    `;

    document.querySelector(".comments").append(commentContainer);
    this.reset();

}

let commentForm = document.getElementsByName("comment-form")[0];
commentForm.addEventListener('submit', addCommet);

let obj = {
    name: "Объект",
    printName() {
        console.log(this.name);
    }
};

let colors = ["#6200EA", "#FFB300", "#EA80FC", "#BDBDBD", "#90CAF9"];
let colorContainer = document.getElementById("color-container");
colorContainer.addEventListener('click', function() {
    this.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

/// task 4
let input = document.getElementsByName("input-text")[0];
input.addEventListener('keyup', function () {
    document.getElementById("output").innerText = this.value;
});

// task 3
let titlesP = document.querySelectorAll(".article p:first-child");
for (let titleP of titlesP) {
    titleP.addEventListener('click', openContent);
}

function openContent(){
    // this.nextElementSibling.classList.toggle("open");
    let contentsP = document.querySelectorAll(".article p:last-child");
    for (let contentP of contentsP){
        if (contentP !== this.nextElementSibling){
            contentP.classList.remove('open');
        } else {
            this.nextElementSibling.classList.toggle("open");
        }
    }
}
