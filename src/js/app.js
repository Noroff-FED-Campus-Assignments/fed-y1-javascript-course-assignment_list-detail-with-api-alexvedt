const resultsContainer = document.querySelector("#results");

const url = "https://rickandmortyapi.com/api/character";

const searchBar = document.querySelector("#js-search-bar");

searchBar.addEventListener("keyup", (event) => {
  const searchString = event.target.value.trim().toLowerCase();
  fetchCharacters(searchString);
});

async function fetchCharacters(searchString = "") {
  try {
    const response = await fetch(url);
    const json = await response.json();

    resultsContainer.innerHTML = "";

    const ppls = json.results;
    const filteredCharacters = filterCharacters(ppls, searchString);
    const characters = filteredCharacters;

    for (let i = 0; i < filteredCharacters.length; i++) {
      resultsContainer.innerHTML += `
      <a href="/details.html?id=${characters[i].id}" class="card">
          <div class="details">
              <h4 class="name">${characters[i].name}</h4>
              <img class="image" src="${characters[i].image}" alt="${characters[i].name}">
                <p class="status">Status: ${characters[i].status}</p>
                <p class="species">Species: ${characters[i].species}</p>
                <p class="origin">Origin: ${characters[i].origin.name}</p>
          </div>
      </div>
      </a>
      `;
    }
  } catch (error) {
    resultsContainer.innerHTML = `<p>Something wrong happened.. => ${error}</p>`;
  }
}
try {
  console.log("This will run");
} finally {
  console.log("This will always run");
}

fetchCharacters();

// helper functions
function filterCharacters(characters, searchString) {
  return characters.filter(function (character) {
    return (
      character.name.toLowerCase().includes(searchString) ||
      character.type.toLowerCase().includes(searchString) ||
      character.species.toLowerCase().includes(searchString) ||
      character.status.toLowerCase().includes(searchString) ||
      character.origin.name.toLowerCase().includes(searchString)
    );
  });
}

function makeRandomURL() {
  const randomId = Math.floor(Math.random() * 20) + 1;
  return `/details.html?id=${randomId}`;
}
document.querySelector("#randomizer").href = makeRandomURL();
