const url = "https://pokeapi.co/api/v2/item";

const form = document.querySelector("form");
const input = document.querySelector("input");
const div = document.querySelector("div");
const itemList = document.querySelector(".item");
const button = document.querySelector("button");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = input.value;

  fetch(`${url}/${name}`)
    .then((data) => data.json())
    .then((json) => {
      console.log(json);
      showItem(json);
    })
    .catch((err) => showError(err));
  form.reset();
});

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

function showError(err) {
  form.append(`
    <div class="error">
        <p>An error has occured!</p>
        <p class="message">${err}</p>
    </div>
    `);
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
