async function fetchQuote() {
  try {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    document.getElementById("quote").innerText = `"${data[0].q}" — ${data[0].a}`;
  } catch (error) {
    document.getElementById("quote").innerText = "Oops! Could not fetch a quote.";
    console.error(error);
  }
}
