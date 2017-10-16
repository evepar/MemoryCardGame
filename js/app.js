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

shakeDeck.forEach(function(card){
  //console.log(card);
  var cardElement = '<li class="card"><i class="fa ' + card + '"></i></li>'
  // console.log(cardElement);
  $(".deck").append(cardElement);
})

$(".card").click(function(){
  var $card = $(this)
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


//$(this).addClass("open show");
//removeClass("open show");
//toggleClass
//hasClass

//https://www.w3schools.com/jsref/prop_element_classlist.asp
// this opens all the cards: $(".card").addClass("card open show").classList.add("card open show");

// https://stackoverflow.com/questions/25152596/how-to-match-list-items-with-values-in-an-array
// to check if cards match
for(var i in initialCards){
   $("#"+initialCards[i]).addClass("active");
   console.log();
 }

var $compare = null

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
