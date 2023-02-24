const detailsContainer = document.querySelector("#details-container");
const detailsHeading = document.querySelector("#character-heading");
console.log(detailsHeading);

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log("id >>>", id);

const url = `https://rickandmortyapi.com/api/character/${id}`;
console.log(url);

async function fetchCharacter() {
  try {
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);

    const singleCharacter = responseJson;

    detailsContainer.innerHTML = "";
    document.title = singleCharacter.name;
    detailsHeading.innerHTML = singleCharacter.name;
    detailsContainer.innerHTML += `
    <a href="/details.html?id=${singleCharacter.id}" class="card">
    <div class="details">
        <h4 class="name">${singleCharacter.name}</h4>
        <img class="image" src="${singleCharacter.image}" alt="${singleCharacter.name}">
          <p class="status">Status: ${singleCharacter.status}</p>
          <p class="species">Species: ${singleCharacter.species}</p>
          <p class="origin">Origin: ${singleCharacter.origin.name}</p>
    </div>
</div>
</a>
    `;
  } catch (error) {
    console.log(error);
    detailsContainer.innerHTML = `<p>Something wrong happened.. => ${error}</p>`;
  }
}

fetchCharacter();
