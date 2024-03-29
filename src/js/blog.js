const results = document.querySelector("#results");

async function getBlogPosts() {
  try {
    const response = await fetch(
      "https://cms-sp.flywheelsites.com/wp-json/wp/v2/posts",
      {
        method: "GET",
        headers: {},
      }
    );

    if (response.ok) {
      const result = await response.json();
      results.innerHTML = "";
      result.forEach((blogpost) => {
        results.innerHTML += `
         
         <a href="/blogpost.html?id=${blogpost.id}">

        <div class="card">
        <div class="details">
        <div class="blogpreviewitem">${blogpost.content.rendered} <a class ="postlink" href="/blogpost.html?id=${blogpost.id}">Read more</a></div>
        </div>
        </div>
        `;
      });
    }
  } catch (err) {
    console.error(err);
  }
}
getBlogPosts();
