const options = {method: 'GET'};

fetch('https://cms-sp.flywheelsites.com/wp-json/wp/v2/posts', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

  try {
    const response = await fetch("https://cms-sp.flywheelsites.com/wp-json/wp/v2/posts", {
      method: 'GET',
      headers: {}
    });
  
    if (response.ok) {
      const result = await response.json();
      console.log(result);
    }
  } catch (err) {
    console.error(err);
  }