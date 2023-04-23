const results = document.querySelector("#results");

async function getBlogPosts() {
  try {
    const response = await fetch(
      "http://cms-sp.flywheelsites.com/wp-json/wp/v2/posts",
      {
        method: "GET",
        headers: {},
      }
    );

    if (response.ok) {
      const result = await response.json();
      results.innerHTML = "";
      result.forEach((blogpost) => {
        results.innerHTML += `<div class="blogpreviewitem">${blogpost.content.rendered} <a class ="postlink" href="/blogpost.html?id=${blogpost.id}">Read more</a></div>`;
      });
    }
  } catch (err) {
    console.error(err);
  }
}
getBlogPosts();
