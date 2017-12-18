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
    const cardElement = '<li class="card"><i class="fa ' + card + '"></i></li>'
    $(".deck").append(cardElement);
  })
}

makeDeck();

//https://www.w3schools.com/jsref/event_onclick.asp

var clicks = 0;

function lessStars(clicks) {
    var starRating = [15,20];
    var stars = starRating.length;
    $('.stars').children().each(function(i, starElem) {
    if (starRating[i] === clicks) $(starElem).addClass("star-lost")
  });
}

function forStar() {
  var val = $(".stars").html();
 return val;
}

function countMoves(clicks) {
  $('.moves').text(clicks);
}

//https://www.w3schools.com/howto/howto_css_modals.asp

function openModal() {
  $("#time-needed").text(timeNeeded);
  console.log(timeNeeded);
  //inject score into the modal
  $("#moves-needed").text(clicks);
  //$("#score-panel").text(lessStars());
  $("#score-panel").html(forStar());
  $("#myModal").modal("show")
}

var timerOn = false;

function playGame() {
  $(".card").click(function(){
    if (!timerOn) {
      getDate();
      timerOn = true;
    }
    const $card = $(this)
    if (!$card.hasClass("open show")) {
      $card.addClass("open show");
      if (!$compare) {
        $compare = $card;
        return
      }
      clicks++
      lessStars(clicks);
      countMoves(clicks);
      if ($compare[0].innerHTML === $card[0].innerHTML) {
        console.log("match");
        $card.addClass("match");
        $compare.addClass("match");
        $compare = null;
        matchCount++;
          if (matchCount === 8){
          openModal();
          clearInterval(timer)
          }
      } else {
        console.log("doesn't match");
        setTimeout(function(){
          $card.removeClass("open show");
          $compare.removeClass("open show");
          $compare = null;
        },300)
    }
    } else {
      $card.attr('disabled', true);
    }
  });
}

playGame();

let $compare = null
let matchCount = 0
var timer;
let timeNeeded = "";
var timeSeconds = 0;

// timer https://stackoverflow.com/questions/2604450/how-to-create-a-jquery-clock-timer#answer-19744442

function getDate(){
               var start = new Date().getTime()
               timer = setInterval(function(){
               var currentTime = new Date().getTime()
               var elapsedTime = currentTime - start
               let m = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
               let s = Math.floor((elapsedTime % (1000 * 60)) / 1000);
               if(s<10){
                   s = "0"+s;
               }
               timeNeeded = m + ":" + s;
               $("h3").text(m+" : "+s);
               console.log(timeNeeded);
             }, 500);
    };

function resetTimer() {
  timeSeconds = -1;
  getDate();
}

function resetGame() {
  clickCount = 0;
  timeNeeded = "";
  timer = false;
  clicks = 0;
  $('.stars').children().removeClass("star-lost")
  shuffle(initialCards);
  makeDeck();
  playGame();
  countMoves();
  resetTimer();
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
