/*
 * Create a list that holds all of your cards
 * "card"
 * "card open"
 * "card open show"
 * "card match"
 * "card open nomatch"
 */
const initialCards = ["fa-diamond", "fa-diamond", "fa-paper-plane-o", "fa-paper-plane-o", "fa-anchor", "fa-anchor", "fa-bolt", "fa-bolt",
              "fa-cube", "fa-cube", "fa-leaf", "fa-leaf", "fa-bicycle", "fa-bicycle", "fa-bomb", "fa-bomb"];

const shakeDeck = shuffle(initialCards);

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// https://www.w3schools.com/jsref/event_onclick.asp

document.onclick = function(){
  myScript
};

// http://learn.jquery.com/

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


/*
https://learn.jquery.com/about-jquery/how-jquery-works/

<body><script src="jquery.js"></script>
<script>

</script>
</body>

The src attribute in the <script> element must point to a copy of jQuery. Download a copy of jQuery from the Downloading jQuery page and store the jquery.js file in the same directory as your HTML file.

For click and most other events, you can prevent the default behavior by calling event.preventDefault() in the event handler:

it is usually better to place your code in a separate JS file and load it on the page with a <script> element's src attribute.

A callback is a function that is passed as an argument to another function and is executed after its parent function has completed. with (inside a function) or without arguments.

https://learn.jquery.com/using-jquery-core/faq/how-do-i-select-an-item-using-class-or-id/

jQuery

event listener for a card
.bind()
Attach a handler to an event for the elements.

.click()
Bind an event handler to the “click” JavaScript event, or trigger that event on an element.
.show()
Display the matched elements.

Add to a list of open cards
.add()
Create a new jQuery object with elements added to the set of matched elements.
Don’t know how to check the list of open cards for a match
*/
