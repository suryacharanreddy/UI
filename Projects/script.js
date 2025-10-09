function addToWatchlist(movieName) {
  // Get existing list from localStorage
  let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

  // Avoid duplicates
  if (!watchlist.includes(movieName)) {
    watchlist.push(movieName);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    alert(`${movieName} added to Watchlist!`);
  } else {
    alert(`${movieName} is already in your Watchlist.`);
  }
}

// To remove from watchlist
function removeFromWatchlist(movieName) {
  let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  watchlist = watchlist.filter(name => name !== movieName);
  localStorage.setItem("watchlist", JSON.stringify(watchlist));
  showWatchlist(); // refresh display
}

// To display saved movies in watchlist.html
function showWatchlist() {
  const listContainer = document.getElementById("watchlist");
  if (!listContainer) return; // Only run on watchlist.html
  let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

  if (watchlist.length === 0) {
    listContainer.innerHTML = "<p>No movies in your watchlist yet.</p>";
    return;
  }

  listContainer.innerHTML = watchlist
    .map(
      movie => `
      <div class="movie">
        <h3>${movie}</h3>
        <button onclick="removeFromWatchlist('${movie}')">Remove</button>
      </div>
    `
    )
    .join("");
}
