let quotes = []

function getQuotes() {
  return $.ajax({
    headers: {
      Accept: 'application/json'
    },
    url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
    success: function (jsonQuotes) {
      if (typeof jsonQuotes === 'string') {
        quotesData = JSON.parse(jsonQuotes);
        quotes = quotesData.quotes;
        //console.log('quotesData');
        //console.log(quotesData);
      }
    }
  });
}

function getRandomQuote(){
    let quote = quotes[Math.floor(Math.random()*quotes.length)];
    //console.log(quote);
    $("#text").html(quote.quote)
    $("#author").html("From - " + quote.author)
} 

$(document).ready(function () {
  getQuotes().then(() => {
    getRandomQuote();
  });
  
  $('#new-quote').on('click', getRandomQuote);
})