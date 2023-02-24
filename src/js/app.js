const resultsContainer = document.querySelector("#results");

const url = "https://rickandmortyapi.com/api/character";

const searchBar = document.querySelector("#js-search-bar");

searchBar.addEventListener("keyup", (event) => {
  const searchString = event.target.value.trim().toLowerCase();
  console.log("searchString>>>>>", searchString);
  fetchCharacters(searchString);
});

async function fetchCharacters(searchString = "") {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);

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

/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66
============================================
*/

// TODO: Get DOM elements from the DOM

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the list to the DOM

// TODO: Create event listeners for the filters and the search

/**
 * TODO: Create an event listener to sort the list.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L91
 */

/*
============================================
Data fectching
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L104
============================================
*/

// TODO: Fetch an array of objects from the API

/*
============================================
Helper functions
https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L154
============================================
*/

/**
 * TODO: Create a function to filter the list of item.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L135
 * @param {item} item The object with properties from the fetched JSON data.
 * @param {searchTerm} searchTerm The string used to check if the object title contains it.
 */

/**
 * TODO: Create a function to create a DOM element.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
 * @param {item} item The object with properties from the fetched JSON data.
 */
