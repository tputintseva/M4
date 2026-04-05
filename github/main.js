let searchValue = document.getElementById("searchValue")
let searchBtn = document.getElementById("searchBtn")
let card = document.getElementById("card")
let load = document.getElementById("load")

let dataCard;

async function getCard() {
    card.classList.add("none");
    load.classList.remove("none");

    const response = await fetch(`https://api.github.com/users/${searchValue.value}`);
    if (response.ok) {
        dataCard = await response.json()
        console.log(dataCard)
        generateCard()
    }
    load.classList.add("none")
}

searchBtn.addEventListener("click", getCard)

function generateCard() {
    card.innerHTML = 
    `
    <img src="${dataCard.avatar_url}"/>
    <h1>${dataCard.login}</h1>
    <p>${dataCard.bio}</p>
    <nav>
        <div>
            <i class="fas fa-map-marker-alt" style="color: yellow;"></i>
            <span>${dataCard.location}</span>
        </div>
        <div>
            <i class="fas fa-book" style="color: yellowgreen;"></i>
            <span>${dataCard.public_repos}</span>
        </div>
        <div>
            <i class="fas fa-heart" style="color: red;"></i>
            <span>${dataCard.followers}</span>
        </div>
    </nav>
    <a href="${dataCard.url}">Перейти</a>
    `
    card.classList.remove("none");
}