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

// reshuffle the deck https://stackoverflow.com/questions/6653556/jquery-javascript-function-to-clear-all-the-fields-of-a-form
// button's class is "restart" in HTML
//$('#myForm').trigger("reset");

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

function makeDeck() {
  $(".deck").empty()
  shakeDeck.forEach(function(card, index){
    //console.log(card);
    const cardElement = '<li class="card"><i class="fa ' + card + '"></i></li>'
    // console.log(cardElement);
    $(".deck").append(cardElement);
  })
}

makeDeck();

function playGame() {
  $(".card").click(function(){
    const $card = $(this)
    if (!$card.hasClass("open show")) {
      $card.addClass("open show");
      if (!$compare) {
        $compare = $card;
      } else if ($compare[0].innerHTML === $card[0].innerHTML) {
        console.log("match");
        $card.addClass("match");
        $compare.addClass("match");
        $compare = null;
        matchCount++;
          if (matchCount === 8){
          clearInterval(timer)
          $('.myModal').modal('show')
          }
      } else {
        console.log("doesn't match");
        setTimeout(function(){
          $card.removeClass("open show");
          $compare.removeClass("open show");
          $compare = null;
        },100)
    }
    } else {
      $card.attr('disabled', true);
    }
  });
}

playGame();

let $compare = null
let matchCount = 0
var timer
// timer https://stackoverflow.com/questions/2604450/how-to-create-a-jquery-clock-timer#answer-19744442
// and end timer when game is won
function timeGame() {
 $(document).ready(function(){
         function getdate(){
               var start = new Date().getTime()
               timer = setInterval(function(){
               var currentTime = new Date().getTime()
               var elapsedTime = currentTime - start
               // console.log(elapsedTime)
               let m = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
               let s = Math.floor((elapsedTime % (1000 * 60)) / 1000);
               if(s<10){
                   s = "0"+s;
               }
               $("h3").text(m+" : "+s);
             }, 500);
            }
        $("button").click(getdate);
    });
}

timeGame();

//modal https://getbootstrap.com/docs/4.0/components/modal/

// reset page https://stackoverflow.com/questions/30347724/refresh-page-with-reset-button
//$("#restart").click(function(){
//  document.location.reload();
//});

function resetGame() {
  clickCount = 0;
  makeDeck();
  playGame();
  timeGame();
}

$('.restart').click(resetGame);

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
