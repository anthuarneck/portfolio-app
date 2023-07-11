const url = "https://pokeapi.co/api/v2/item";

const form = document.querySelector("form");
const input = document.querySelector("input")
const div = document.querySelector("div");
const item = document.querySelector(".item");
const button = document.querySelector("button")

button.addEventListener("click", (event) => {
  event.preventDefault();
  const name = input.value;

  fetch(`${url}/${name}`)
    .then((data) => data.json())
    .then((json) => {
      console.log(json);
      showItem(json);
    })
    .catch((err) => showError(err));
});

function showItem(json) {
  item.innerHTML += `
    <article>
        <img src="${json.sprites.default}" alt=${json.name}/>
        <p>${json.name}</p>
    </article>
    <button>Info</button>
`
}

function showError(err) {
  item.innerHTML = `
    <div class="error">
        <p>An error has occured!</p>
        <p class="message">${err}</p>
    </div>
    `;
}
