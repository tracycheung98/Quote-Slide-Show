/***********************************************************************************/

/*** 
* `quotes` array 
***/
const quotes = [{quote: "The world is changing: I feel it in the water, I feel it in the earth, and I smell it in the air.", source: "J. R. R. Tolkien", citation: "The Return of the King"}, 
                {quote: "Whatever was required to be done, the Circumlocution Office was beforehand with all the public departments in the art of perceiving — HOW NOT TO DO IT.", source: " Charles Dickens"}, 
                {quote: "I took a deep breath and listened to the old brag of my heart: I am, I am, I am.", source: "Sylvia Plath", citation: "The Bell Jar"},
                {quote: "We accept the love we think we deserve.", source: "Stephen Chbosky", citation: "The Perks of Being a Wallflower"},
                {quote: "There are years that ask questions and years that answer.", source: "Zora Neale Hurston", citation: "heir Eyes Were Watching God"},
                {quote: "I am not afraid of storms, for I am learning how to sail my ship.", source: "Louisa May Alcott", citation: "Little Women"},
                {quote: "Everything was beautiful, and nothing hurt.", source: "Kurt Vonnegut", citation: "Slaughterhouse-Five", year:"1969"},
                {quote: "Beware; for I am fearless, and therefore powerful.", source: "Mary Shelley", year:"1818"}]
var numOfQuotes = quotes.length;
//console.log(numOfQuotes);

/***
 * `getRandomQuote` function
***/

var perviousRandomNumber;

function getRandomQuote(){
    var max = Math.floor(numOfQuotes);
    var random = Math.floor(Math.random() * (max));
    console.log("random: " + random);
    
    return quotes[random];
}

/***
 * `printQuote` function
***/
function printQuote(){
    var randomQuote = getRandomQuote();
    // console.log(randomQuote.quote, randomQuote.source);
    let PtoHTML1 = "<p class='quote'>" + randomQuote.quote + "</p><p class='source'>" + randomQuote.source;

    if (randomQuote.citation === undefined && randomQuote.year === undefined){ // if both citation and year are missed, just closed the <p> tag
        PtoHTML1 += "</p>";
    } else if (randomQuote.citation === undefined && randomQuote.year == ""){ // if only citation is missed
        PtoHTML1 += "<span class='citation'>" + randomQuote.citation + "</span></p>"; 
    } else if (randomQuote.citation =="" && randomQuote.year === undefined){ // if only year is missed
        PtoHTML1 += "<span class='year'>" + randomQuote.year + "</span></p>"; 
    } else {
        PtoHTML1 += "<span class='citation'>" + randomQuote.citation + "</span><span class='year'>" + randomQuote.year + "</span></p>"; // both citation and year are provided
    }

    document.getElementById('quote-box').innerHTML = PtoHTML1;
}



/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.
 
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote); // when the button is clicked, printQuote is processed 