

window.addEventListener("load", function() {
    h1Element = document.querySelector("h1");
    pElementQuote = document.createElement("p");
    pElementQuote.id = "quote";
    h1Element.insertAdjacentElement("afterend", pElementQuote);
    setRandomQuote();
    this.setInterval(setRandomQuote, 5000);
});

function setRandomQuote() {
    fetch('https://marius0g.github.io/Initial-D-Wiki/json/quotes.json')
        .then(response => response.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomIndex];
            let quoteElement = document.getElementById("quote");
            quoteElement.innerHTML = randomQuote.quote + " - " + randomQuote.author;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}