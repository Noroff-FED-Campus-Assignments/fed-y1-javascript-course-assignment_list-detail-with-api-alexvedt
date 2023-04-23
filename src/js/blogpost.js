const detailsEl = document.querySelector("#details-container");
const header = document.querySelector("#header-element");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://cms-sp.flywheelsites.com/wp-json/wp/v2/posts/" + id;

console.log(url);

async function getPost() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    document.title = details.title.rendered;
    // `<h1>${details.title.rendered}</h1>`
    console.log(details);

    createHtml(details);
  } catch (error) {
    console.log(error);
  }
}

getPost();

function createHtml(details) {
  header.innerHTML += `<h1>${details.title.rendered}</h1>`;
  detailsEl.innerHTML = `
    ${details.content.rendered}
    `;
}
