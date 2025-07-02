function getQuote() {
  const quoteText = document.getElementById("quote");
  const authorText = document.getElementById("author");

  fetch("https://api.quotable.io/random")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }
      return response.json();
    })
    .then((data) => {
      quoteText.innerText = `"${data.content}"`;
      authorText.innerText = `— ${data.author}`;
    })
    .catch((error) => {
      quoteText.innerText = "Oops! Could not fetch a quote.";
      authorText.innerText = "";
    });
}
