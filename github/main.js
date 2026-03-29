let searchValue = document.getElementById("searchValue")
let searchBtn = document.getElementById("searchBtn")
let card = document.getElementById("card")
let load = document.getElementById("load")

let dataCard;

async function getCard() {
    card.classList.add("none");
    load.classList.remove("none");

    const response = await fetch('https://api.github.com/users/KrasnovDaniil1');
    if (response.ok) {
        dataCard = await response.json()
        console.log(dataCard)
    }
}

searchBtn.addEventListener("click", getCard)