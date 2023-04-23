const detailsEl = document.querySelector("#details-container");
const header = document.querySelector("#header-element");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "http://cms-sp.flywheelsites.com/wp-json/wp/v2/posts/" + id;

console.log(url);

async function getPost() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    document.title = details.title.rendered;

    createStuff(details);
  } catch (error) {
    console.log(error);
  }
}

getPost();

function createStuff(details) {
  header.innerHTML += `<h1>${details.title.rendered}</h1>`;
  detailsEl.innerHTML = `
  <div class ="card">
  <div class="details">
    ${details.content.rendered}
    </div>
    </div>
    `;
}
