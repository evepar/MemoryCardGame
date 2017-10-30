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

let shakeDeck = shuffle(initialCards);

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

shakeDeck.forEach(function(card, index){
  //console.log(card);
  const cardElement = '<li class="card"><i class="fa ' + card + '"></i></li>'
  // console.log(cardElement);
  $(".deck").append(cardElement);
})

$(".card").click(function(){
  const $card = $(this)
  // check if card does not have the class open/ show Karol
  // before adding open/ show Karol
  // jQuey hasClass method Karol
  // check if the compare array's length is less than 2 Karol
  $card.addClass("open show");
  if (!$compare) {
    $compare = $card;
  } else if ($compare[0].innerHTML === $card[0].innerHTML) {
    console.log("match");
    $card.addClass("match");
    $compare.addClass("match");
    $compare = null;
  } else {
    console.log("doesn't match");
    setTimeout(function(){
      $card.removeClass("open show");
      $compare.removeClass("open show");
      $compare = null;
    },100)
  }
});

let $compare = null


// timer https://stackoverflow.com/questions/2604450/how-to-create-a-jquery-clock-timer#answer-19744442

// if match http://api.jquery.com/animate/ https://www.w3schools.com/jquery/jquery_animate.asp
// or change color to green for a moment

// if cards don't match, close them

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

A callback is a function that is passed as an argument to another function and is executed after its
parent function has completed. with (inside a function) or without arguments.

https://learn.jquery.com/using-jquery-core/faq/how-do-i-select-an-item-using-class-or-id/

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
