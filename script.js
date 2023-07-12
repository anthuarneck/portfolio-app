const url = "https://pokeapi.co/api/v2/item";

const form = document.querySelector("form");
const input = document.querySelector("input");
const div = document.querySelector("div");
const itemList = document.querySelector(".item");
const button = document.querySelector("button");
const example = document.querySelector(".example");

example.innerText = "Please hyphonate 2 word items. (e.g. super-potion)";

let errorMessage = document.createElement("p");
errorMessage.style.color = "red";

button.addEventListener("click", (event) => {
  event.preventDefault();
  const name = input.value;

  if (!name) {
    errorMessage.textContent = "Error: Item is non-existent";
  } else errorMessage.textContent = "";

  fetch(`${url}/${name}`)
    .then((data) => data.json())
    .then((json) => {
      showItem(json);
    })
    .catch((err) => showError(err));
  form.reset();
});

function showError(err) {
  errorMessage.textContent = "";
  errorMessage.textContent = err;
  form.append(errorMessage);
}

function showItem(json) {
  const info = document.createElement("button");
  info.innerText = "Info";

  info.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("hello");
  });

  const item = document.createElement("article");
  const img = document.createElement("img");
  img.src = json.sprites.default;
  img.alt = json.name;
  const p = document.createElement("p");
  p.innerText = json.name;
  item.appendChild(img);
  item.appendChild(p);
  item.appendChild(info);
  itemList.appendChild(item);
}

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomItems() {
  for (i = 0; i < 3; i++) {
    let itemId = generateRandomNumber(200);
    fetch(`${url}/${itemId}`)
      .then((data) => data.json())
      .then((json) => {
        console.log(json);
        showItem(json);
      });
  }
}

getRandomItems();
