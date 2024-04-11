// TASK #3: Fetch the Stars
async function getStars() {
  let url = "https://api.github.com/repos/" + document.getElementById("repo").value;

  try {
    let response = await fetch(url);
    if (response.ok) {
      let json = await response.json();
      document.getElementById("star_count").innerHTML = json.stargazers.count;
    } else {
      document.getElementById("star_count").innerHTML = "An error has occurred";
    }
  } catch (error) {
    document.getElementById("star_count").innerHTML = "An error has occurred";
  }
}

// TASK #2: Add Event Listener
function initialize() {
  document.getElementById("count_stars").addEventListener("click", getStars);
}

initialize();
