const quoteContainer = document.getElementById('quote-Container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];



// //loader
// function loading() {
//     loader.hidden = false;
//     quoteContainer.hidden = true;
// }

// Hide loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}
 


// show new quotes
function newQuote() {

    // pick random quote
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // check if author is blank

    console.log(quote.author);
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    // Check Quote length to determine styling 
    if (quote.text.length > 50) {
        quoteText.classList.add("long-quote");
    }
    else {
        quoteText.classList.remove('long-quote');
    }
    //set quote , Hide loader
    quoteText.textContent = quote.text;
    complete();

}


// tweet quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, '_blank');
}

// event listener
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener('click', tweetQuote);


// Get Quotes from API
async function getQuotes() {

    const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // error handling
    }
}

 getQuotes()
