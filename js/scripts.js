const items = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

const title = [
    'Spiderman',
    'Ratchet & Clank',
    'Fortnite',
    'Stray',
    'Avengers'
]



const contItems = document.getElementById("items");
const contThumbs = document.getElementById("thumbs");
let item ="";
let thumb = "";
const next = document.getElementById("next")
const prev = document.getElementById("prev")


for (let i = 0; i < items.length; i++){
    item += `
    <div class="item">
        <img src="${items[i]}" alt="${title[i]}">
        <div class="text">
            <h2>${title[i]}</h2>
            
        </div>
    </div>`;
    thumb += `
    <div class="thumb">
        <img src="${items[i]}" alt="">
    </div>`
}
contItems.innerHTML = item;
contThumbs.innerHTML += thumb;

document.getElementsByClassName("item")[0].classList.add("active")
document.getElementsByClassName("thumb")[0].classList.add("active")


let positionActive = 0;

document.getElementById("next").addEventListener('click',
    function(){
        ++positionActive;
        document.getElementsByClassName("item")[positionActive -1].classList.remove("active")
        document.getElementsByClassName("item")[positionActive].classList.add("active")
        document.getElementsByClassName("thumb")[positionActive -1].classList.remove("active")
        document.getElementsByClassName("thumb")[positionActive].classList.add("active")
    }
);

