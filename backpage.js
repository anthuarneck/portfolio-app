const url = "https://pokeapi.co/api/v2/item";
const itemId = new URLSearchParams(window.location.search).get("id");
const itemList = document.querySelector(".item");

fetch(`${url}/${itemId}`)
  .then((data) => data.json())
  .then((json) => {

    const img = document.createElement("img");
    img.src = json.sprites.default;

    const cost = document.createElement("p");
    cost.innerText = `Cost: ${json.cost} PokeDollars`;
    
    const itemDescription = document.createElement("p");
    itemDescription.innerText = `Description: ${json.effect_entries[0].effect}`;
    
    itemList.appendChild(img);
    itemList.appendChild(cost);
    itemList.appendChild(itemDescription);
  })
  .catch((err) => console.log(err));
